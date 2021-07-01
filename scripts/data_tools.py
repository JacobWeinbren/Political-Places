import ujson, copy, csv, os, geopandas
from openpyxl import load_workbook
from get_root import inputdir, outputdir

"""
A collection of tools for data processing
"""

"""
Reads a sheet, and returns. Writing to csv is optional
"""
def readSheet(workbook, worksheet, id_col, data_col, writer=False, skipextra=False):
	print("Reading", workbook, worksheet)
	
	wb = load_workbook(filename = workbook, data_only = 'True')
	sheet_ranges = wb[worksheet]

	#Skips header
	iterinput = iter(sheet_ranges.rows)
	next(iterinput)

	#Skip strange headers
	if skipextra:
		for i in range(skipextra):
			next(iterinput)

	store = {}

	for value, row in enumerate(iterinput):
		val = row[data_col].value 

		#For Soc Mob
		if val == '.':
			val = None

		store[row[id_col].value] = val

		if writer:
			writer.writerow([val])

	return store

"""
Creates empty csv file writer
"""
def createCsv(file):
	print("Creating CSV", file)
	writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
	return writer

"""
Adds data to geojson
"""
def addData(shapefile, injson, workbook, worksheet, id_col, data_col, name, outjson):
	#Create Geojson if not existing
	if not os.path.exists(injson):
		print("Creating geojson at", injson)
		shp_file = geopandas.read_file(shapefile)
		shp_file.to_file(injson, driver='GeoJSON')

	#Reads Json
	print("Reading", injson)
	with open(injson) as f:
		data = ujson.load(f)
		data_copy = copy.deepcopy(data)

	#Loads Workbook
	print("Loading book")
	sheet_data = readSheet(workbook, worksheet, id_col, data_col)

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