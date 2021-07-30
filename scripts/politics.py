import csv
from openpyxl import load_workbook
from get_root import inputdir, outputdir
from data_tools import readJSON

def eng_politics(injson, file, outjson):
	with open(file) as f:
		reader = csv.reader(f)
		next(reader)
		header = next(reader)
		data = [dict(zip(header, row)) for row in reader]

	features, features_copy = readJSON(injson)

eng_politics(outputdir + 'eng/wards.geojson', inputdir + 'pol_eng/England Local Elections 2021.csv', 'b')
