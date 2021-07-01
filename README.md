# Places

Navigating the UK constituencies can be tricky, but in every place is a fascinating story of people and history, economy and culture coming together. If people have any contributions or queries - they can email me or the TSR and I will try and get back!

Regarding the 4 UK nations, I have tried to pick datasets that are carried out across them.

2023 Boundary Review for NI comes out in [autumn](https://www.boundarycommission.org.uk/2023-review-parliamentary-constituencies).

Running ```find . -size +100M | cat >> .gitignore```, to filter out larger files.

## Operation Instructions for England

Guides for all other nations coming, when we do articles on them.

1. Run ```pip install ujson openpyxl pyexcel pyexcel-xlsx```

2. Run ```python pop.py``` to add population data

3. Run ```python addjson.py``` to add data to geojson maps

4. Run ```python eng_wide.py``` to get England wide data, then add this data to ArcGIS

5. 
    a. This bit is more tricky - open ArcGIS, then run JSON to Features for Mob and Dep geojson files.

    b. Select your constituencies and then export the features through data -> export features.

    c. Give old constituencies the 'old_con' attribute, and do the same with new constituencies

    d. Overlay (union) the constituencies (this makes smaller features that represent where they overlap)

    e. Add in buildings onto the map from uk_vec geodatabase. Intersect with combined cons, keeping new_con and old_con

    f. Intersected combined constituencies with dep and mobility. keep old_con, new_con + dep/mob attrs. This works because they are both LSOA data.

    h. Preview layer blend in appearence - then upload by right clicking layers and selecting sharing web layer (vector tile)

    i. The resulting map should look similar to the following.

    ![Map of MK Constituencies on ArcGIS](result.png?raw=true "Map of MK Constituencies on ArcGIS")

## Boundaries 

Reference boundaries, full resolution. Converted to geojson in QGIS.

| Name | Year | Link | Folder id |
|-|:-:|:-:|:-:|
| LSOA | 2011 | [Link](https://borders.ukdataservice.ac.uk/easy_download_data.html?data=England_lsoa_2011https://borders.ukdataservice.ac.uk/easy_download_data.html?data=England_lsoa_2011) | bd_lsoa |
| MSOA | 2011 | [Link](https://borders.ukdataservice.ac.uk/easy_download_data.html?data=England_msoa_2011) | bd_lsoa |
| OA | 2011 | [Link](https://borders.ukdataservice.ac.uk/easy_download_data.html?data=England_oa_2011) | bd_oa |
| Scottish Data Zones | 2011 | [Link](https://www.gov.scot/publications/simd-2011-data-zone-boundaries/)
| NI Super Output Boundaries | 2011 | [Link](https://www.nisra.gov.uk/publications/super-output-area-boundaries-gis-format)

## Shapefiles
| Name | Year | Type | Link | Folder id | Notes |
|-|:-:|:-:|:-:|:-:|:-:|
| Old Constituency Boundaries | 2021 | Constituencies | [Link](https://osdatahub.os.uk/downloads/open/BoundaryLine) | con_old | Access dir: ```GB``` |
| New Constituency Boundaries | 2021 | Constituencies | [Link](https://boundarycommissionforengland.independent.gov.uk/2023-review/) | con_new | Initial Proposals for 2023 |
| Old Northern Ireland Constituency Boundaries | 2008 | Constituencies | [Link](https://data.nicva.org/dataset/administrative-land-boundaries/resource/15ef7156-d7e5-48cb-bc08-b0fe6f3e843d) | con_ni | From Order 2008 - Sometimes referred as '2010 boundaries' |
| Wales Deprivation Index | 2019 | Deprivation | [Link](http://lle.gov.wales/catalogue/item/WelshIndexOfMultipleDeprivationWIMD2019/?lang=en) | dp_wal |  |
| Northern Ireland Deprivation Index | 2017 | Deprivation | [Link](https://www.nisra.gov.uk/statistics/deprivation/northern-ireland-multiple-deprivation-measure-2017-nimdm2017) | dp_ni | csv needs converting |
| Scotland Deprivation Index | 2020 | Deprivation | [Link](https://data.gov.uk/dataset/1102bf85-ed49-440a-b211-da87e8d752eb/scottish-index-of-multiple-deprivation-simd-2020) | dp_sco |  |
| Buildings OS | 2021 | Map | [Link](https://www.ordnancesurvey.co.uk/business-government/products/vectormap-district) | uk_vec | Geopackage under dir: ```data``` | 

## Data
| Name | Year | Type | Link | Folder id | Notes |
|-|:-:|:-:|:-:|:-:|:-:|
| England Deprivation Index | 2019 | Deprivation | [Link](https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019) | dep_eng |  |
| England Social Mobility Index | 2021 | Mobility | [Link](https://www.officeforstudents.org.uk/data-and-analysis/young-participation-by-area/get-the-area-based-measures-data/) | mob_eng |  |
| UK Wide Social Mobility Index | 2020 | Mobility | [Link](https://www.officeforstudents.org.uk/data-and-analysis/young-participation-by-area/get-the-area-based-measures-data/) | mob_uk |  |
| Census Area Classification OAC Clusters | 2011 | Classification | [Link](https://www.ons.gov.uk/methodology/geography/geographicalproducts/areaclassifications/2011areaclassifications/datasets) | uk_cen |  |
| LSOA Population old | 2009 | Population | [Link](https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/lowersuperoutputareamidyearpopulationestimates) | uk_pop | Removed unnecessary years + converted to xlsx. From file ```SAPE8DT1b-LSOA-syoa-unformatted-persons-mid2007-to-mid2010.xls``` |
| LSOA Population new | 2019 | Population | [Link](https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/lowersuperoutputareamidyearpopulationestimates) | uk_pop | Removed header rows |



## License
[MIT](https://choosealicense.com/licenses/mit/)
