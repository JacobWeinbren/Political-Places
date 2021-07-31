//Loads in Calcite, JQuery, common styles
import '../common.js'

//Loads in styles
import './style.css';

import { listBullet16 } from "../assets/calcite-icon/listBullet16.json";
import { chevronDown16 } from "../assets/calcite-icon/chevronDown16.json";
import { squareArea16 } from "../assets/calcite-icon/squareArea16.json";

//Loads in Esri
import esriConfig from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import Query from "@arcgis/core/rest/support/Query";

//Loads in extra components
import { CalciteBlock, CalciteBlockSection, CalciteAccordion, CalciteAccordionItem, CalciteIcon } from '@esri/calcite-components/dist/custom-elements';

customElements.define('calcite-block', CalciteBlock);
customElements.define('calcite-block-section', CalciteBlockSection);
customElements.define('calcite-accordion', CalciteAccordion);
customElements.define('calcite-accordion-item', CalciteAccordionItem);
customElements.define('calcite-icon', CalciteIcon);

//Supergroups title
function superText(elem) {
    var colour = elem.getAttribute('colour');
    var title = elem.getAttribute('title');

    if (elem.hasAttribute('percentage')) {
        var percent = elem.getAttribute('percentage');
        title += ' - ' + percent + '%';
    }

    var $temp_title = $('<b/>')
        .text(title)
        .css('display', 'flex')
        .css('align-items', 'center')

    var $temp_square = $('<calcite-icon icon="squareArea" scale="m"></calcite-icon>')
        .css('color', colour)
        .css('margin-right', '5px');

    $($temp_title).prepend($temp_square);
    $(elem.shadowRoot).find('.section-header__text').html($temp_title);
}

function lowerText(elem) {
    var title = elem.getAttribute('item-title');

    if (elem.hasAttribute('percentage')) {
        var percent = elem.getAttribute('percentage');
        title += ' - ' + percent + '%';
        $(elem.shadowRoot).find('.accordion-item-title').text(title);
    }
}

//Defines custom elements to modify shadow DOM attrs
class NewCalciteBlockSection extends CalciteBlockSection {
    static get observedAttributes() {
        return ['percentage'];
    }
    constructor() {
        super();
    }
    attributeChangedCallback(name, oldValue, newValue) {
        superText(this);
    }
    connectedCallback() {
        super.connectedCallback();
        superText(this);
    }
}

customElements.define('new-calcite-block-section', NewCalciteBlockSection);

class NewCalciteAccordionItem extends CalciteAccordionItem {
    static get observedAttributes() {
        return ['percentage'];
    }
    constructor() {
        super();
    }
    attributeChangedCallback(name, oldValue, newValue) {
        lowerText(this);
    }
    connectedCallback() {
        super.connectedCallback();
    }
}

customElements.define('new-calcite-accordion-item', NewCalciteAccordionItem);

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
var cats = [];

//Iterate all the classes to add metadata
for (var i = 0; i < class_data.length; i++) {
    var temp_class = class_data[i]
    var title = temp_class.title;
    var code = temp_class.code;

    //Add group type
    if (temp_class.supergroup != "" && temp_class.group == "") {
        var type = 'supergroup';
    } else if (temp_class.supergroup != "" && temp_class.group != "" && temp_class.subgroup == "") {
        var type = 'group';
    } else if (temp_class.supergroup != "" && temp_class.group != "" && temp_class.subgroup != "") {
        var type = 'subgroup';
    }

    var temp_obj = {
        title: title,
        code: code,
        type: type,
        count: 0,
        colour: colours[temp_class.supergroup - 1],
    }

    cats.push(temp_obj);
}

