import ujson, copy, csv
from openpyxl import load_workbook

def addData(injson, workbook, worksheet, id_col, data_col, name, outjson):

	print("Reading", injson)
	with open(injson) as f:
		data = ujson.load(f)
		data_copy = copy.deepcopy(data)

	#Loads Workbook
	print("Reading", workbook, worksheet)
	wb = load_workbook(filename = workbook, data_only = 'True')
	sheet_ranges = wb[worksheet]

	#Interates on Sheet
	iterinput = iter(sheet_ranges.rows)
	next(iterinput)
	sheet_data = {}
	for value, row in enumerate(iterinput):
		val = row[data_col].value 

		#For Soc Mob
		if val == '.':
			val = None

		sheet_data[row[id_col].value] = val

	#Appends to Geojson
	for index, feature in enumerate(data['features']):
		props = feature['properties']
		code = props['code']
		if code in sheet_data:
			data_copy['features'][index]['properties'][name] = sheet_data[code]
		else:
			data_copy['features'][index]['properties'][name] = None

		if index % 1000 == 0:
			print("Line", index)

	print("Writing to", outjson, "\n")
	with open(outjson, "w") as file:
	    ujson.dump(data_copy, file, indent=2, sort_keys=True)

#Dep
addData('input/bd_lsoa/lsoa.geojson', 'input/dep_eng/File_1_-_IMD2019_Index_of_Multiple_Deprivation.xlsx', 'IMD2019', 0, 4, 'dep', 'output/dep.geojson')

#TUNDRA
addData('input/bd_lsoa/lsoa.geojson', 'input/mob_eng/msoalsoa_1216.xlsx', 'LSOA Quintile', 0, 2, 'tundra', 'output/mob.geojson')

"""

#OAC
addData('input/bd_oa/oa.geojson', 'input/uk_cen/oac_v2.xlsx', '2011 OAC Clusters', 0, 9, 'oac', 'output/oac.geojson')

#Pop
addData('input/bd_lsoa/lsoa.geojson', 'output/pop.xlsx', 'pop', 0, 1, 'pop', 'output/pop.geojson')"""