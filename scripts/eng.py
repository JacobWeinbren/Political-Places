import os
from get_root import inputdir, outputdir
from data_tools import addData, createCsv
from pop import pop

if not os.path.exists(inputdir):
	os.makedirs(inputdir)

if not os.path.exists(outputdir + 'eng'):
	os.makedirs(outputdir + 'eng')

lsoa = (inputdir + 'bd_lsoa/england_lsoa_2011.shp', outputdir + 'eng/lsoa.geojson')

"""
Creates Gejson files
"""

#Dep
if not os.path.exists(outputdir + 'eng/dep.geojson'):
	addData(lsoa[0], lsoa[1], inputdir + 'dep_eng/England Deprivation.xlsx', 'IMD2019', 0, 4, 'dep', outputdir + 'eng/dep.geojson')

#TUNDRA
if not os.path.exists(outputdir + 'eng/mob.geojson'):
	addData(lsoa[0], lsoa[1], inputdir + 'mob_eng/England Mobility.xlsx', 'LSOA Quintile', 0, 2, 'tundra', outputdir + 'eng/mob.geojson')

#OAC
if not os.path.exists(outputdir + 'eng/oac.geojson'):
	addData(lsoa[0], lsoa[1], inputdir + 'cen_uk/2011 OAC Clusters and Names Excel v2.xlsx', '2011 OAC Clusters', 0, 9, 'oac', outputdir + 'eng/oac.geojson')

if not os.path.exists(outputdir + 'pop.xlsx'):
	pop()

#Pop
if not os.path.exists(outputdir + 'eng/pop.geojson'):
	addData(lsoa[0], lsoa[1], outputdir + 'pop.xlsx', 'pop', 0, 1, 'pop', 'output/eng/pop.geojson')

"""
England Wide Data
"""

#Dep
if not os.path.exists(outputdir + 'eng/eng_dep.csv'):
	with open(outputdir + 'eng/eng_dep.csv', 'w') as file: 
		writer = createcsv(file)
		readSheet('input/dep_eng/File_1_-_IMD2019_Index_of_Multiple_Deprivation.xlsx', 'IMD2019', 0, 4, writer) 

#TUNDRA
if not os.path.exists(outputdir + 'eng/eng_mob.csv'):
	with open(outputdir + 'eng/eng_mob.csv', 'w') as file: 
		writer = createcsv(file)
		readSheet('input/mob_eng/msoalsoa_1216.xlsx', 'LSOA Quintile', 0, 2, writer)

#OAC
if not os.path.exists(outputdir + 'eng/eng_aoc.csv'):
	with open(outputdir + 'eng/eng_oac.csv', 'w') as file: 
		writer = createcsv(file)
		readSheet('input/uk_cen/oac_v2.xlsx', '2011 OAC Clusters', 0, 9, writer)

#Pop
if not os.path.exists(outputdir + 'eng/eng_pop.csv'):
	with open(outputdir + 'eng/eng_pop.csv', 'w') as file: 
		writer = createcsv(file)
		readSheet('output/pop.xlsx', 'pop', 0, 1, writer)