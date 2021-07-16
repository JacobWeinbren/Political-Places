import os, zipfile, shutil, requests, mimetypes
from urllib.parse import urlparse 
from tqdm import tqdm
from progressist import ProgressBar
from shutil import copyfile
from get_root import inputdir, outputdir
import pandas as pd

"""
Downloads project files
"""

#So it is ok to download new constituencies, using a header
headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}

if not os.path.exists(inputdir):
	os.makedirs(inputdir)

"""
Progress bar
"""

def retrieve(url, fname):
    resp = requests.get(url, headers=headers, stream=True)
    total = int(resp.headers.get('content-length', 0))
    with open(fname, 'wb') as file, tqdm(
            desc=fname,
            total=total,
            unit='iB',
            unit_scale=True,
            unit_divisor=1024,
    ) as bar:
        for data in resp.iter_content(chunk_size=1024):
            size = file.write(data)
            bar.update(size)

"""
Download file function
"""
def download(directory, url, name, ext="zip"):
	
	directory = inputdir + directory
	loc = directory + "/" + name
	loc = loc + "." + ext

	if not os.path.exists(directory):
		os.makedirs(directory)

	if len(os.listdir(directory)) == 0:
		print("Downloading", name)
		retrieve(url, loc)

		
		if ext == 'zip':
			with zipfile.ZipFile(loc,"r") as zip_ref:
				zip_ref.extractall(directory+"/")

			os.remove(loc)

#LSOA
download(
	"bd_lsoa", 
	"https://borders.ukdataservice.ac.uk/ukborders/easy_download/prebuilt/shape/England_lsoa_2011.zip", 
	"LSOA Boundaries"
)

#MSOA
download(
	"bd_msoa", 
	"https://borders.ukdataservice.ac.uk/ukborders/easy_download/prebuilt/shape/England_msoa_2011.zip", 
	"MSOA Boundaries"
)

#OA
download(
	"bd_oa", 
	"https://borders.ukdataservice.ac.uk/ukborders/easy_download/prebuilt/shape/England_oa_2011.zip", 
	"OA Boundaries"
)

#Data Zones Scotland
download(
	"bd_sco", 
	"https://www.gov.scot/binaries/content/documents/govscot/publications/statistics/2018/10/simd-2011-data-zone-boundaries/documents/2011-data-zone-boundaries/2011-data-zone-boundaries/govscot%3Adocument/SG_SIMD_2016.zip", 
	"DataZone Boundaries"
)

#Data Zones
download(
	"bd_ni", 
	"https://www.nisra.gov.uk/sites/nisra.gov.uk/files/publications/SOA2011_Esri_Shapefile_0.zip", 
	"Northern Ireland Super Output Boundaries"
)

#GB Constituencies 2019
download(
	"con_gb", 
	"https://api.os.uk/downloads/v1/products/BoundaryLine/downloads?area=GB&format=ESRI%C2%AE+Shapefile&redirect", 
	"GB Constituencies 2019"
)
if os.path.exists(inputdir + 'con_gb/Data'):
	copyfile(inputdir + "con_gb/Data/GB/westminster_const_region.dbf", inputdir + "con_gb/westminster_const_region.dbf")
	copyfile(inputdir + "con_gb/Data/GB/westminster_const_region.prj", inputdir + "con_gb/westminster_const_region.prj")
	copyfile(inputdir + "con_gb/Data/GB/westminster_const_region.shp", inputdir + "con_gb/westminster_const_region.shp")
	copyfile(inputdir + "con_gb/Data/GB/westminster_const_region.shx", inputdir + "con_gb/westminster_const_region.shx")
	shutil.rmtree(inputdir + "con_gb/Data")
	shutil.rmtree(inputdir + "con_gb/Doc")

#England Constituencies New
download(
	"con_eng", 
	"https://boundarycommissionforengland.independent.gov.uk/wp-content/uploads/2021/06/2021_06_08_Initial_Proposals_England_v2-shapefile.zip", 
	"England Constituencies 2023"
)

