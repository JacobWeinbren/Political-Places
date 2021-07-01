import os, zipfile
import urllib.request
from progressist import ProgressBar

def download(directory, filename, url, name, unzip=False):
	
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

download(
	"input/bd_lsoa", 
	"lsoa.zip", 
	"https://borders.ukdataservice.ac.uk/ukborders/easy_download/prebuilt/shape/England_lsoa_2011.zip", 
	"LSOA Boundaries", 
	True
)
os.remove('TermsAndConditions.htmls')
