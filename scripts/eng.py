import os, ujson, pandas, geopandas
from get_root import inputdir, outputdir
from data_tools import addData, createCsv, readSheet
from oac_reader import writeClassification
from download import createFolder
from pop import pop

"""
Create Folders
"""

createFolder(inputdir)
createFolder(outputdir + 'eng')

"""
Creates Gejson files
"""

#Dep
if not os.path.exists(outputdir + 'eng/dep.geojson'):
	addData(
		shapefile = inputdir + 'bd_lsoa/england_lsoa_2011.shp', 
		injson = outputdir + 'eng/lsoa.geojson', 
		workbook = inputdir + 'dep_eng/England Deprivation.xlsx', 
		worksheet = 'IMD2019', 
		id_col = 0, 
		data_col = 4, 
		name = 'dep', 
		outjson = outputdir + 'eng/dep.geojson'
	)

#TUNDRA
if not os.path.exists(outputdir + 'eng/mob.geojson'):
	addData(
		shapefile = inputdir + 'bd_lsoa/england_lsoa_2011.shp', 
		injson = outputdir + 'eng/lsoa.geojson', 
		workbook = inputdir + 'mob_eng/England Mobility.xlsx', 
		worksheet = 'LSOA Quintile', 
		id_col = 0, 
		data_col = 2, 
		name = 'tundra', 
		outjson = outputdir + 'eng/mob.geojson'
	)

#OAC
if not os.path.exists(outputdir + 'eng/oac.geojson'):
	addData(
		shapefile = inputdir + 'bd_oa/england_oa_2011.shp', 
		injson = outputdir + 'eng/oa.geojson', 
		workbook = inputdir + 'cen_uk/2011 OAC Clusters and Names Excel v2.xlsx', 
		worksheet = '2011 OAC Clusters', 
		id_col = 0, 
		data_col = 9, 
		name = 'oac', 
		outjson = outputdir + 'eng/oac.geojson'
	)

#Pop
if not os.path.exists(outputdir + 'eng/pop.xlsx'):
	pop()

if not os.path.exists(outputdir + 'eng/pop.geojson'):
	addData(
		shapefile = inputdir + 'bd_lsoa/england_lsoa_2011.shp', 
		injson = outputdir + 'eng/lsoa.geojson', 
		workbook = outputdir + 'eng/pop.xlsx', 
		worksheet = 'pop', 
		id_col = 0, 
		data_col = 1, 
		name = 'pop', 
		outjson = outputdir + 'eng/pop.geojson'
	)

#Classification Desc
if not os.path.exists(outputdir + 'eng/classification.json'):
	with open(outputdir + 'eng/classification.json', 'w', encoding='utf-8') as f:
		ujson.dump(writeClassification(), f)

#Wards
if not os.path.exists(outputdir + 'eng/wards.geojson'):
	print("Creating ward file")
	#Merge two ward files
	gdf1 = geopandas.read_file(inputdir + 'ward_gb/unitary_electoral_division_region.shp')
	gdf2 = geopandas.read_file(inputdir + 'ward_gb/district_borough_unitary_ward_region.shp')
	gdf = geopandas.GeoDataFrame(pandas.concat([gdf1, gdf2]))

	#Output to file
	gdf.to_file(outputdir + 'eng/wards.geojson', driver='GeoJSON')

"""
Writes England Wide Data
"""

#Dep
if not os.path.exists(outputdir + 'eng/eng_dep.json'):
	with open(outputdir + 'eng/eng_dep.json', 'w', encoding='utf-8') as f:
		data = readSheet(
			workbook = inputdir + 'dep_eng/England Deprivation.xlsx', 
			worksheet = 'IMD2019', 
			id_col = 0, 
			data_col = 4, 
			writer = True, 
			filter_country = 'E'
		) 
		ujson.dump(data, f)

#TUNDRA
if not os.path.exists(outputdir + 'eng/eng_mob.json'):
	with open(outputdir + 'eng/eng_mob.json', 'w', encoding='utf-8') as f:
		data = readSheet(
			workbook = inputdir + 'mob_eng/England Mobility.xlsx', 
			worksheet = 'LSOA Quintile', 
			id_col = 0, 
			data_col = 2, 
			writer = True, 
			filter_country = 'E'
		)
		ujson.dump(data, f)

#OAC
if not os.path.exists(outputdir + 'eng/eng_oac.json'):
	with open(outputdir + 'eng/eng_oac.json', 'w', encoding='utf-8') as f:
		data = readSheet(
			workbook = inputdir + 'cen_uk/2011 OAC Clusters and Names Excel v2.xlsx', 
			worksheet = '2011 OAC Clusters', 
			id_col = 0, 
			data_col = 9, 
			writer = True, 
			filter_country = 'E'
		)
		ujson.dump(data, f)

#Pop
if not os.path.exists(outputdir + 'eng/eng_pop.json'):
	with open(outputdir + 'eng/eng_pop.json', 'w', encoding='utf-8') as f:
		data = readSheet(
			workbook = outputdir + 'eng/pop.xlsx', 
			worksheet = 'pop', 
			id_col = 0, 
			data_col = 1, 
			writer = True, 
			filter_country = 'E'
		)
		ujson.dump(data, f)