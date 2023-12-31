import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    shopNames: [
      {
        "store_name": "GAZON",
        "city": "ROGOD2",
        "division": "tuy5r",
        "type_format": 1,
        "loc": 3,
        "size":19,
        "is_active": true
      },
      {
        "store_name": "MAGAZ1",
        "city": "GOROD1",
        "division": "tsdfr",
        "type_format": 3,
        "loc": 5,
        "size":31,
        "is_active": true
      },
      {
        "store_name": "MAGAZ2",
        "city": "GOROD1",
        "division": "tsdfr",
        "type_format": 3,
        "loc": 5,
        "size":31,
        "is_active": true
      },
      {
        "store_name": "MAGAZ3",
        "city": "GOROD1",
        "division": "tsdfr",
        "type_format": 3,
        "loc": 5,
        "size":31,
        "is_active": true
      },
      {
        "store_name": "MAGAZ4",
        "city": "GOROD1",
        "division": "tsdfr",
        "type_format": 3,
        "loc": 5,
        "size":31,
        "is_active": true
      },
      {
        "store_name": "MAGAZ5",
        "city": "GOROD1",
        "division": "tsdfr",
        "type_format": 3,
        "loc": 5,
        "size":31,
        "is_active": true
      },
      {
        "store_name": "MAGAZ6",
        "city": "GOROD1",
        "division": "tsdfr",
        "type_format": 3,
        "loc": 5,
        "size":31,
        "is_active": true
      },
      {
        "store_name": "MAGAZ7",
        "city": "GOROD1",
        "division": "tsdfr",
        "type_format": 3,
        "loc": 5,
        "size":31,
        "is_active": true
      },
      {
        "store_name": "MAGAZ8",
        "city": "GOROD1",
        "division": "tsdfr",
        "type_format": 3,
        "loc": 5,
        "size":31,
        "is_active": true
      },
      {
        "store_name": "MAGAZ9",
        "city": "GOROD1",
        "division": "tsdfr",
        "type_format": 3,
        "loc": 5,
        "size":31,
        "is_active": true
      },
      {
        "store_name": "MAGAZ10",
        "city": "GOROD1",
        "division": "tsdfr",
        "type_format": 3,
        "loc": 5,
        "size":31,
        "is_active": true
      },
      {
        "store_name": "MAGAZ11",
        "city": "GOROD1",
        "division": "tsdfr",
        "type_format": 3,
        "loc": 5,
        "size":31,
        "is_active": true
      },
      {
        "store_name": "MAGAZ12",
        "city": "GOROD1",
        "division": "tsdfr",
        "type_format": 3,
        "loc": 5,
        "size":31,
        "is_active": true
      },
      {
        "store_name": "MAGAZ13",
        "city": "GOROD1",
        "division": "tsdfr",
        "type_format": 3,
        "loc": 5,
        "size":31,
        "is_active": true
      }
    ],
    categories:[
      {
          "store": "MAGAZ1",
          "product": "Pivo IPA",
          "group": "Alkogol",
          "category": "Pivo",
          "subcategory": "Ale",
          "amount": 444
      },
      {
          "store": "MAGAZ1",
          "product": "Pivo APA",
          "group": "Alkogol",
          "category": "Pivo",
          "subcategory": "Ale",
          "amount": 555
      },
      {
          "store": "MAGAZ1",
          "product": "Pivo Stout",
          "group": "Alkogol",
          "category": "Pivo",
          "subcategory": "Dark",
          "amount": 444
      },
      {
          "store": "MAGAZ1",
          "product": "Pivo Porter",
          "group": "Alkogol",
          "category": "Pivo",
          "subcategory": "Dark",
          "amount": 444
      },
      {
          "store": "MAGAZ1",
          "product": "Hendricks",
          "group": "Alkogol",
          "category": "Gin",
          "subcategory": "London Dry",
          "amount": 444
      },
      {
          "store": "MAGAZ1",
          "product": "Beefeater",
          "group": "Alkogol",
          "category": "Gin",
          "subcategory": "London Dry",
          "amount": 444
      },
      {
          "store": "MAGAZ1",
          "product": "Makers Mark",
          "group": "Alkogol",
          "category": "Whiskey",
          "subcategory": "Bourbon",
          "amount": 444
      },
      {
          "store": "MAGAZ1",
          "product": "Smirnoff",
          "group": "Alkogol",
          "category": "Vodka",
          "subcategory": "Vodka",
          "amount": 444
      },
      {
          "store": "MAGAZ1",
          "product": "Lays Salt",
          "group": "Snacks",
          "category": "Chips",
          "subcategory": "Potato",
          "amount": 444
      },
      {
          "store": "MAGAZ1",
          "product": "Doritos Hot",
          "group": "Snacks",
          "category": "Chips",
          "subcategory": "Nachos",
          "amount": 444
      },
      {
          "store": "MAGAZ1",
          "product": "Milk 3% fat",
          "group": "Milk",
          "category": "Milk",
          "subcategory": "Milk",
          "amount": 444
      },
      {
          "store": "MAGAZ1",
          "product": "Strawberry Yougurt",
          "group": "Milk",
          "category": "Yogurt",
          "subcategory": "Drinkable Yogurt",
          "amount": 444
      },
      {
          "store": "MAGAZ1",
          "product": "Tvorog Lenta 0% fat",
          "group": "Milk",
          "category": "Tvorog",
          "subcategory": "Lenta Brand",
          "amount": 444
      },
      {
          "store": "MAGAZ1",
          "product": "Water Melon",
          "group": "Fruits",
          "category": "Season Fruits",
          "subcategory": "Bacheviye",
          "amount": 444
      },
      {
          "store": "MAGAZ1",
          "product": "Melon",
          "group": "Fruits",
          "category": "Season Fruits",
          "subcategory": "Bacheviye",
          "amount": 444
      },
    ],
    forecast: [
      {
        "store": "MAGAZ",
        "product": "PRODUCTIK1",
        "forecast_date": "2023-09-30",
        "forecast": {
            "2023-10-01": 12,
            "2023-10-02": 9,
            "2023-10-03": 5,
            "2023-10-04": 11,
            "2023-10-05": 2,
            "2023-10-06": 3,
            "2023-10-07": 1,
            "2023-10-08": 4,
            "2023-10-09": 1,
            "2023-10-10": 5,
            "2023-10-11": 9,
            "2023-10-12": 6,
            "2023-10-13": 7,
            "2023-10-14": 2,
        }
      },
      {
        "store": "MAGAZ",
        "product": "PRODUKTIK2",
        "forecast_date": "2023-09-30",
        "forecast": {
          "2023-10-01": 2,
          "2023-10-02": 5,
          "2023-10-03": 1,
          "2023-10-04": 6,
          "2023-10-05": 3,
          "2023-10-06": 9,
          "2023-10-07": 2,
          "2023-10-08": 8,
          "2023-10-09": 10,
          "2023-10-10": 13,
          "2023-10-11": 3,
          "2023-10-12": 7,
          "2023-10-13": 5,
          "2023-10-14": 1,
        }
      },
      {
        "store": "MAGAZ",
        "product": "PRODUKTIK3",
        "forecast_date": "2023-09-30",
        "forecast": {
          "2023-10-01": 3,
          "2023-10-02": 8,
          "2023-10-03": 2,
          "2023-10-04": 6,
          "2023-10-05": 9,
          "2023-10-06": 17,
          "2023-10-07": 15,
          "2023-10-08": 4,
          "2023-10-09": 11,
          "2023-10-10": 12,
          "2023-10-11": 5,
          "2023-10-12": 8,
          "2023-10-13": 2,
          "2023-10-14": 0,
        }
      },
      {
        "store": "MAGAZ",
        "product": "PRODUKTIK4",
        "forecast_date": "2023-09-30",
        "forecast": {
          "2023-10-01": 1,
          "2023-10-02": 4,
          "2023-10-03": 2,
          "2023-10-04": 3,
          "2023-10-05": 1,
          "2023-10-06": 3,
          "2023-10-07": 7,
          "2023-10-08": 3,
          "2023-10-09": 1,
          "2023-10-10": 3,
          "2023-10-11": 9,
          "2023-10-12": 3,
          "2023-10-13": 3,
          "2023-10-14": 5,
        }
      },
      {
        "store": "MAGAZ",
        "product": "PRODUKTIK5",
        "forecast_date": "2023-09-30",
        "forecast": {
          "2023-10-01": 3,
          "2023-10-02": 8,
          "2023-10-03": 2,
          "2023-10-04": 6,
          "2023-10-05": 9,
          "2023-10-06": 17,
          "2023-10-07": 15,
          "2023-10-08": 4,
          "2023-10-09": 11,
          "2023-10-10": 12,
          "2023-10-11": 5,
          "2023-10-12": 8,
          "2023-10-13": 2,
          "2023-10-14": 0,
        }
      },
      {
        "store": "MAGAZ",
        "product": "PRODUKTIK6",
        "forecast_date": "2023-09-30",
        "forecast": {
          "2023-10-01": 5,
          "2023-10-02": 9,
          "2023-10-03": 3,
          "2023-10-04": 2,
          "2023-10-05": 7,
          "2023-10-06": 16,
          "2023-10-07": 18,
          "2023-10-08": 2,
          "2023-10-09": 15,
          "2023-10-10": 14,
          "2023-10-11": 9,
          "2023-10-12": 10,
          "2023-10-13": 16,
          "2023-10-14": 7,
        }
      },
      {
        "store": "MAGAZ",
        "product": "PRODUKTIK7",
        "forecast_date": "2023-09-30",
        "forecast": {
          "2023-10-01": 6,
          "2023-10-02": 6,
          "2023-10-03": 5,
          "2023-10-04": 6,
          "2023-10-05": 6,
          "2023-10-06": 9,
          "2023-10-07": 6,
          "2023-10-08": 6,
          "2023-10-09": 8,
          "2023-10-10": 3,
          "2023-10-11": 6,
          "2023-10-12": 6,
          "2023-10-13": 2,
          "2023-10-14": 6,
        }
      },
      {
        "store": "MAGAZ",
        "product": "PRODUKTIK8",
        "forecast_date": "2023-09-30",
        "forecast": {
          "2023-10-01": 7,
          "2023-10-02": 4,
          "2023-10-03": 3,
          "2023-10-04": 2,
          "2023-10-05": 1,
          "2023-10-06": 0,
          "2023-10-07": 0,
          "2023-10-08": 0,
          "2023-10-09": 2,
          "2023-10-10": 5,
          "2023-10-11": 9,
          "2023-10-12": 11,
          "2023-10-13": 16,
          "2023-10-14": 19,
        }
      },
      {
        "store": "MAGAZ",
        "product": "PRODUKTIK9",
        "forecast_date": "2023-09-30",
        "forecast": {
          "2023-10-01": 8,
          "2023-10-02": 8,
          "2023-10-03": 8,
          "2023-10-04": 6,
          "2023-10-05": 8,
          "2023-10-06": 8,
          "2023-10-07": 14,
          "2023-10-08": 17,
          "2023-10-09": 12,
          "2023-10-10": 12,
          "2023-10-11": 8,
          "2023-10-12": 8,
          "2023-10-13": 9,
          "2023-10-14": 17,
        }
      },
      {
        "store": "MAGAZ",
        "product": "PRODUKTIK10",
        "forecast_date": "2023-09-30",
        "forecast": {
          "2023-10-01": 9,
          "2023-10-02": 11,
          "2023-10-03": 15,
          "2023-10-04": 12,
          "2023-10-05": 16,
          "2023-10-06": 18,
          "2023-10-07": 14,
          "2023-10-08": 11,
          "2023-10-09": 10,
          "2023-10-10": 15,
          "2023-10-11": 15,
          "2023-10-12": 18,
          "2023-10-13": 12,
          "2023-10-14": 10,
        }
      },
      {
        "store": "MAGAZ",
        "product": "PRODUKTIK11",
        "forecast_date": "2023-09-30",
        "forecast": {
          "2023-10-01": 10,
          "2023-10-02": 2,
          "2023-10-03": 3,
          "2023-10-04": 5,
          "2023-10-05": 5,
          "2023-10-06": 11,
          "2023-10-07": 13,
          "2023-10-08": 8,
          "2023-10-09": 7,
          "2023-10-10": 9,
          "2023-10-11": 8,
          "2023-10-12": 4,
          "2023-10-13": 4,
          "2023-10-14": 1,
        }
      },
      {
        "store": "MAGAZ",
        "product": "PRODUKTIK12",
        "forecast_date": "2023-09-30",
        "forecast": {
          "2023-10-01": 11,
          "2023-10-02": 9,
          "2023-10-03": 7,
          "2023-10-04": 19,
          "2023-10-05": 19,
          "2023-10-06": 16,
          "2023-10-07": 12,
          "2023-10-08": 19,
          "2023-10-09": 10,
          "2023-10-10": 5,
          "2023-10-11": 2,
          "2023-10-12": 0,
          "2023-10-13": 0,
          "2023-10-14": 11,
        }
      },
      {
        "store": "MAGAZ",
        "product": "PRODUKTIK13",
        "forecast_date": "2023-09-30",
        "forecast": {
          "2023-10-01": 12,
          "2023-10-02": 10,
          "2023-10-03": 8,
          "2023-10-04": 7,
          "2023-10-05": 6,
          "2023-10-06": 4,
          "2023-10-07": 2,
          "2023-10-08": 3,
          "2023-10-09": 5,
          "2023-10-10": 7,
          "2023-10-11": 6,
          "2023-10-12": 5,
          "2023-10-13": 1,
          "2023-10-14": 4,
        }
      },
      {
        "store": "MAGAZ",
        "product": "PRODUKTIK14",
        "forecast_date": "2023-09-30",
        "forecast": {
          "2023-10-01": 13,
          "2023-10-02": 12,
          "2023-10-03": 13,
          "2023-10-04": 12,
          "2023-10-05": 13,
          "2023-10-06": 12,
          "2023-10-07": 13,
          "2023-10-08": 12,
          "2023-10-09": 11,
          "2023-10-10": 13,
          "2023-10-11": 10,
          "2023-10-12": 6,
          "2023-10-13": 5,
          "2023-10-14": 7,
        }
      },
      {
        "store": "MAGAZ",
        "product": "PRODUKTIK15",
        "forecast_date": "2023-09-30",
        "forecast": {
          "2023-10-01": 14,
          "2023-10-02": 10,
          "2023-10-03": 0,
          "2023-10-04": 1,
          "2023-10-05": 2,
          "2023-10-06": 14,
          "2023-10-07": 3,
          "2023-10-08": 5,
          "2023-10-09": 6,
          "2023-10-10": 14,
          "2023-10-11": 10,
          "2023-10-12": 0,
          "2023-10-13": 1,
          "2023-10-14": 2,
        }
      },
    ],
    stats: [
      {
        "store": "Калужское ш., 42-й км, д. 6",
        "product_name": 'Булочка с повидлом',
        "profit": [
            {
                "date": "2023-10-01",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 3098.0,
                "money_promo": 6873.0
            },
            {
                "date": "2023-10-02",
                "type": 1,
                "units": 54,
                "units_promo": 85,
                "money": 7643.0,
                "money_promo": 10098.0
            },
            {
                "date": "2023-10-03",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 1809.0,
                "money_promo": 3962.0
            },
            {
                "date": "2023-10-05",
                "type": 1,
                "units": 76,
                "units_promo": 109,
                "money": 5973.0,
                "money_promo": 8734.0
            }
        ]
    },
    {
        "store": "ул. 15-я Парковая, д. 40, к. 1",
        "product_name": 'Рогалик с маком',
        "profit": [
            {
                "date": "2023-10-01",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 3098.0,
                "money_promo": 6873.0
            },
            {
                "date": "2023-10-02",
                "type": 1,
                "units": 54,
                "units_promo": 85,
                "money": 7643.0,
                "money_promo": 10098.0
            },
            {
                "date": "2023-10-03",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 1809.0,
                "money_promo": 3962.0
            },
            {
                "date": "2023-10-05",
                "type": 1,
                "units": 76,
                "units_promo": 109,
                "money": 5973.0,
                "money_promo": 8734.0
            },
            {
                "date": "2023-10-04",
                "type": 1,
                "units": 87,
                "units_promo": 126,
                "money": 8953.0,
                "money_promo": 13975.0
            }
        ]
    },
    {
        "store": "ул. Астахова, д. 4, к. 4",
        "product_name": "Сёмга",
        "profit": [
            {
                "date": "2023-10-01",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 3098.0,
                "money_promo": 6873.0
            },
            {
                "date": "2023-10-02",
                "type": 1,
                "units": 54,
                "units_promo": 85,
                "money": 7643.0,
                "money_promo": 10098.0
            },
            {
                "date": "2023-10-03",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 1809.0,
                "money_promo": 3962.0
            },
            {
                "date": "2023-10-05",
                "type": 1,
                "units": 76,
                "units_promo": 109,
                "money": 5973.0,
                "money_promo": 8734.0
            },
            {
                "date": "2023-10-04",
                "type": 1,
                "units": 87,
                "units_promo": 126,
                "money": 8953.0,
                "money_promo": 13975.0
            },
            {
                "date": "2023-10-06",
                "type": 1,
                "units": 65,
                "units_promo": 98,
                "money": 5087.0,
                "money_promo": 9628.0
            },
            {
                "date": "2023-10-07",
                "type": 1,
                "units": 109,
                "units_promo": 165,
                "money": 9853.0,
                "money_promo": 14988.0
            }
        ]
    },
    {
        "store": "ул. Большая Академическая, д. 17",
        "product_name": "Мороженное Доброе",
        "profit": [
            {
                "date": "2023-10-01",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 3098.0,
                "money_promo": 6873.0
            },
            {
                "date": "2023-10-02",
                "type": 1,
                "units": 54,
                "units_promo": 85,
                "money": 7643.0,
                "money_promo": 10098.0
            },
            {
                "date": "2023-10-03",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 1809.0,
                "money_promo": 3962.0
            },
            {
                "date": "2023-10-05",
                "type": 1,
                "units": 76,
                "units_promo": 109,
                "money": 5973.0,
                "money_promo": 8734.0
            },
            {
                "date": "2023-10-04",
                "type": 1,
                "units": 87,
                "units_promo": 126,
                "money": 8953.0,
                "money_promo": 13975.0
            }
        ]
    },
    {
        "store": "ул. Большая Черемушкинская, д. 1",
        "product_name": "Сардина",
        "profit": [
            {
                "date": "2023-10-01",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 3098.0,
                "money_promo": 6873.0
            },
            {
                "date": "2023-10-02",
                "type": 1,
                "units": 54,
                "units_promo": 85,
                "money": 7643.0,
                "money_promo": 10098.0
            },
            {
                "date": "2023-10-03",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 1809.0,
                "money_promo": 3962.0
            },
            {
                "date": "2023-10-05",
                "type": 1,
                "units": 76,
                "units_promo": 109,
                "money": 5973.0,
                "money_promo": 8734.0
            },
            {
                "date": "2023-10-04",
                "type": 1,
                "units": 87,
                "units_promo": 126,
                "money": 8953.0,
                "money_promo": 13975.0
            }
        ]
    },
    {
        "store": "ул. 7-я Кожуховская, д. 9",
        "product_name": "Печенье злаковое",
        "profit": [
            {
                "date": "2023-10-01",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 3098.0,
                "money_promo": 6873.0
            },
            {
                "date": "2023-10-02",
                "type": 1,
                "units": 54,
                "units_promo": 85,
                "money": 7643.0,
                "money_promo": 10098.0
            },
            {
                "date": "2023-10-03",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 1809.0,
                "money_promo": 3962.0
            },
            {
                "date": "2023-10-05",
                "type": 1,
                "units": 76,
                "units_promo": 109,
                "money": 5973.0,
                "money_promo": 8734.0
            },
            {
                "date": "2023-10-04",
                "type": 1,
                "units": 87,
                "units_promo": 126,
                "money": 8953.0,
                "money_promo": 13975.0
            },
            {
                "date": "2023-10-06",
                "type": 1,
                "units": 65,
                "units_promo": 98,
                "money": 5087.0,
                "money_promo": 9628.0
            }
        ]
    },
    {
        "store": "ул. Большая Почтовая, д. 28",
        "product_name": "Крекер",
        "profit": [
            {
                "date": "2023-10-01",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 3098.0,
                "money_promo": 6873.0
            },
            {
                "date": "2023-10-02",
                "type": 1,
                "units": 54,
                "units_promo": 85,
                "money": 7643.0,
                "money_promo": 10098.0
            },
            {
                "date": "2023-10-03",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 1809.0,
                "money_promo": 3962.0
            },
            {
                "date": "2023-10-05",
                "type": 1,
                "units": 76,
                "units_promo": 109,
                "money": 5973.0,
                "money_promo": 8734.0
            }
        ]
    },
    {
        "store": "ш. Энтузиастов, д. 80",
        "product_name": "Пончики",
        "profit": [
            {
                "date": "2023-10-01",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 3098.0,
                "money_promo": 6873.0
            },
            {
                "date": "2023-10-02",
                "type": 1,
                "units": 54,
                "units_promo": 85,
                "money": 7643.0,
                "money_promo": 10098.0
            },
            {
                "date": "2023-10-03",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 1809.0,
                "money_promo": 3962.0
            },
            {
                "date": "2023-10-05",
                "type": 1,
                "units": 76,
                "units_promo": 109,
                "money": 5973.0,
                "money_promo": 8734.0
            },
            {
                "date": "2023-10-04",
                "type": 1,
                "units": 87,
                "units_promo": 126,
                "money": 8953.0,
                "money_promo": 13975.0
            }
        ]
    },
    {
        "store": "ул. 7-я Кожуховская, д. 9",
        "product_name": "Вареники",
        "profit": [
            {
                "date": "2023-10-01",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 3098.0,
                "money_promo": 6873.0
            },
            {
                "date": "2023-10-02",
                "type": 1,
                "units": 54,
                "units_promo": 85,
                "money": 7643.0,
                "money_promo": 10098.0
            },
            {
                "date": "2023-10-03",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 1809.0,
                "money_promo": 3962.0
            },
            {
                "date": "2023-10-05",
                "type": 1,
                "units": 76,
                "units_promo": 109,
                "money": 5973.0,
                "money_promo": 8734.0
            },
            {
                "date": "2023-10-04",
                "type": 1,
                "units": 87,
                "units_promo": 126,
                "money": 8953.0,
                "money_promo": 13975.0
            }
        ]
    },
    {
        "store": "ул. Астахова, д. 4, к. 4",
        "product_name": "Роллы",
        "profit": [
            {
                "date": "2023-10-01",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 3098.0,
                "money_promo": 6873.0
            },
            {
                "date": "2023-10-02",
                "type": 1,
                "units": 54,
                "units_promo": 85,
                "money": 7643.0,
                "money_promo": 10098.0
            },
            {
                "date": "2023-10-03",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 1809.0,
                "money_promo": 3962.0
            },
            {
                "date": "2023-10-05",
                "type": 1,
                "units": 76,
                "units_promo": 109,
                "money": 5973.0,
                "money_promo": 8734.0
            },
            {
                "date": "2023-10-04",
                "type": 1,
                "units": 87,
                "units_promo": 126,
                "money": 8953.0,
                "money_promo": 13975.0
            }
        ]
    },
    {
        "store": "ул. Большая Почтовая, д. 28",
        "product_name": "Яйца",
        "profit": [
            {
                "date": "2023-10-01",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 3098.0,
                "money_promo": 6873.0
            },
            {
                "date": "2023-10-02",
                "type": 1,
                "units": 54,
                "units_promo": 85,
                "money": 7643.0,
                "money_promo": 10098.0
            },
            {
                "date": "2023-10-03",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 1809.0,
                "money_promo": 3962.0
            },
            {
                "date": "2023-10-05",
                "type": 1,
                "units": 76,
                "units_promo": 109,
                "money": 5973.0,
                "money_promo": 8734.0
            },
            {
                "date": "2023-10-04",
                "type": 1,
                "units": 87,
                "units_promo": 126,
                "money": 8953.0,
                "money_promo": 13975.0
            }
        ]
    },
    {
        "store": "ул. Дубнинская, д. 12, корп. 3",
        "product_name": "Хот-дог",
        "profit": [
            {
                "date": "2023-10-01",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 3098.0,
                "money_promo": 6873.0
            },
            {
                "date": "2023-10-02",
                "type": 1,
                "units": 54,
                "units_promo": 85,
                "money": 7643.0,
                "money_promo": 10098.0
            },
            {
                "date": "2023-10-03",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 1809.0,
                "money_promo": 3962.0
            },
            {
                "date": "2023-10-05",
                "type": 1,
                "units": 76,
                "units_promo": 109,
                "money": 5973.0,
                "money_promo": 8734.0
            },
            {
                "date": "2023-10-04",
                "type": 1,
                "units": 87,
                "units_promo": 126,
                "money": 8953.0,
                "money_promo": 13975.0
            }
        ]
    },
    {
        "store": "ш. Энтузиастов, д. 80",
        "product_name": "Молочный шоколад",
        "profit": [
            {
                "date": "2023-10-01",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 3098.0,
                "money_promo": 6873.0
            },
            {
                "date": "2023-10-02",
                "type": 1,
                "units": 54,
                "units_promo": 85,
                "money": 7643.0,
                "money_promo": 10098.0
            },
            {
                "date": "2023-10-03",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 1809.0,
                "money_promo": 3962.0
            },
            {
                "date": "2023-10-05",
                "type": 1,
                "units": 76,
                "units_promo": 109,
                "money": 5973.0,
                "money_promo": 8734.0
            },
            {
                "date": "2023-10-04",
                "type": 1,
                "units": 87,
                "units_promo": 126,
                "money": 8953.0,
                "money_promo": 13975.0
            }
        ]
    },
    {
        "store": "ул. Большая Академическая, д. 17",
        "product_name": "Шпинат свежий",
        "profit": [
            {
                "date": "2023-10-01",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 3098.0,
                "money_promo": 6873.0
            },
            {
                "date": "2023-10-02",
                "type": 1,
                "units": 54,
                "units_promo": 85,
                "money": 7643.0,
                "money_promo": 10098.0
            },
            {
                "date": "2023-10-03",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 1809.0,
                "money_promo": 3962.0
            },
            {
                "date": "2023-10-05",
                "type": 1,
                "units": 76,
                "units_promo": 109,
                "money": 5973.0,
                "money_promo": 8734.0
            },
            {
                "date": "2023-10-04",
                "type": 1,
                "units": 87,
                "units_promo": 126,
                "money": 8953.0,
                "money_promo": 13975.0
            },
            {
                "date": "2023-10-06",
                "type": 1,
                "units": 65,
                "units_promo": 98,
                "money": 5087.0,
                "money_promo": 9628.0
            }
        ]
    },
    {
        "store": "ул. Большая Почтовая, д. 28",
        "product_name": "Грейпфрут сорта Руби",
        "profit": [
            {
                "date": "2023-10-01",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 3098.0,
                "money_promo": 6873.0
            },
            {
                "date": "2023-10-02",
                "type": 1,
                "units": 54,
                "units_promo": 85,
                "money": 7643.0,
                "money_promo": 10098.0
            },
            {
                "date": "2023-10-03",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 1809.0,
                "money_promo": 3962.0
            },
            {
                "date": "2023-10-05",
                "type": 1,
                "units": 76,
                "units_promo": 109,
                "money": 5973.0,
                "money_promo": 8734.0
            },
            {
                "date": "2023-10-04",
                "type": 1,
                "units": 87,
                "units_promo": 126,
                "money": 8953.0,
                "money_promo": 13975.0
            }
        ]
    },
    {
        "store": "ул. Шипиловская, д. 1",
        "product_name": "мед липовый",
        "profit": [
            {
                "date": "2023-10-01",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 3098.0,
                "money_promo": 6873.0
            },
            {
                "date": "2023-10-02",
                "type": 1,
                "units": 54,
                "units_promo": 85,
                "money": 7643.0,
                "money_promo": 10098.0
            },
            {
                "date": "2023-10-03",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 1809.0,
                "money_promo": 3962.0
            },
            {
                "date": "2023-10-05",
                "type": 1,
                "units": 76,
                "units_promo": 109,
                "money": 5973.0,
                "money_promo": 8734.0
            },
            {
                "date": "2023-10-04",
                "type": 1,
                "units": 87,
                "units_promo": 126,
                "money": 8953.0,
                "money_promo": 13975.0
            },
            {
                "date": "2023-10-06",
                "type": 1,
                "units": 65,
                "units_promo": 98,
                "money": 5087.0,
                "money_promo": 9628.0
            }
        ]
    },
    {
        "store": "ул. 7-я Кожуховская, д. 9",
        "product_name": "авокадо спелое",
        "profit": [
            {
                "date": "2023-10-01",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 3098.0,
                "money_promo": 6873.0
            },
            {
                "date": "2023-10-02",
                "type": 1,
                "units": 54,
                "units_promo": 85,
                "money": 7643.0,
                "money_promo": 10098.0
            },
            {
                "date": "2023-10-03",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 1809.0,
                "money_promo": 3962.0
            },
            {
                "date": "2023-10-05",
                "type": 1,
                "units": 76,
                "units_promo": 109,
                "money": 5973.0,
                "money_promo": 8734.0
            },
            {
                "date": "2023-10-04",
                "type": 1,
                "units": 87,
                "units_promo": 126,
                "money": 8953.0,
                "money_promo": 13975.0
            },
            {
                "date": "2023-10-06",
                "type": 1,
                "units": 65,
                "units_promo": 98,
                "money": 5087.0,
                "money_promo": 9628.0
            }
        ]
    },
    {
        "store": "ш. Энтузиастов, д. 80",
        "product_name": "французский багет",
        "profit": [
            {
                "date": "2023-10-01",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 3098.0,
                "money_promo": 6873.0
            },
            {
                "date": "2023-10-02",
                "type": 1,
                "units": 54,
                "units_promo": 85,
                "money": 7643.0,
                "money_promo": 10098.0
            },
            {
                "date": "2023-10-03",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 1809.0,
                "money_promo": 3962.0
            },
            {
                "date": "2023-10-05",
                "type": 1,
                "units": 76,
                "units_promo": 109,
                "money": 5973.0,
                "money_promo": 8734.0
            },
            {
                "date": "2023-10-04",
                "type": 1,
                "units": 87,
                "units_promo": 126,
                "money": 8953.0,
                "money_promo": 13975.0
            },
            {
                "date": "2023-10-06",
                "type": 1,
                "units": 65,
                "units_promo": 98,
                "money": 5087.0,
                "money_promo": 9628.0
            }
        ]
    },
    {
        "store": "ул. Дубнинская, д. 12, корп. 3",
        "product_name": "оливки каламата",
        "profit": [
            {
                "date": "2023-10-01",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 3098.0,
                "money_promo": 6873.0
            },
            {
                "date": "2023-10-02",
                "type": 1,
                "units": 54,
                "units_promo": 85,
                "money": 7643.0,
                "money_promo": 10098.0
            },
            {
                "date": "2023-10-03",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 1809.0,
                "money_promo": 3962.0
            },
            {
                "date": "2023-10-05",
                "type": 1,
                "units": 76,
                "units_promo": 109,
                "money": 5973.0,
                "money_promo": 8734.0
            },
            {
                "date": "2023-10-04",
                "type": 1,
                "units": 87,
                "units_promo": 126,
                "money": 8953.0,
                "money_promo": 13975.0
            },
            {
                "date": "2023-10-06",
                "type": 1,
                "units": 65,
                "units_promo": 98,
                "money": 5087.0,
                "money_promo": 9628.0
            }
        ]
    },
    {
        "store": "ул. Большая Черемушкинская, д. 1",
        "product_name": "сельдерей свежий",
        "profit": [
            {
                "date": "2023-10-01",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 3098.0,
                "money_promo": 6873.0
            },
            {
                "date": "2023-10-02",
                "type": 1,
                "units": 54,
                "units_promo": 85,
                "money": 7643.0,
                "money_promo": 10098.0
            },
            {
                "date": "2023-10-03",
                "type": 1,
                "units": 34,
                "units_promo": 87,
                "money": 1809.0,
                "money_promo": 3962.0
            },
            {
                "date": "2023-10-05",
                "type": 1,
                "units": 76,
                "units_promo": 109,
                "money": 5973.0,
                "money_promo": 8734.0
            },
            {
                "date": "2023-10-04",
                "type": 1,
                "units": 87,
                "units_promo": 126,
                "money": 8953.0,
                "money_promo": 13975.0
            },
            {
                "date": "2023-10-06",
                "type": 1,
                "units": 65,
                "units_promo": 98,
                "money": 5087.0,
                "money_promo": 9628.0
            }
        ]
    }
    ]
  },
  reducers: {
    setNewForecast(state, action) {
      state.forecast = action.payload
    },
    setShops(state, action) {
      state.shopNames = action.payload
    },
    setCategories(state, action) {
      state.categories = action.payload
    },
    setStats(state, action) {
      state.stats = action.payload
    },
  }
})

export const { setNewForecast, setShops, setCategories, setStats } = dataSlice.actions;

export default dataSlice.reducer;
