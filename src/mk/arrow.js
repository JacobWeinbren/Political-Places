import CIMSymbol from "@arcgis/core/symbols/CIMSymbol";
import * as cimSymbolUtils from "@arcgis/core/symbols/support/cimSymbolUtils";

export const aboveSymbol = new CIMSymbol({
    data: {
        "type": "CIMSymbolReference",
        "symbol": {
            "type": "CIMPointSymbol",
            "haloSize": 1,
            "scaleX": 1,
            "angleAlignment": "Display",
            "symbolLayers": [{
                "type": "CIMVectorMarker",
                "enable": true,
                "anchorPointUnits": "Relative",
                "dominantSizeAxis3D": "Y",
                "size": 10,
                "billboardMode3D": "FaceNearPlane",
                "scaleSymbolsProportionally": true,
                "respectFrame": true,
                "frame": { "xmin": 0, "ymin": 0, "xmax": 32, "ymax": 32 },
                "clippingPath": {
                    "type": "CIMClippingPath",
                    "clippingType": "Intersect",
                    "path": {
                        "rings": [
                            [
                                [0, 0],
                                [32, 0],
                                [32, 32],
                                [0, 32],
                                [0, 0]
                            ]
                        ]
                    }
                },
                "markerGraphics": [{
                    "type": "CIMMarkerGraphic",
                    "symbol": { "type": "CIMPolygonSymbol", "symbolLayers": [{ "type": "CIMSolidFill", "enable": true, "color": [5, 113, 176, 255], "colorLocked": false }] },
                    "geometry": {
                        "rings": [
                            [
                                [16.1, 0],
                                [16.1, 20.9],
                                [25.7, 10.9],
                                [25.7, 19.1],
                                [12.9, 31.9],
                                [0, 19.1],
                                [0, 11],
                                [9.6, 21],
                                [9.6, 0],
                                [16.1, 0]
                            ]
                        ]
                    }
                }]
            }]
        }
    }
});

export function createArrowSymbol(color, rotation) {
    const symbol = aboveSymbol.clone();
    cimSymbolUtils.applyCIMSymbolColor(symbol, color);
    cimSymbolUtils.applyCIMSymbolRotation(symbol, rotation);
    return symbol;
}