//Adds descriptions
$(document).ready(function() {
    for (var i = 0; i < class_data.length; i++) {
        temp_class = class_data[i];

        if (temp_class.supergroup != "" && temp_class.group == "") {
            //Supergroups
            var current_col = colours[temp_class.supergroup - 1];

            var $groups = $('<div>')
                .addClass('desc-item')
                .addClass(temp_class.code)
                .append(
                    $('<p/>')
                    .text(temp_class.desc)

                )
                .append('<br>')
                .append(
                    $('<b/>')
                    .text('Groups')
                )
                .append('<br>')
                .append(
                    $('<calcite-accordion/>')
                    .addClass('groups')
                )
                .append('<br>')
                .append(
                    $('<b/>')
                    .text('Subgroups')
                )
                .append(
                    $('<calcite-accordion/>')
                    .addClass('subgroups')
                );

            var $item = $('<new-calcite-block-section/>')
                .attr('id', temp_class.code)
                .attr('colour', current_col)
                .attr('title', temp_class.title)
                .html($groups);

            $("#descriptions").append($item);

        } else if (temp_class.group != "" || temp_class.subgroup != "") {
            //Groups and subgroups
            if (temp_class.subgroup == "") {
                var selector = '.' + temp_class.supergroup + ' .groups';
            } else {
                var selector = '.' + temp_class.supergroup + ' .subgroups';
            }

            $(selector).append(
                $('<new-calcite-accordion-item/>')
                .attr('item-title', temp_class.title)
                .attr('id', temp_class.code)
                .html(
                    $('<p/>')
                    .text(temp_class.desc)
                )
            )
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
        copyright: "Ordnance Survey",
        url: "https://services5.arcgis.com/N6Nhpnxaedla81he/arcgis/rest/services/MK_Buildings/FeatureServer",
    });

    const data_map = new FeatureLayer({
        renderer: renderer,
        maxScale: 0,
        url: 'https://services5.arcgis.com/N6Nhpnxaedla81he/arcgis/rest/services/MK_Classification/FeatureServer',
        copyright: "ONS",
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
        container: 'map',
        constraints: {
            minZoom: 10,
        },
    });

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
        var props;
        $('#dropdown').on('calciteDropdownSelect', function() {
            if (props != $('#dropdown').prop('selectedItems')) {
                props = $('#dropdown').prop('selectedItems');
                current_constituency = $(props[0]).attr('choice');
                generateRenderer(layerView);
            }
        });
    });

    function generateRenderer(layerView) {

        //Filters map layer
        if (current_constituency == "Combined") {
            var where = "";
        } else {
            var where = "new_con = '" + current_constituency + "' OR old_con = '" + current_constituency + "'";
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
            for (var i = 0; i < cats.length; i++) {
                cats[i].count = 0;
            }

            for (var i = 0; i < features.length; i++) {
                var temp_val = features[i]['attributes']['oac'];

                for (var a = 0; a < cats.length; a++) {

                    var temp_item = cats[a];

                    switch (temp_item.type) {
                        case 'supergroup':
                            if (temp_item.code == temp_val.substring(0, 1)) {
                                cats[a].count += 1
                            }
                            break;

                        case 'group':
                            if (temp_item.code == temp_val.substring(0, 2)) {
                                cats[a].count += 1
                            }
                            break;

                        case 'subgroup':
                            if (temp_item.code == temp_val.substring(0, 3)) {
                                cats[a].count += 1
                            }
                            break;
                    }
                }
            }

            //Sets up chart
            var labels = [];
            var datasets = [{
                    backgroundColor: [],
                    data: [],
                    titles: []
                },
                {
                    backgroundColor: [],
                    data: [],
                    titles: []
                },
            ]

            //Gets counts
            var total_supergroups = 0;
            var total_groups = 0;
            var total_subgroups = 0;

            for (var i = 0; i < cats.length; i++) {
                switch (cats[i].type) {
                    case 'supergroup':
                        total_supergroups += cats[i].count;
                        break;
                    case 'group':
                        total_groups += cats[i].count
                        break;
                    case 'subgroup':
                        total_subgroups += cats[i].count
                        break;
                }
            }

            //Gets percentages
            for (var i = 0; i < cats.length; i++) {
                var temp_item = cats[i];
                var percentage;

                switch (temp_item.type) {
                    case 'supergroup':
                        percentage = ((temp_item.count / total_supergroups) * 100).toFixed(2);
                        datasets[1].backgroundColor.push(temp_item.colour);
                        datasets[1].data.push(percentage);
                        datasets[1].titles.push(temp_item.title + ': ' + Math.round(percentage) + '%');
                        $('#' + temp_item.code).attr('percentage', Math.round(percentage));
                        break;

                    case 'group':
                        percentage = ((temp_item.count / total_groups) * 100).toFixed(2);
                        datasets[0].backgroundColor.push(temp_item.colour);
                        datasets[0].data.push(percentage);
                        datasets[0].titles.push(temp_item.title + ': ' + Math.round(percentage) + '%');
                        $('#' + temp_item.code).attr('percentage', Math.round(percentage));
                        break;

                    case 'subgroup':
                        percentage = ((temp_item.count / total_subgroups) * 100).toFixed(2);
                        $('#' + temp_item.code).attr('percentage', Math.round(percentage));
                        break;
                }
            }

            const data = {
                labels: labels,
                datasets: datasets
            };

            var text = ['Area Classification Categories - ONS Supergroups', 'Line Chart', '', $($('#dropdown').prop('selectedItems')[0]).text()]

            //Chart render
            if (chart != null) {
                chart.data.datasets = datasets;
                chart.options.plugins.title.text = text;
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
                                text: text,
                                font: {
                                    family: 'Avenir Next'
                                },
                            },
                            tooltip: {
                                bodyFont: {
                                    family: 'Avenir Next'
                                }
                            },
                            legend: {
                                labels: {
                                    font: {
                                        family: 'Avenir Next'
                                    },
                                    generateLabels: function(chart) {

                                        var labelsOriginal = []

                                        for (i = 0; i < cats.length; i++) {
                                            var temp_item = cats[i];

                                            if (temp_item.type == 'supergroup') {
                                                labelsOriginal.push({
                                                    "text": temp_item.title,
                                                    "fillStyle": temp_item.colour,
                                                    "strokeStyle": "#fff",
                                                    "lineWidth": 1,
                                                    "hidden": false,
                                                    "index": i,
                                                    "datasetIndex": i
                                                });
                                            }
                                        }
                                        return labelsOriginal;
                                    }
                                }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        return ' ' + context.dataset.titles[context.dataIndex];
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