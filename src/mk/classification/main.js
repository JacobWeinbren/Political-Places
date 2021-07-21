//Loads in Calcite, JQuery, common styles
import '../common.js'

//Loads in styles
import './style.css';

//Loads in Esri
import esriConfig from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import Query from "@arcgis/core/rest/support/Query";

//Loads in extra components
import { CalciteBlock, CalciteBlockSection, CalciteIcon } from '@esri/calcite-components/dist/custom-elements';

customElements.define('calcite-block', CalciteBlock);
customElements.define('calcite-block-section', CalciteBlockSection);
customElements.define('calcite-icon', CalciteIcon);

//Loads in descriptions
import classification from '../../../output/eng/classification.json';
const class_data = classification['data'];

//Loads in chart 
import {
    Chart,
    PieController,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';

Chart.register(
    PieController,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

//Has to be 8 colours + colour blind distinguishable
const colours = [
    '#e69f00',
    '#56b4e9',
    '#009e73',
    '#f0e442',
    '#0072b2',
    '#d55e00',
    '#cc79a7',
    '#bbbbbb'
];

//Sets object arrays
var supergroups = [];
var groups = [];

//For colours
var current_col;

var temp_obj;
var temp_class;
var title;
var code;

//Iterate all the classes to add metadata
for (var i = 0; i < class_data.length; i++) {
    temp_class = class_data[i]
    title = temp_class.title;
    code = temp_class.code;

    //Add supergroups
    if (temp_class.supergroup != "" && temp_class.group == "") {
        temp_obj = {
            title: title,
            code: code.toString(),
            count: 0,
            percentage: 0,
        }

        current_col = colours[temp_class.supergroup - 1];
        temp_obj.colour = current_col;

        supergroups.push(temp_obj);
    }

    //Add groups
    if (temp_class.supergroup != "" && temp_class.group != "" && temp_class.subgroup == "") {
        temp_obj = {
            title: title,
            code: code,
            count: 0,
            percentage: 0,
        }

        temp_obj.colour = current_col;

        groups.push(temp_obj);
    }
}

//Creates descriptions
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {

    console.log(mutations, $(document.querySelectorAll("calcite-block-section")));

    $(document.querySelectorAll("calcite-block-section")).each(function(index) {
        console.log($(this));
        var id = $(this).attr('id');
        var color = $(this).attr('color');
        var title = $(this).attr('title');
        var $elem = $(this)[0].shadowRoot.querySelector('.section-header__text');

        console.log($elem);

        $($(this)[0].shadowRoot.querySelector('.content')).css('padding: .5rem');

        var $square = $('<calcite-icon icon="squareArea" scale="m"></calcite-icon>')
            .css('color', color);

        var $text = $('<b/>').html('&nbsp;&nbsp;' + title);

        $($elem)
            .append($square)
            .append($text)
            .css('display', 'flex')
            .css('align-items', 'center');
    });
    observer.disconnect();
});

observer.observe($('#descriptions').get(0), {
    childList: true,
    subtree: true
});

$(document).ready(function() {
    for (var i = 0; i < class_data.length; i++) {
        temp_class = class_data[i];

        if (temp_class.supergroup != "" && temp_class.group == "") {

            current_col = colours[temp_class.supergroup - 1];

            var $item = $('<calcite-block-section/>')
                .attr('id', i)
                .attr('color', current_col)
                .attr('title', temp_class.title)
                .text(temp_class.desc);

            $("#descriptions").append($item);
        }
    }
});

//Generates values for renderer
function createSymbol(colour) {
    return {
        type: "simple-fill",
        color: colour,
        outline: {
            width: 0.2,
            color: [0, 0, 0, 0.1]
        }
    };
}

var unique_values = []

for (var i = 0; i < 8; i++) {

    //Value is 1-8 scale
    //Symbol is the colour
    var cat = {
        value: i + 1,
        symbol: createSymbol(colours[i])
    }

    unique_values.push(cat);
}

//Establishes base renderer
var renderer = {
    type: "unique-value",
    valueExpression: 'return Number(Mid(Text($feature.oac), 0, 1));',
    uniqueValueInfos: unique_values
};

//Sets defaults 
var chart = null;
var current_constituency = 'Combined';

$.getJSON('https://ancient-dawn-46f2.jacobweinbren.workers.dev/', function(data) {

    esriConfig.apiKey = data['access_token'];

    //Loads in layers
    const buildings = new FeatureLayer({
        url: "https://services5.arcgis.com/N6Nhpnxaedla81he/arcgis/rest/services/MK_Buildings/FeatureServer/"
    });

    const data_map = new FeatureLayer({
        renderer: renderer,
        url: 'https://services5.arcgis.com/N6Nhpnxaedla81he/arcgis/rest/services/MK_Area_Classification/FeatureServer'
    });

    //Groups and overlaps layers
    const group = new GroupLayer({
        layers: [buildings, data_map],
    });
    data_map.blendMode = 'source-in';

    //Establishes view
    const map = new Map({
        basemap: 'arcgis-dark-gray',
        layers: [group]
    });

    var view = new MapView({
        map: map,
        zoom: 11,
        center: [-0.75, 52.04],
        container: 'map'
    });

    view.constraints.minZoom = 10;
    view.constraints.maxZoom = 18;

    //Show chart
    view.whenLayerView(data_map).then((layerView) => {
        generateRenderer(layerView);

        //Add dropdown
        view.ui.add('dropdown', 'top-right');
        $('#dropdown').show();

        //Add descriptions
        view.ui.add('descriptions', 'top-right');
        $('#descriptions').show();

        //Add chart
        view.ui.add("chart", "bottom-left");
        $('#chart').show();

        //Dropdown control
        $('#dropdown').on('calciteDropdownSelect', function() {
            current_constituency = $($('#dropdown').prop('selectedItems')[0]).attr('choice');
            generateRenderer(layerView);
        });
    });

    var where;

    function generateRenderer(layerView) {

        //Filters map layer
        if (current_constituency == "Combined") {
            where = "";
        } else {
            where = "new_con = '" + current_constituency + "' OR old_con = '" + current_constituency + "'";
        }

        layerView.filter = {
            where: where
        };

        var query = new Query();
        query.where = where;
        query.outFields = ['oac'];

        data_map.queryFeatures(query).then(function(results) {

            var features = results.features;

            //Resets to 0
            for (var i = 0; i < groups.length; i++) {
                groups[i].count = 0;
            }

            for (var i = 0; i < supergroups.length; i++) {
                supergroups[i].count = 0;
            }

            var temp_val;

            for (var i = 0; i < features.length; i++) {
                temp_val = features[i]['attributes']['oac'];

                for (var a = 0; a < supergroups.length; a++) {
                    if (supergroups[a].code == temp_val.charAt(0)) {
                        supergroups[a].count += 1
                    }
                }

                for (var a = 0; a < groups.length; a++) {
                    if (groups[a].code == temp_val.substring(0, 2)) {
                        groups[a].count += 1
                    }
                }
            }

            //Sets up chart
            var labels = [];
            var datasets = [{
                    backgroundColor: [],
                    data: []
                },
                {
                    backgroundColor: [],
                    data: []
                },
            ]

            //Gets counts
            var total_supergroups = 0;
            for (var i = 0; i < supergroups.length; i++) {
                total_supergroups += supergroups[i].count;
            }

            var total_groups = 0;
            for (var i = 0; i < groups.length; i++) {
                total_groups += groups[i].count;
            }

            var temp_item;
            var percentage;

            //Gets percentages
            for (var i = 0; i < supergroups.length; i++) {
                temp_item = supergroups[i];

                percentage = ((temp_item.count / total_supergroups) * 100).toFixed(2);
                supergroups[i].percentage = percentage;
                datasets[1].backgroundColor.push(temp_item.colour);
                datasets[1].data.push(percentage);
            }

            for (var i = 0; i < groups.length; i++) {
                temp_item = groups[i];

                percentage = ((temp_item.count / total_groups) * 100).toFixed(2);
                groups[i].percentage = percentage;
                datasets[0].backgroundColor.push(temp_item.colour);
                datasets[0].data.push(percentage);
            }

            const data = {
                labels: labels,
                datasets: datasets
            };

            //Chart render
            if (chart != null) {
                chart.data.datasets = datasets;
                chart.update();
            } else {
                chart = new Chart($('#chart'), {
                    type: 'pie',
                    data: data,
                    options: {
                        responsive: true,
                        plugins: {
                            title: {
                                display: true,
                                text: 'Area Classification Categories - ONS Supergroups'
                            },
                            legend: {
                                labels: {
                                    font: {
                                        family: 'Avenir Next'
                                    },
                                    generateLabels: function(chart) {

                                        var labelsOriginal = []

                                        for (i = 0; i < supergroups.length; i++) {
                                            var temp_item = supergroups[i];

                                            labelsOriginal.push({
                                                "text": temp_item.title,
                                                "fillStyle": temp_item.colour,
                                                "strokeStyle": "#fff",
                                                "lineWidth": 1,
                                                "hidden": false,
                                                "index": i,
                                                "datasetIndex": i
                                            })
                                        }

                                        return labelsOriginal;
                                    }
                                }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        const temp_dataset = context.datasetIndex;
                                        const temp_data = context.dataIndex;

                                        var a;
                                        var b;

                                        if (temp_dataset == 1) {
                                            a = supergroups[temp_data].title
                                            b = ': ' + Math.round(supergroups[temp_data].percentage) + '%';
                                        }

                                        if (temp_dataset == 0) {
                                            a = groups[temp_data].title;
                                            b = ': ' + Math.round(groups[temp_data].percentage) + '%';
                                        }

                                        return ' ' + a + b;
                                    }
                                }
                            }
                        }
                    },
                });
            }
        });
    }
});