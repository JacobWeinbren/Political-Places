import csv, re, ujson
from openpyxl import load_workbook
from get_root import inputdir, outputdir
from data_tools import readJSON

def eng_politics(injson, file, outjson):
	#For console output
	print("\n")

	#Read data
	print("Reading Data", file)
	with open(file) as f:

		#Skip beginning
		reader = csv.reader(f)
		next(reader)
		header = next(reader)
		header_copy = header.copy()

		#Update headers
		for index, head in enumerate(header):
			if 0 <= index <= 5:
				header_copy[index] = 'meta-' + head
			if 6 <= index <= 17:
				header_copy[index] = 'new-v-' + head
			if 18 <= index <= 29:
				header_copy[index] = 'old-v-' + head
			if 30 <= index <= 41:
				header_copy[index] = 'new-p-' + head
			if 42 <= index <= 53:
				header_copy[index] = 'old-p-' + head

		data = []

		for index, row in enumerate(reader):
			data.append(dict(zip(header_copy, row)))

	#Read features
	features, features_copy = readJSON(injson)

	regex = re.compile('[^a-zA-Z]')
	parties = ['Con', 'Lab', 'LDem', 'UKIP', 'Grn', 'SNP', 'PC', 'Ind', 'IndGrp', 'Reg', 'ResAss', 'Oth']
	to_delete = []

	#Add data to features
	for index, feature in enumerate(features['features']):
		props = feature['properties']

		#Get name of ward
		feature_name = props['NAME'].rsplit(' ', 1)[0].lower().replace(' & ', '').replace(' and ', '')
		feature_name = regex.sub('', feature_name)

		#Defaults
		features_copy['features'][index]['properties'] = {
			'winner': None,
			'majority': None,
			'swing': None,
			'swing_party': None,
			'name': None
		}

		found = False

		for item in data:
			#Get name of ward in data
			ward_name = item['meta-Ward / Division'].lower().replace(' & ', '').replace(' and ', '')
			ward_name = regex.sub('', ward_name) 

			#In the array
			if ward_name == feature_name:
				found = True
				#As percentage points
				results = {}
				changes = {}

				for party in parties:
					results[party] = float(item['new-p-' + party].strip() or 0)
					changes[party] = float(item['new-p-' + party].strip() or 0) - float(item['old-p-' + party].strip() or 0)

				sorted_results = sorted(results, key=results.get, reverse=True)
				
				first_party = sorted_results[0]
				second_party = sorted_results[1]
				majority = results[first_party] - results[second_party]
				swing = abs((changes[first_party] - changes[second_party]) / 2)

				if changes[second_party] >= changes[first_party]: 
					swing_party = second_party
				else:
					swing_party = first_party

				features_copy['features'][index]['properties'] = {}
				features_copy['features'][index]['properties']['winner'] = first_party
				features_copy['features'][index]['properties']['majority'] = round(majority, 1)
				features_copy['features'][index]['properties']['swing'] = round(swing, 1)
				features_copy['features'][index]['properties']['swing_party'] = swing_party
				features_copy['features'][index]['properties']['name'] = ward_name

		if not found:
			to_delete.append(index)

	features_copy['features'] = [i for j, i in enumerate(features_copy['features']) if j not in to_delete]

	print("Writing to", outjson)
	with open(outjson, "w") as file:
	    ujson.dump(features_copy, file, indent=2, sort_keys=True)