#NI Constituencies 2019
download(
	"con_ni", 
	"https://data.nicva.org/sites/default/files/pc2008_clipped.zip", 
	"NI Constituencies 2019 (Order 2008)"
)

#Wales Deprivation
download(
	"dep_eng", 
	"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/833970/File_1_-_IMD2019_Index_of_Multiple_Deprivation.xlsx", 
	"England Deprivation",
	"xlsx"
)


#Wales Deprivation
download(
	"dep_wal", 
	"https://statswales.gov.wales/Download/File?fileId=570", 
	"Wales Deprivation",
	"ods"
)

#NI Deprivation
download(
	"dep_ni", 
	"https://www.nisra.gov.uk/sites/nisra.gov.uk/files/publications/NIMDM17_SOAresults.xls", 
	"Northern Ireland Deprivation",
	"xls"
)

#Scotland Deprivation
download(
	"dep_sco", 
	"https://www.gov.scot/binaries/content/documents/govscot/publications/statistics/2020/01/scottish-index-of-multiple-deprivation-2020-postcode-look-up-file/documents/simd-2020-postcode-lookup-v5/simd-2020-postcode-lookup-v5/govscot%3Adocument/SIMD%2B2020v2%2B-%2Bpostcode%2Blookup%25232.xlsx", 
	"Scotland Deprivation",
	"xlsx"
)

#England Mobility
download(
	"mob_eng", 
	"https://www.officeforstudents.org.uk/media/633159de-49c4-4dd9-b543-575442704fd6/msoalsoa_1216.xlsx", 
	"England Mobility",
	"xlsx"
)

#UK Mobility
download(
	"mob_uk", 
	"https://www.officeforstudents.org.uk/media/f3c87ca7-c37d-4822-8904-54b87b1d304c/polar4_dataset_september2020.xlsx", 
	"UK Mobility",
	"xlsx"
)

#UK Classification
download(
	"cen_uk", 
	"https://www.ons.gov.uk/file?uri=/methodology/geography/geographicalproducts/areaclassifications/2011areaclassifications/datasets/2011oacclustersandnamesexcelv2.zip", 
	"UK Classification"
)

#UK Classification Description
download(
	"des_uk", 
	"https://www.ons.gov.uk/file?uri=/methodology/geography/geographicalproducts/areaclassifications/2011areaclassifications/penportraitsandradialplots/penportraits.pdf", 
	"UK Classification Description",
	"pdf"
)

#OA MAp
download(
	"bui_uk", 
	"https://api.os.uk/downloads/v1/products/VectorMapDistrict/downloads?area=GB&format=GeoPackage&redirect", 
	"UK Buildings"
)

#UK Population 2009
download(
	"pop_old", 
	"https://www.ons.gov.uk/file?uri=%2fpeoplepopulationandcommunity%2fpopulationandmigration%2fpopulationestimates%2fdatasets%2flowersuperoutputareamidyearpopulationestimates%2fmid2002tomid2011persons/rftlsoaunformattedtablepersons.zip", 
	"UK Population 2009"
)
if not os.path.exists(inputdir + "pop_old/2007-2010.xlsx"):
	print('Converting to xlsx')
	df = pd.read_excel(
		inputdir + "pop_old/SAPE8DT1b-LSOA-syoa-unformatted-persons-mid2007-to-mid2010.xls", 
		sheet_name="Mid-2009",
		header=None
	)
	df.to_excel(inputdir + "pop_old/2007-2010.xlsx", index=False, header=False)

#UK Population 2019
download(
	"pop_new", 
	"https://www.ons.gov.uk/file?uri=%2fpeoplepopulationandcommunity%2fpopulationandmigration%2fpopulationestimates%2fdatasets%2flowersuperoutputareamidyearpopulationestimates%2fmid2019sape22dt2/sape22dt2mid2019lsoasyoaestimatesunformatted.zip", 
	"UK Population 2019"
)
