import os, zipfile, shutil
import urllib.request
from progressist import ProgressBar
from shutil import copyfile

def download(directory, filename, url, name, unzip=False):
	
	directory = "input/"+directory
	loc = directory+"/"+filename

	if not os.path.exists(directory):
		os.makedirs(directory)

		print("Downloading", name)
		bar = ProgressBar(template="Download |{animation}| {done:B}/{total:B}")
		urllib.request.urlretrieve(url, loc, reporthook=bar.on_urlretrieve)

		if unzip:
			
			with zipfile.ZipFile(loc,"r") as zip_ref:
				zip_ref.extractall(directory+"/")

			os.remove(loc)

#LSOA
download(
	"bd_lsoa", 
	"lsoa.zip", 
	"https://borders.ukdataservice.ac.uk/ukborders/easy_download/prebuilt/shape/England_lsoa_2011.zip", 
	"LSOA Boundaries", 
	True
)

#MSOA
download(
	"bd_msoa", 
	"msoa.zip", 
	"https://borders.ukdataservice.ac.uk/ukborders/easy_download/prebuilt/shape/England_msoa_2011.zip", 
	"MSOA Boundaries", 
	True
)

#OA
download(
	"bd_oa", 
	"os.zip", 
	"https://borders.ukdataservice.ac.uk/ukborders/easy_download/prebuilt/shape/England_oa_2011.zip", 
	"OA Boundaries", 
	True
)

#Data Zones
download(
	"bd_dz", 
	"dz.zip", 
	"https://www.gov.scot/binaries/content/documents/govscot/publications/statistics/2018/10/simd-2011-data-zone-boundaries/documents/2011-data-zone-boundaries/2011-data-zone-boundaries/govscot%3Adocument/SG_SIMD_2016.zip", 
	"DataZone Boundaries", 
	True
)

#Data Zones
download(
	"bd_ni", 
	"ni.zip", 
	"https://www.nisra.gov.uk/sites/nisra.gov.uk/files/publications/SOA2011_Esri_Shapefile_0.zip", 
	"Northern Ireland Super Output Boundaries", 
	True
)

#GB Constituencies
download(
	"con_old", 
	"con_old.zip", 
	"https://api.os.uk/downloads/v1/products/BoundaryLine/downloads?area=GB&format=ESRI%C2%AE+Shapefile&redirect", 
	"GB Constituencies", 
	True
)
copyfile("input/con_old/Data/GB/westminster_const_region.dbf", "input/con_old/westminster_const_region.dbf")
copyfile("input/con_old/Data/GB/westminster_const_region.prj", "input/con_old/westminster_const_region.prj")
copyfile("input/con_old/Data/GB/westminster_const_region.shp", "input/con_old/westminster_const_region.shp")
copyfile("input/con_old/Data/GB/westminster_const_region.shx", "input/con_old/westminster_const_region.shx")
shutil.rmtree("input/con_old/Data")
shutil.rmtree("input/con_old/Doc")