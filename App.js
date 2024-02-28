import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = () => {
    return(
    <div className='Header'>
      <div className='Logo-container'>
            <img src='https://i.pinimg.com/originals/34/0c/6a/340c6add7519212185a08d4205eb1965.png' className='logo'/>
      </div>
      <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    )
}

// const Stylecard = {
//     backgroundColor:"orange"
// }



const RestList = [
    {
      "info": {
        "id": "69570",
        "name": "KFC",
        "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
        "locality": "Mg Road",
        "areaName": "Labbipet",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "avgRating": 4.2,
        "parentId": "547",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 1.7,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "1.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-27 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
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
        "link": "https://www.swiggy.com/restaurants/kfc-mg-road-labbipet-vijayawada-69570",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "79547",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "092e58460657922e098a8afd5db838fe",
        "locality": "Mg Road",
        "areaName": "Acharya Ranga Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "2456",
        "avgRatingString": "4.2",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 30,
          "serviceability": "SERVICEABLE",
          "slaString": "30 mins",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-27 23:59:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "Ratnesh_Badges/free%20del%20icon.png",
              "shortDescription": "Free Delivery",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "Ratnesh_Badges/free%20del%20icon.png",
                    "shortDescription": "Free Delivery"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
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
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-mg-road-acharya-ranga-nagar-vijayawada-79547",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "76736",
        "name": "Subway",
        "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
        "locality": "SURYA SATYA APARTMENTS",
        "areaName": "FORTUNE MURALI PARK ROAD",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Healthy Food",
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4,
        "parentId": "2",
        "avgRatingString": "4.0",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 0.2,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "0.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-27 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
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
        "link": "https://www.swiggy.com/restaurants/subway-surya-satya-apartments-fortune-murali-park-road-vijayawada-76736",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "68611",
        "name": "RR Durbar",
        "cloudinaryImageId": "ef2cb7ec71357f8609203236620b007d",
        "locality": "Siddhartha Nagar\n",
        "areaName": "Labbipet",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Andhra",
          "Chinese",
          "Biryani",
          "Tandoor"
        ],
        "avgRating": 4.1,
        "parentId": "5268",
        "avgRatingString": "4.1",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 15,
          "lastMileTravel": 0.4,
          "serviceability": "SERVICEABLE",
          "slaString": "15 mins",
          "lastMileTravelString": "0.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-27 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
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
        "link": "https://www.swiggy.com/restaurants/rr-durbar-siddhartha-nagar-labbipet-vijayawada-68611",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "71320",
        "name": "McDonald's",
        "cloudinaryImageId": "f62564e14944753903849c4ef673af4d",
        "locality": "P & T Colony",
        "areaName": "Auto Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "630",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-27 23:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
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
        "link": "https://www.swiggy.com/restaurants/mcdonalds-p-and-t-colony-auto-nagar-vijayawada-71320",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "68615",
        "name": "Silver Dum Biryani - Original",
        "cloudinaryImageId": "rlyepihgnuxcs74qjitv",
        "locality": "Panta Kaluva Road",
        "areaName": "Gurunanak Colony",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Biryani",
          "Chinese",
          "Seafood"
        ],
        "avgRating": 4.4,
        "parentId": "471039",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 16,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "16 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-27 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
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
        "link": "https://www.swiggy.com/restaurants/silver-dum-biryani-original-panta-kaluva-road-gurunanak-colony-vijayawada-68615",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "215510",
        "name": "Country Made Grills 'N' Fries",
        "cloudinaryImageId": "6c3338149bc350b802470db3e45bc166",
        "locality": "BRTS Road",
        "areaName": "Machavaram",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "American"
        ],
        "avgRating": 4.4,
        "parentId": "13462",
        "avgRatingString": "4.4",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 4.1,
          "serviceability": "SERVICEABLE",
          "slaString": "30 mins",
          "lastMileTravelString": "4.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-27 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
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
        "link": "https://www.swiggy.com/restaurants/country-made-grills-n-fries-brts-road-machavaram-vijayawada-215510",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "77506",
        "name": "Geethakrishna Family Restaurant",
        "cloudinaryImageId": "jdoei89srlai2q9w3kiu",
        "locality": "Congress office Road",
        "areaName": "Governorpet",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Biryani",
          "Chinese",
          "Tandoor",
          "South Indian",
          "Andhra",
          "Seafood",
          "North Indian"
        ],
        "avgRating": 3.9,
        "parentId": "445873",
        "avgRatingString": "3.9",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "17 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-27 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
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
        "link": "https://www.swiggy.com/restaurants/geethakrishna-family-restaurant-congress-office-road-governorpet-vijayawada-77506",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "377665",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "cloudinaryImageId": "cortbv7lpdyr34o0qp7l",
        "locality": "Srinivasa Nagar Bank Colony",
        "areaName": "Gurunanak Colony",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream",
          "Ice Cream Cakes"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "582",
        "avgRatingString": "4.5",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 3.6,
          "serviceability": "SERVICEABLE",
          "slaString": "19 mins",
          "lastMileTravelString": "3.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-27 23:59:00",
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
          "header": "50% OFF",
          "subHeader": "UPTO ₹90"
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
        "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-srinivasa-nagar-bank-colony-gurunanak-colony-vijayawada-377665",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "68796",
        "name": "Anjaneya Family Restaurants Veg & Non veg",
        "cloudinaryImageId": "gtpu3p8bpijkp2agnrxh",
        "locality": "Besent Road\n",
        "areaName": "Governorpet",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Biryani",
          "Tandoor",
          "Chinese",
          "North Indian",
          "Andhra"
        ],
        "avgRating": 4.1,
        "parentId": "422295",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 2.8,
          "serviceability": "SERVICEABLE",
          "slaString": "18 mins",
          "lastMileTravelString": "2.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-27 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
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
        "link": "https://www.swiggy.com/restaurants/anjaneya-family-restaurants-veg-and-non-veg-besent-road-governorpet-vijayawada-68796",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "203788",
        "name": "RR's Joints",
        "cloudinaryImageId": "859287be66c3207d0a23758b415ccb71",
        "locality": "Devi Nagar",
        "areaName": "Rama Krishna Puram",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Biryani",
          "Chinese",
          "North Indian",
          "Seafood",
          "Tandoor",
          "South Indian"
        ],
        "avgRating": 4.2,
        "parentId": "172766",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 3.7,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "3.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-27 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
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
        "link": "https://www.swiggy.com/restaurants/rrs-joints-devi-nagar-rama-krishna-puram-vijayawada-203788",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "218610",
        "name": "The Good Bowl",
        "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
        "locality": "Ramachandra Rao Raod",
        "areaName": "Suryarao Pet",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Pastas",
          "Punjabi",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4,
        "parentId": "7918",
        "avgRatingString": "4.0",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-27 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹110"
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
        "link": "https://www.swiggy.com/restaurants/the-good-bowl-ramachandra-rao-raod-suryarao-pet-vijayawada-218610",
        "type": "WEBLINK"
      }
    }
];
const Restaurantcard= (props) => {
    const {RestData} = props
   return(
     <div className='res-card' style={{
        backgroundColor:"orange"
     }}>
        <img alt='Barbeque Nation' className='res-logo' src={'https://media-assets.swiggy.com/swiggy/image/upload/'+ RestData.info.cloudinaryImageId}></img>
        <h4>{RestData.info.id}</h4>
        <h4>{RestData.info.name}</h4>
        <h4>Cost ForTwo{RestData.info.costForTwo/100}</h4>
        <h4>{RestData.info.cuisines.join(', ')}</h4>
     </div>
   )
}



const Body = () => {
 return(
    <div className='body'>
        <div className='search'>
          search
        </div>
        <div className='res-container'>
            <Restaurantcard RestData={RestList[0]}/>
            <Restaurantcard RestData={RestList[1]}/>
            <Restaurantcard RestData={RestList[2]}/>
            <Restaurantcard RestData={RestList[3]}/>
            <Restaurantcard RestData={RestList[4]}/>
            <Restaurantcard RestData={RestList[5]}/>
            <Restaurantcard RestData={RestList[6]}/>
            <Restaurantcard RestData={RestList[7]}/>
            <Restaurantcard RestData={RestList[8]}/>
            <Restaurantcard RestData={RestList[9]}/>
        {/* // {RestList.map((restaurant) => ( */}
        {/* //  <Restaurantcard key={restaurant.info.id} RestData={restaurant.info} />
        // ))} */}
        </div>
    </div>
 )
}
const AppLayout = () => {
    return(
        <div className=''>
            <Header/>
            <Body />
        </div>
    )
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);