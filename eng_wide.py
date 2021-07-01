import csv
from openpyxl import load_workbook

def getxlsx(book, sheet, id_col, data_col, writer):
	wb = load_workbook(filename = book, data_only = 'True')
	sheet_ranges = wb[sheet]

	iterinput = iter(sheet_ranges.rows)
	next(iterinput)

	for value, row in enumerate(iterinput):
		if str(row[id_col].value)[0] == 'E':
			val = row[data_col].value 

			#For Soc Mob
			if val == '.':
				val = None

			writer.writerow([val])

def createcsv(file):
	writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
	writer.writerow(['Dep'])
	return writer

print("Dep")
with open('output/eng_dep.csv', 'w') as file: 
	writer = createcsv(file)
	getxlsx('input/dep_eng/File_1_-_IMD2019_Index_of_Multiple_Deprivation.xlsx', 'IMD2019', 0, 4, writer) 

print("Mob")
with open('output/eng_mob.csv', 'w') as file: 
	writer = createcsv(file)
	getxlsx('input/mob_eng/msoalsoa_1216.xlsx', 'LSOA Quintile', 0, 2, writer)

print("OAC")
with open('output/eng_oac.csv', 'w') as file: 
	writer = createcsv(file)
	getxlsx('input/uk_cen/oac_v2.xlsx', '2011 OAC Clusters', 0, 9, writer)

print("Pop")
with open('output/eng_pop.csv', 'w') as file: 
	writer = createcsv(file)
	getxlsx('output/pop.xlsx', 'pop', 0, 1, writer)