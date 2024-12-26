// routes/uiRoutes.js
const express = require("express");
const router = express.Router();

router.get("/homeui", (req, res) => {
  // const jsonResponse0 ={
  //   "type": "View",
  //   "props": {
  //     "style": {
  //       "flex": 1,
  //       "padding": 16,
  //       "backgroundColor": "#f5f5f5"
  //     }
  //   },
  //   "children": [
  //     {
  //       "type": "View",
  //       "props": {
  //         "style": {
  //           "marginBottom": 16,
  //           "alignItems": "center"
  //         }
  //       },
  //       "children": [
  //         {
  //           "type": "Text",
  //           "props": {
  //             "style": {
  //               "fontSize": 24,
  //               "fontWeight": "bold",
  //               "color": "#333",
  //               "marginBottom": 8
  //             }
  //           },
  //           "children": "Welcome to the Categories"
  //         },
  //         {
  //           "type": "Text",
  //           "props": {
  //             "style": {
  //               "fontSize": 16,
  //               "color": "#666"
  //             }
  //           },
  //           "children": "Explore a variety of options below"
  //         }
  //       ]
  //     },
  
  //   ]
  // }
  // const jsonResponse1 =    {
  //   "type": "View",
  //   "props": {
  //     "style": {
  //       "flexDirection": "row",
  //       "flexWrap": "wrap",
  //       "justifyContent": "space-between"
  //     }
  //   },
  //   "children": [
  //     {
  //       "type": "View",
  //       "props": {
  //         "style": {
  //           "width": "48%",
  //           "padding": 10,
  //           "marginBottom": 16,
  //           "backgroundColor": "#ffffff",
  //           "borderRadius": 8,
  //           "shadowColor": "#000",
  //           "shadowOffset": { "width": 0, "height": 2 },
  //           "shadowOpacity": 0.1,
  //           "shadowRadius": 4,
  //           "elevation": 2
  //         }
  //       },
  //       "children": [
  //         {
  //           "type": "Text",
  //           "props": {
  //             "style": {
  //               "fontSize": 16,
  //               "fontWeight": "bold",
  //               "marginBottom": 8,
  //               "color": "#333"
  //             }
  //           },
  //           "children": "Category 1"
  //         },
  //         {
  //           "type": "TouchableOpacity",
  //           "props": {
  //             "onPress": "handleExploreCategory1",
  //             "style": {
  //               "backgroundColor": "#007bff",
  //               "paddingVertical": 10,
  //               "borderRadius": 5,
  //               "alignItems": "center"
  //             }
  //           },
  //           "children": [
  //             {
  //               "type": "Text",
  //               "props": {
  //                 "style": {
  //                   "color": "#fff",
  //                   "fontSize": 16
  //                 }
  //               },
  //               "children": "Explore"
  //             }
  //           ]
  //         }
  //       ]
  //     },
  
  
  //   ]
  // }
  // const jsonResponse2 =        {
  //   "type": "View",
  //   "props": {
  //     "style": {
  //       "width": "48%",
  //       "padding": 10,
  //       "marginBottom": 16,
  //       "backgroundColor": "#ffffff",
  //       "borderRadius": 8,
  //       "shadowColor": "#000",
  //       "shadowOffset": { "width": 0, "height": 2 },
  //       "shadowOpacity": 0.1,
  //       "shadowRadius": 4,
  //       "elevation": 2
  //     }
  //   },
  //   "children": [
  //     {
  //       "type": "Text",
  //       "props": {
  //         "style": {
  //           "fontSize": 16,
  //           "fontWeight": "bold",
  //           "marginBottom": 8,
  //           "color": "#333",
  //           "textAlign": "center"
  //         }
  //       },
  //       "children": "Category 2"
  //     },
  //     {
  //       "type": "Image",
  //       "props": {
  //         "source": { "uri": "https://via.placeholder.com/100" },
  //         "style": {
  //           "width": "100%",
  //           "height": 100,
  //           "borderRadius": 8
  //         }
  //       }
  //     },
  //     {
  //       "type": "TouchableOpacity",
  //       "props": {
  //         "onPress": "handleExploreCategory2",
  //         "style": {
  //           "backgroundColor": "#007bff",
  //           "paddingVertical": 10,
  //           "borderRadius": 5,
  //           "alignItems": "center",
  //           "marginTop": 8
  //         }
  //       },
  //       "children": [
  //         {
  //           "type": "Text",
  //           "props": {
  //             "style": {
  //               "color": "#fff",
  //               "fontSize": 16
  //             }
  //           },
  //           "children": "Explore"
  //         }
  //       ]
  //     }
  //   ]
  // }
  // const jsonResponse3 =        {
  //   "type": "View",
  //   "props": {
  //     "style": {
  //       "width": "48%",
  //       "padding": 10,
  //       "marginBottom": 16,
  //       "backgroundColor": "#ffffff",
  //       "borderRadius": 8,
  //       "shadowColor": "#000",
  //       "shadowOffset": { "width": 0, "height": 2 },
  //       "shadowOpacity": 0.1,
  //       "shadowRadius": 4,
  //       "elevation": 2
  //     }
  //   },
  //   "children": [
  //     {
  //       "type": "Text",
  //       "props": {
  //         "style": {
  //           "fontSize": 16,
  //           "fontWeight": "bold",
  //           "marginBottom": 8,
  //           "color": "#333"
  //         }
  //       },
  //       "children": "Category 3"
  //     },
  //     {
  //       "type": "Image",
  //       "props": {
  //         "source": { "uri": "https://via.placeholder.com/100" },
  //         "style": {
  //           "width": "100%",
  //           "height": 100,
  //           "borderRadius": 8
  //         }
  //       }
  //     },
  //     {
  //       "type": "TouchableOpacity",
  //       "props": {
  //         "onPress": "handleExploreCategory3",
  //         "style": {
  //           "backgroundColor": "#007bff",
  //           "paddingVertical": 10,
  //           "borderRadius": 5,
  //           "alignItems": "center",
  //           "marginTop": 8
  //         }
  //       },
  //       "children": [
  //         {
  //           "type": "Text",
  //           "props": {
  //             "style": {
  //               "color": "#fff",
  //               "fontSize": 16
  //             }
  //           },
  //           "children": "Explore"
  //         }
  //       ]
  //     }
  //   ]
  // }
  const jsonResponse =        {
    "type": "View",
    "props": {
      "style": {
        "width": "48%",
        "padding": 10,
        "marginBottom": 16,
        "backgroundColor": "#ffffff",
        "borderRadius": 8,
        "shadowColor": "#000",
        "shadowOffset": { "width": 0, "height": 2 },
        "shadowOpacity": 0.1,
        "shadowRadius": 4,
        "elevation": 2
      }
    },
    "children": [
      {
        "type": "Text",
        "props": {
          "style": {
            "fontSize": 16,
            "fontWeight": "bold",
            "marginBottom": 8,
            "color": "#333"
          }
        },
        "children": "Category 4"
      },
      {
        "type": "Image",
        "props": {
          "source": { "uri": "https://via.placeholder.com/100" },
          "style": {
            "width": "100%",
            "height": 100,
            "borderRadius": 8
          }
        }
      },
      {
        "type": "TouchableOpacity",
        "props": {
          "onPress": "handleExploreCategory4",
          "style": {
            "backgroundColor": "#007bff",
            "paddingVertical": 10,
            "borderRadius": 5,
            "alignItems": "center",
            "marginTop": 8
          }
        },
        "children": [
          {
            "type": "Text",
            "props": {
              "style": {
                "color": "#fff",
                "fontSize": 16
              }
            },
            "children": "Explore"
          }
        ]
      }
    ]
  }
  
  
  

  res.json(jsonResponse);
});

module.exports = router;
