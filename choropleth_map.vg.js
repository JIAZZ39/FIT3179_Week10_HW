{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Birth Rate by State in Malaysia (2021)",
  "width": "container",
  "height": 400,
  "projection": {"type": "mercator"},

  "layer": [
    
    {
      "data": {
        "url": "https://raw.githubusercontent.com/JIAZZ39/FIT3179_Week10_HW/main/try_ocean.json",
        "format": {"type": "topojson", "feature": "ne_10m_ocean"}
      },
      "mark": {"type": "geoshape", "fill": "#c9e6ef"}
    },


    {
      "data": {
        "url": "https://raw.githubusercontent.com/JIAZZ39/FIT3179_Week10_HW/main/try_graticules.json",
        "format": {"type": "topojson", "feature": "ne_10m_graticules_1"}
      },
      "mark": {"type": "geoshape", "fill": null, "stroke": "#dddddd"}
    },

    {
      "data": {
        "url": "https://raw.githubusercontent.com/JIAZZ39/FIT3179_Week10_HW/main/ne_10m_land.json",
        "format": {"type": "topojson", "feature": "ne_10m_land"}
      },
      "mark": {"type": "geoshape", "fill": "#f0f0f0", "stroke": "#b0b0b0"}
    },
    
    {
      "data": {
        "url": "https://raw.githubusercontent.com/JIAZZ39/FIT3179_Week10_HW/main/ne_10m_admin_1_msia_states.json",
        "format": {"type": "topojson", "feature": "ne_10m_admin_1_states_provinces"}
      },
      "transform": [
        {
          "lookup": "properties.name",
          "from": {
            "data": {
              "url": "https://raw.githubusercontent.com/JIAZZ39/FIT3179_Week10_HW/main/normalised_birth_population_by_state_msia.csv"
            },
           
            "key": "state", 
            "fields": ["Birth_Rate_per_1000", "birth raw", "population raw", "state"]
          }
        }
      ],
      "mark": {"type": "geoshape", "stroke": "white"},
      "encoding": {
        "color": {
          "field": "Birth_Rate_per_1000",
          "type": "quantitative",
          "scale": {
            "type": "threshold",
            "domain": [12, 15, 18],
            "range": ["#ffffd4", "#a1dab4", "#41b6c4", "#225ea8"]
          },
          "title": "Births per 1,000 People"
        },
        "tooltip": [
          {"field": "state", "type": "nominal", "title": "State"}, 
          {"field": "Birth_Rate_per_1000", "type": "quantitative", "title": "Birth Rate (per 1,000)", "format": ".2f"},
          {"field": "birth raw", "type": "quantitative", "title": "Total Births", "format": ","},
          {"field": "population raw", "type": "quantitative", "title": "Total Population", "format": ","}
        ]
      }
    }
  ]

}
