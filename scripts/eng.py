import os, ujson
from get_root import inputdir, outputdir
from data_tools import addData, createCsv, readSheet
from oac_reader import writeClassification
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
	addData(inputdir + 'bd_oa/england_oa_2011.shp', outputdir + 'eng/oa.geojson', inputdir + 'cen_uk/2011 OAC Clusters and Names Excel v2.xlsx', '2011 OAC Clusters', 0, 9, 'oac', outputdir + 'eng/oac.geojson')

if not os.path.exists(outputdir + 'eng/pop.xlsx'):
	pop()

#Pop
if not os.path.exists(outputdir + 'eng/pop.geojson'):
	addData(lsoa[0], lsoa[1], outputdir + 'eng/pop.xlsx', 'pop', 0, 1, 'pop', outputdir + 'eng/pop.geojson')

#Classification Desc
if not os.path.exists(outputdir + 'eng/classification.json'):
	with open(outputdir + 'eng/classification.json', 'w', encoding='utf-8') as f:
		ujson.dump(writeClassification(), f)

"""
England Wide Data
"""

#Dep
if not os.path.exists(outputdir + 'eng/eng_dep.json'):
	with open(outputdir + 'eng/eng_dep.json', 'w', encoding='utf-8') as f:
		data = readSheet(inputdir + 'dep_eng/England Deprivation.xlsx', 'IMD2019', 0, 4, True, filter_country='E') 
		ujson.dump(data, f)

#TUNDRA
if not os.path.exists(outputdir + 'eng/eng_mob.json'):
	with open(outputdir + 'eng/eng_mob.json', 'w', encoding='utf-8') as f:
		data = readSheet(inputdir + 'mob_eng/England Mobility.xlsx', 'LSOA Quintile', 0, 2, True, filter_country='E')
		ujson.dump(data, f)

#OAC
if not os.path.exists(outputdir + 'eng/eng_oac.json'):
	with open(outputdir + 'eng/eng_oac.json', 'w', encoding='utf-8') as f:
		data = readSheet(inputdir + 'cen_uk/2011 OAC Clusters and Names Excel v2.xlsx', '2011 OAC Clusters', 0, 9, True, filter_country='E')
		ujson.dump(data, f)

#Pop
if not os.path.exists(outputdir + 'eng/eng_pop.json'):
	with open(outputdir + 'eng/eng_pop.json', 'w', encoding='utf-8') as f:
		data = readSheet(outputdir + 'eng/pop.xlsx', 'pop', 0, 1, True, filter_country='E')
		ujson.dump(data, f)