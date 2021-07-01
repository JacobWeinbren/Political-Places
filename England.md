## Operation Instructions for England

Guides for all other nations coming, when we do articles on them.

1. Run ```pip install -r requirements.txt```

2. Run ```python download.py``` to download files to input

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