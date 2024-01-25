import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div id="header">
      <div className="logo-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdcKbvrXxxU9NKCu-q5oy3aTNZ1pLVr1kzpg&usqp=CAU" id="logo"/>
      </div>
      <nav className="nav-container">
        <ul>
          <li>Offers</li> 
          <li>Sign in</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  )
}

// inline css declaration object 
const restocardstyle = {
  backgroundColor: "green",
  border: "1px dashed black"
}

const Restocard = (props) =>{

  const {name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla : {deliveryTime}} = props?.data?.info;
  
  return (
    <div className="restocard" style={restocardstyle}>
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +  cloudinaryImageId} className="cardimage"/>
      <h3 className="hotelname">{name}</h3>
      <span className="rating">{avgRating}</span>
      <span className="time">{deliveryTime} minutes</span>
      <p className="cuisine">{cuisines.join(",")}</p>
      <p className="costfortwo">{costForTwo}</p>
    </div>
  )
}

const Body = () =>{
  return (
    <div className="body">
      <div className="search-container">
        <input type="text"/>
      </div>
      <div className="restocards-container">
        {restaurants.map((restaurant) => {
          return <Restocard key={restaurant.info.id} data = {restaurant}/>
        })}
        {/* <Restocard data = {restaurants[0]}/>
        <Restocard data = {restaurants[1]}/>
        <Restocard data = {restaurants[2]}/> */}
      </div>
    </div>
  )
}



const AppLayout = () =>{
  return (
    <div id="app">
      <Header/>
      <Body/>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<AppLayout/>);

const restaurants = [
  {
    "info": {
      "id": "14096",
      "name": "Sangeetha Veg Restaurant",
      "cloudinaryImageId": "oodghmivnc6bxnbrvzzw",
      "locality": "Gandhi Irwin Rd",
      "areaName": "Egmore",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "South Indian"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "1260",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-25 22:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/sangeetha-veg-restaurant-gandhi-irwin-rd-egmore-chennai-14096",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "262948",
      "name": "Perambur Sri Srinivasa (Bhavan)",
      "cloudinaryImageId": "bogj3f009rjyo7b5omgx",
      "locality": "Sembium",
      "areaName": "Chennai",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "5939",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 5.7,
        "serviceability": "SERVICEABLE",
        "slaString": "33 mins",
        "lastMileTravelString": "5.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-25 22:15:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/perambur-sri-srinivasa-bhavan-sembium-chennai-chennai-262948",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "14044",
      "name": "Fruit Shop on Greams Road",
      "cloudinaryImageId": "ufryw0c5fuxraq1zx1pq",
      "locality": "Opposite Commissioner Office",
      "areaName": "Egmore",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Juices",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "401",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 1.8,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "1.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-25 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/fruit-shop-on-greams-road-opposite-commissioner-office-egmore-chennai-14044",
      "type": "WEBLINK"
    }
  }
]



