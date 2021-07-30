# Places
Navigating the UK constituencies can be tricky, but in every place is a fascinating story of people and history, economy and culture coming together. If people have any contributions or queries - they can email me or the TSR and I will try and get back!

## Notes
- Regarding the 4 UK nations, I have tried to pick datasets that are carried out across them.

- 2023 Boundary Review for NI comes out in [autumn](https://www.boundarycommission.org.uk/2023-review-parliamentary-constituencies).

- Uses pipreqs for requirements.txt

- Colour ramps from [Goedhart](https://thenode.biologists.com/data-visualization-with-flying-colors/research/) and [ArcGIS Colour Ramps](https://developers.arcgis.com/javascript/latest/visualization/symbols-color-ramps/esri-color-ramps/)

## Get Repo 
1. Clone directory through ```git clone https://github.com/JacobWeinbren/Political-Places```

2. Enter repo through change directory - ```cd Political-Places```

## Create Data
1. Run ```pip install -r requirements.txt```

2. Run ```python scripts/download.py``` to download files to ```input``` dir

3. Carry on with [England](England.md) (other nations in progress)

## Run Site
1. Install dependencies ```npm i -S```

2. Run ```npm run build```

## Boundaries 
Reference boundaries, full resolution. Converted to geojson in QGIS.

| Name | Year | Link | Folder id |
|-|:-:|:-:|:-:|
| LSOA | 2011 | [Link](https://borders.ukdataservice.ac.uk/easy_download_data.html?data=England_lsoa_2011https://borders.ukdataservice.ac.uk/easy_download_data.html?data=England_lsoa_2011) | bd_lsoa |
| MSOA Boundaries | 2011 | [Link](https://borders.ukdataservice.ac.uk/easy_download_data.html?data=England_msoa_2011) | bd_lsoa |
| OA Boundaries | 2011 | [Link](https://borders.ukdataservice.ac.uk/easy_download_data.html?data=England_oa_2011) | bd_oa |
| Scottish Data Zone Boundaries | 2011 | [Link](https://www.gov.scot/publications/simd-2011-data-zone-boundaries/) | bd_dz | 
| NI Super Output Boundaries | 2011 | [Link](https://www.nisra.gov.uk/publications/super-output-area-boundaries-gis-format) | bd_ni |

## Shapefiles
| Name | Year | Type | Link | Folder id | 
|-|:-:|:-:|:-:|:-:|
| Current Constituency Boundaries | 2021 | Constituencies | [Link](https://osdatahub.os.uk/downloads/open/BoundaryLine) | con_old | Access dir: ```GB``` |
| 2021 Ward Boundaries | 2021 | Wards | [Link](https://boundarycommissionforengland.independent.gov.uk/2023-review/) | ward_gb | 
| 2023 Constituency Boundaries | 2021 | Constituencies | [Link](https://boundarycommissionforengland.independent.gov.uk/2023-review/) | con_new | 
| 2008 Constituency Boundaries NI | 2008 | Constituencies | [Link](https://data.nicva.org/dataset/administrative-land-boundaries/resource/15ef7156-d7e5-48cb-bc08-b0fe6f3e843d) | con_ni | 
| Buildings OS | 2021 | Map | [Link](https://www.ordnancesurvey.co.uk/business-government/products/vectormap-district) | bui_uk | 

## Data
| Name | Year | Type | Link | Folder id | 
|-|:-:|:-:|:-:|:-:|
| England Deprivation Index | 2019 | Deprivation | [Link](https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019) | dep_eng |
| Wales Deprivation Index | 2019 | Deprivation | [Link](https://statswales.gov.wales/Catalogue/Community-Safety-and-Social-Inclusion/Welsh-Index-of-Multiple-Deprivation) | dep_wal |
| Northern Ireland Deprivation Index | 2017 | Deprivation | [Link](https://www.nisra.gov.uk/publications/nimdm17-soa-level-results) | dep_ni | 
| Scotland Deprivation Index | 2020 | Deprivation | [Link](https://www.gov.scot/publications/scottish-index-of-multiple-deprivation-2020v2-postcode-look-up/) | dep_sco |
| England Social Mobility Index | 2021 | Mobility | [Link](https://www.officeforstudents.org.uk/data-and-analysis/young-participation-by-area/get-the-area-based-measures-data/) | mob_eng |
| UK Wide Social Mobility Index | 2020 | Mobility | [Link](https://www.officeforstudents.org.uk/data-and-analysis/young-participation-by-area/get-the-area-based-measures-data/) | mob_uk |
| Census Area Classification OAC Clusters | 2011 | Classification | [Link](https://www.ons.gov.uk/methodology/geography/geographicalproducts/areaclassifications/2011areaclassifications/datasets) | cen_uk |
| BritainElects England Local Elections | 2021 | Politics | [Link](https://docs.google.com/spreadsheets/d/1eS_d4ZWRNJ7MGgUYoq6ST4WxCFwEygiS_17Bm4amPy0/edit#gid=1201132904) | pol_eng |
| LSOA Population old | 2009 | Population | [Link](https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/lowersuperoutputareamidyearpopulationestimates) | pop_old |
| LSOA Population new | 2019 | Population | [Link](https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/lowersuperoutputareamidyearpopulationestimates) | pop_new |
| OAC Classification Descriptions | 2015  | [Link](https://www.ons.gov.uk/methodology/geography/geographicalproducts/areaclassifications/2011areaclassifications/penportraitsandradialplots) | des_uk | 
## License
[MIT](https://choosealicense.com/licenses/mit/)
