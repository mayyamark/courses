// STEP 1 - Include Dependencies

// Include react
import React from 'react';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
import Column2D from 'fusioncharts/fusioncharts.charts';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2- Define the categories representing the labels on the X-axis
const categories =  [
    {
      "category": [
        { "label": "Q1" },
        { "label": "Q2" },
        { "label": "Q3" },
        { "label": "Q4" }
      ]
    }
  ]
  // STEP 3- Construct the dataset comprising multiple series
  const dataset = [
    {
      "seriesname": "Previous Year",
      "data": [
        { "value": "12000" },
        { "value": "10500" },
        { "value": "23500" },
        { "value": "16000" }
      ]
    },
    {
      "seriesname": "Current Year",
      "data": [
        { "value": "24400" },
        { "value": "29800" },
        { "value": "20800" },
        { "value": "26800" }
      ]
    }
  ]

// STEP 4 - Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: 'mscolumn2d',// The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
     dataSource: {
    //Chart Configurations
      "chart": {
        "theme": "fusion",
        "caption": "Comparison of Quarterly Revenue",
        "xAxisname": "Quarter",
        "yAxisName": "Revenues (In USD)",
        "numberPrefix": "$",
        "plotFillAlpha": "80",
        "divLineIsDashed": "1",
        "divLineDashLen": "1",
        "divLineGapLen": "1"
      },
      "categories": categories,
      "dataset": dataset,
    }
  }
// STEP 5 - Creating the DOM element to pass the react-fusioncharts component
const Chart2 = () => {
    return <ReactFC {...chartConfigs}/>;
}

export default Chart2;