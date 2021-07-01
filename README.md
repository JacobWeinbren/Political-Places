# Places

Navigating the UK constituencies can be tricky, but in every place is a fascinating story of people and history, economy and culture coming together. If people have any contributions or queries - they can email me or the TSR and I will try and get back!

Regarding the 4 UK nations, I have tried to pick datasets that are carried out across them.

2023 Boundary Review for NI comes out in [autumn](https://www.boundarycommission.org.uk/2023-review-parliamentary-constituencies).

Running ```find . -size +100M | cat >> .gitignore```, to filter out larger files.

## Boundaries 

Reference boundaries, full resolution. Converted to geojson in QGIS.

| Name | Year | Link | Folder id |
|-|:-:|:-:|:-:|
| LSOA | 2011 | [Link](https://borders.ukdataservice.ac.uk/easy_download_data.html?data=England_lsoa_2011https://borders.ukdataservice.ac.uk/easy_download_data.html?data=England_lsoa_2011) | bd_lsoa |
| MSOA | 2011 | [Link](https://borders.ukdataservice.ac.uk/easy_download_data.html?data=England_msoa_2011) | bd_lsoa |
| OA | 2011 | [Link](https://borders.ukdataservice.ac.uk/easy_download_data.html?data=England_oa_2011) | bd_oa |
| Scottish Data Zones | 2011 | [Link](https://www.gov.scot/publications/simd-2011-data-zone-boundaries/) | bd_dz | 
| NI Super Output Boundaries | 2011 | [Link](https://www.nisra.gov.uk/publications/super-output-area-boundaries-gis-format) | bd_ni |

## Shapefiles
| Name | Year | Type | Link | Folder id | 
|-|:-:|:-:|:-:|:-:|
| Current Constituency Boundaries | 2021 | Constituencies | [Link](https://osdatahub.os.uk/downloads/open/BoundaryLine) | con_old | Access dir: ```GB``` |
| 2023 Constituency Boundaries | 2021 | Constituencies | [Link](https://boundarycommissionforengland.independent.gov.uk/2023-review/) | con_new | 
| 2008 Constituency Boundaries NI | 2008 | Constituencies | [Link](https://data.nicva.org/dataset/administrative-land-boundaries/resource/15ef7156-d7e5-48cb-bc08-b0fe6f3e843d) | con_ni | 
| Wales Deprivation Index | 2019 | Deprivation | [Link](http://lle.gov.wales/catalogue/item/WelshIndexOfMultipleDeprivationWIMD2019/?lang=en) | dp_wal |  |
| Northern Ireland Deprivation Index | 2017 | Deprivation | [Link](https://www.nisra.gov.uk/statistics/deprivation/northern-ireland-multiple-deprivation-measure-2017-nimdm2017) | dp_ni | 
| Scotland Deprivation Index | 2020 | Deprivation | [Link](https://data.gov.uk/dataset/1102bf85-ed49-440a-b211-da87e8d752eb/scottish-index-of-multiple-deprivation-simd-2020) | dp_sco |  |
| Buildings OS | 2021 | Map | [Link](https://www.ordnancesurvey.co.uk/business-government/products/vectormap-district) | uk_vec | 

## Data
| Name | Year | Type | Link | Folder id | 
|-|:-:|:-:|:-:|:-:|
| England Deprivation Index | 2019 | Deprivation | [Link](https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019) | dep_eng |  |
| England Social Mobility Index | 2021 | Mobility | [Link](https://www.officeforstudents.org.uk/data-and-analysis/young-participation-by-area/get-the-area-based-measures-data/) | mob_eng |  |
| UK Wide Social Mobility Index | 2020 | Mobility | [Link](https://www.officeforstudents.org.uk/data-and-analysis/young-participation-by-area/get-the-area-based-measures-data/) | mob_uk |  |
| Census Area Classification OAC Clusters | 2011 | Classification | [Link](https://www.ons.gov.uk/methodology/geography/geographicalproducts/areaclassifications/2011areaclassifications/datasets) | uk_cen |  |
| LSOA Population old | 2009 | Population | [Link](https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/lowersuperoutputareamidyearpopulationestimates) | uk_pop | Removed unnecessary years + converted to xlsx. From file ```SAPE8DT1b-LSOA-syoa-unformatted-persons-mid2007-to-mid2010.xls``` |
| LSOA Population new | 2019 | Population | [Link](https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/lowersuperoutputareamidyearpopulationestimates) | uk_pop |



## License
[MIT](https://choosealicense.com/licenses/mit/)
