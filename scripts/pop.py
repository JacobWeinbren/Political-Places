import csv, os, openpyxl
from openpyxl import load_workbook
from pyexcel.cookbook import merge_csv_to_a_book
from data_tools import readSheet
from get_root import inputdir, outputdir

"""
Aggregates population data
"""
def pop():
	print("Collecting pop data")
	old = readSheet(
		workbook = inputdir + 'pop_old/2007-2010.xlsx', 
		worksheet = 'Sheet1', 
		id_col = 0, 
		data_col = 3
	) 
	#Skips header
	new = readSheet(
		workbook = inputdir + 'pop_new/SAPE22DT2-mid-2019-lsoa-syoa-estimates-unformatted.xlsx', 
		worksheet = 'Mid-2019 Persons', 
		id_col = 0, 
		skip_header = 4,
		data_col = 6
	) 

	with open(outputdir + 'eng/pop.csv', 'w') as file:
		writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
		writer.writerow(['LSOA', 'Population Change %'])

		for lsoa in old.keys():

			change = round(((new[lsoa] - old[lsoa]) / old[lsoa]) * 100, 2)
			writer.writerow([lsoa, change])

	print("Saving as xlsx")

	csv_loc = outputdir + 'eng/pop.csv'
	xlsx_loc = outputdir + 'eng/pop.xlsx'

	#Writes to an xlsx
	merge_csv_to_a_book([csv_loc], outfilename=xlsx_loc)

	#Renames sheetname
	ss = openpyxl.load_workbook(xlsx_loc)
	ss_sheet = ss['pop.csv']
	ss_sheet.title = 'pop'
	ss.save(xlsx_loc) 

	#Deletes csv
	os.remove(csv_loc)