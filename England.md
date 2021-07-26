## Operation Instructions for England

Guides for all other nations coming, when we do articles on them.

1. ```cd``` into the dir root ```Political-Places```

2. Run ```python scripts/eng.py``` to add data to geojson maps and collect csv files to ```output/eng/```


## Generate deprivation/mobility maps

1. open ArcGIS, then run ```JSON to Features``` for Mobility and Deprivation ```.geojson``` files.

2. Add in buildings onto the map from ```uk_vec geodatabase```.

3. Select your constituencies and then export their features through ```Data -> Export Features```.

4. Give old constituencies the ```old_con``` attribute, and do the same with new constituencies, ```new_con```. You can do this in ```Data -> Attribute Table```, setting the value type to ```text```.

5. ```Overlay (Union)``` the constituencies (this makes smaller features that represent where they overlap). The order is important 

6. Intersect buildings with combined constituencies, culling all attributes.

7. Intersect ```deprivation``` and ```mobility``` with combined constituencies. keep ```old_con```, ```new_con``` + ```dep```/```mob``` attrs and remove the remainder. This works because they are both LSOA data.

8. Preview layer blend ```colour burn``` in appearance .

9. Upload two layers - Deprivation & Mobility + Buildings. You can do this by right clicking the layers on the left toolbar and selecting sharing web layer (vector tile). Remember to select WSG84 Projection.

10. You will likely need to run some basic analysis. You can use ```scripts/analysis.py``` for this. The resulting map should look similar to the following.

![Map of MK Constituencies on ArcGIS](result.png?raw=true "Map of MK Constituencies on ArcGIS")


## Generate the classification (or % population change) map

1. Run ```JSON to Features``` for OAC (Output Area Classification) or population ```.geojson``` files.

2. Run intersect with MK Combined and OAC/Pop layer.

2. a. (Optional) - Generate the MK Buildings layer, through intersecting combined constituencies with buildings.

3. Manually cull attributes, keeping only the classification code.

4. Upload Area Classifications layer. Remember to select WSG84 Projection.
