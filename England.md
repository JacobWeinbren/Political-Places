## Operation Instructions for England

Guides for all other nations coming, when we do articles on them.

1. ```cd``` into the dir root ```Political-Places```

2. Run ```python scripts/eng.py``` to add data to geojson maps and collect csv files to ```output/eng/```

3. 
    a. This bit is more tricky - open ArcGIS, then run ```JSON to Features``` for Mobility and Deprivation ```.geojson``` files.
    
    b. Add in buildings onto the map from ```uk_vec geodatabase```.

    c. Select your constituencies and then export their features through ```Data -> Export Features```.

    d. Give old constituencies the ```old_con``` attribute, and do the same with new constituencies, ```new_con```. You can do this in ```Data -> Attribute Table```, setting the value type to ```text```.

    e. ```Overlay (Union)``` the constituencies (this makes smaller features that represent where they overlap).
    
    f. Intersect buildings with combined constituencies, keeping ```new_con``` and ```old_con```.

    g. Intersect ```deprivation``` and ```mobility``` with combined constituencies. keep ```old_con```, ```new_con``` + ```dep```/```mob``` attrs and remove the remainder. This works because they are both LSOA data.

    h. Preview layer blend ```colour burn``` in appearence - then upload by right clicking layers and selecting sharing web layer (vector tile). Remember to select WSG84 Projection

    j. The resulting map should look similar to the following.

    ![Map of MK Constituencies on ArcGIS](result.png?raw=true "Map of MK Constituencies on ArcGIS")
