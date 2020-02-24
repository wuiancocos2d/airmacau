import {
	CHANGE_CHECKFLT,
	CHANGE_FLTDATE
} from '../mutation-types.js'
const mutations = {

}

const actions = {

}



const state = {
	teleMenu: [
    {
      "data": {
        "rcdId": 1,
        "parentId": 0,
        "type": "big_class",
        "value": "Headquarter",
        "text": "Headquarter",
        "remarks": "Headquarter",
        "orderId": 10,
        "status": 1
      },
      "childern": [
        {
          "data": {
            "rcdId": 6,
            "parentId": 1,
            "type": "middle_class",
            "value": "CEO Office",
            "text": "CEO Office",
            "remarks": "CEO Office",
            "orderId": 10,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 7,
            "parentId": 1,
            "type": "middle_class",
            "value": "Chairman Office",
            "text": "Chairman Office",
            "remarks": "Chairman Office",
            "orderId": 20,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 8,
            "parentId": 1,
            "type": "middle_class",
            "value": "Commercial",
            "text": "Commercial",
            "remarks": "Commercial",
            "orderId": 30,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 9,
            "parentId": 1,
            "type": "middle_class",
            "value": "Customer Services",
            "text": "Customer Services",
            "remarks": "Customer Services",
            "orderId": 40,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 10,
            "parentId": 1,
            "type": "middle_class",
            "value": "Engineering & Maintenance",
            "text": "Engineering & Maintenance",
            "remarks": "Engineering & Maintenance",
            "orderId": 50,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 11,
            "parentId": 1,
            "type": "middle_class",
            "value": "Finance",
            "text": "Finance",
            "remarks": "Finance",
            "orderId": 60,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 12,
            "parentId": 1,
            "type": "middle_class",
            "value": "Flight Operations",
            "text": "Flight Operations",
            "remarks": "Flight Operations",
            "orderId": 70,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 13,
            "parentId": 1,
            "type": "middle_class",
            "value": "General Affairs",
            "text": "General Affairs",
            "remarks": "General Affairs",
            "orderId": 80,
            "status": 1
          },
          "childern": [
            {
              "rcdId": 52,
              "parentId": 13,
              "type": "small_class",
              "value": "VPGA office",
              "text": "VPGA office",
              "remarks": "VPGA office",
              "orderId": 10,
              "status": 1
            },
            {
              "rcdId": 53,
              "parentId": 13,
              "type": "small_class",
              "value": "Administration",
              "text": "Administration",
              "remarks": "Administration",
              "orderId": 20,
              "status": 1
            },
            {
              "rcdId": 54,
              "parentId": 13,
              "type": "small_class",
              "value": "Human Resources",
              "text": "Human Resources",
              "remarks": "Human Resources",
              "orderId": 30,
              "status": 1
            },
            {
              "rcdId": 55,
              "parentId": 13,
              "type": "small_class",
              "value": "Training & Development",
              "text": "Training & Development",
              "remarks": "Training & Development",
              "orderId": 40,
              "status": 1
            },
            {
              "rcdId": 56,
              "parentId": 13,
              "type": "small_class",
              "value": "Information Technology",
              "text": "Information Technology",
              "remarks": "Information Technology",
              "orderId": 50,
              "status": 1
            }
          ]
        }
      ]
    },
    {
      "data": {
        "rcdId": 2,
        "parentId": 0,
        "type": "big_class",
        "value": "Technical Representative",
        "text": "Technical Representative",
        "remarks": "Technical Representative",
        "orderId": 20,
        "status": 1
      },
      "childern": [
        {
          "data": {
            "rcdId": 14,
            "parentId": 2,
            "type": "middle_class",
            "value": "Airbus Industries",
            "text": "Airbus Industries",
            "remarks": "Airbus Industries",
            "orderId": 10,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 15,
            "parentId": 2,
            "type": "middle_class",
            "value": "International Aero Engines",
            "text": "International Aero Engines",
            "remarks": "International Aero Engines",
            "orderId": 20,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 16,
            "parentId": 2,
            "type": "middle_class",
            "value": "Travel Sky",
            "text": "Travel Sky",
            "remarks": "Travel Sky",
            "orderId": 30,
            "status": 1
          },
          "childern": []
        }
      ]
    },
    {
      "data": {
        "rcdId": 3,
        "parentId": 0,
        "type": "big_class",
        "value": "Lawyers Representative",
        "text": "Lawyers Representative",
        "remarks": "Lawyers Representative",
        "orderId": 30,
        "status": 1
      },
      "childern": []
    },
    {
      "data": {
        "rcdId": 4,
        "parentId": 0,
        "type": "big_class",
        "value": "Outstation Offices",
        "text": "Outstation Offices",
        "remarks": "Outstation Offices",
        "orderId": 40,
        "status": 1
      },
      "childern": [
        {
          "data": {
            "rcdId": 17,
            "parentId": 4,
            "type": "middle_class",
            "value": "Bangkok",
            "text": "Bangkok",
            "remarks": "Bangkok",
            "orderId": 10,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 18,
            "parentId": 4,
            "type": "middle_class",
            "value": "Beijing",
            "text": "Beijing",
            "remarks": "Beijing",
            "orderId": 20,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 19,
            "parentId": 4,
            "type": "middle_class",
            "value": "Changzhou",
            "text": "Changzhou",
            "remarks": "Changzhou",
            "orderId": 30,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 20,
            "parentId": 4,
            "type": "middle_class",
            "value": "Chengdu",
            "text": "Chengdu",
            "remarks": "Chengdu",
            "orderId": 40,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 21,
            "parentId": 4,
            "type": "middle_class",
            "value": "Chongqing",
            "text": "Chongqing",
            "remarks": "Chongqing",
            "orderId": 50,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 22,
            "parentId": 4,
            "type": "middle_class",
            "value": "Fukuoka",
            "text": "Fukuoka",
            "remarks": "Fukuoka",
            "orderId": 60,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 23,
            "parentId": 4,
            "type": "middle_class",
            "value": "Guiyang",
            "text": "Guiyang",
            "remarks": "Guiyang",
            "orderId": 70,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 24,
            "parentId": 4,
            "type": "middle_class",
            "value": "Hangzhou",
            "text": "Hangzhou",
            "remarks": "Hangzhou",
            "orderId": 80,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 25,
            "parentId": 4,
            "type": "middle_class",
            "value": "Hanoi",
            "text": "Hanoi",
            "remarks": "Hanoi",
            "orderId": 90,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 26,
            "parentId": 4,
            "type": "middle_class",
            "value": "Hefei",
            "text": "Hefei",
            "remarks": "Hefei",
            "orderId": 100,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 27,
            "parentId": 4,
            "type": "middle_class",
            "value": "Jieyang",
            "text": "Jieyang",
            "remarks": "Jieyang",
            "orderId": 110,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 28,
            "parentId": 4,
            "type": "middle_class",
            "value": "Kaohsiung",
            "text": "Kaohsiung",
            "remarks": "Kaohsiung",
            "orderId": 120,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 29,
            "parentId": 4,
            "type": "middle_class",
            "value": "Nanjing",
            "text": "Nanjing",
            "remarks": "Nanjing",
            "orderId": 130,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 30,
            "parentId": 4,
            "type": "middle_class",
            "value": "Nanning",
            "text": "Nanning",
            "remarks": "Nanning",
            "orderId": 140,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 31,
            "parentId": 4,
            "type": "middle_class",
            "value": "Ningbo",
            "text": "Ningbo",
            "remarks": "Ningbo",
            "orderId": 150,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 32,
            "parentId": 4,
            "type": "middle_class",
            "value": "Osaka",
            "text": "Osaka",
            "remarks": "Osaka",
            "orderId": 160,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 33,
            "parentId": 4,
            "type": "middle_class",
            "value": "Qingdao",
            "text": "Qingdao",
            "remarks": "Qingdao",
            "orderId": 170,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 34,
            "parentId": 4,
            "type": "middle_class",
            "value": "Seoul",
            "text": "Seoul",
            "remarks": "Seoul",
            "orderId": 180,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 35,
            "parentId": 4,
            "type": "middle_class",
            "value": "Shanghai",
            "text": "Shanghai",
            "remarks": "Shanghai",
            "orderId": 190,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 36,
            "parentId": 4,
            "type": "middle_class",
            "value": "Shenzhen",
            "text": "Shenzhen",
            "remarks": "Shenzhen",
            "orderId": 200,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 37,
            "parentId": 4,
            "type": "middle_class",
            "value": "Taipei City",
            "text": "Taipei City",
            "remarks": "Taipei City",
            "orderId": 210,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 38,
            "parentId": 4,
            "type": "middle_class",
            "value": "Taiyuan",
            "text": "Taiyuan",
            "remarks": "Taiyuan",
            "orderId": 220,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 39,
            "parentId": 4,
            "type": "middle_class",
            "value": "Tianjin",
            "text": "Tianjin",
            "remarks": "Tianjin",
            "orderId": 230,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 40,
            "parentId": 4,
            "type": "middle_class",
            "value": "Tokyo",
            "text": "Tokyo",
            "remarks": "Tokyo",
            "orderId": 240,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 41,
            "parentId": 4,
            "type": "middle_class",
            "value": "Wenzhou",
            "text": "Wenzhou",
            "remarks": "Wenzhou",
            "orderId": 250,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 42,
            "parentId": 4,
            "type": "middle_class",
            "value": "Xiamen",
            "text": "Xiamen",
            "remarks": "Xiamen",
            "orderId": 260,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 43,
            "parentId": 4,
            "type": "middle_class",
            "value": "Zhengzhou",
            "text": "Zhengzhou",
            "remarks": "Zhengzhou",
            "orderId": 270,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 44,
            "parentId": 4,
            "type": "middle_class",
            "value": "Zhuhai",
            "text": "Zhuhai",
            "remarks": "Zhuhai",
            "orderId": 280,
            "status": 1
          },
          "childern": []
        }
      ]
    },
    {
      "data": {
        "rcdId": 5,
        "parentId": 0,
        "type": "big_class",
        "value": "GSA Offices",
        "text": "GSA Offices",
        "remarks": "GSA Offices",
        "orderId": 50,
        "status": 1
      },
      "childern": [
        {
          "data": {
            "rcdId": 45,
            "parentId": 5,
            "type": "middle_class",
            "value": "Bangladesh",
            "text": "Bangladesh",
            "remarks": "Bangladesh",
            "orderId": 10,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 46,
            "parentId": 5,
            "type": "middle_class",
            "value": "Cambodia",
            "text": "Cambodia",
            "remarks": "Cambodia",
            "orderId": 20,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 47,
            "parentId": 5,
            "type": "middle_class",
            "value": "Israel",
            "text": "Israel",
            "remarks": "Israel",
            "orderId": 30,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 48,
            "parentId": 5,
            "type": "middle_class",
            "value": "Korea",
            "text": "Korea",
            "remarks": "Korea",
            "orderId": 40,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 49,
            "parentId": 5,
            "type": "middle_class",
            "value": "Philippines",
            "text": "Philippines",
            "remarks": "Philippines",
            "orderId": 50,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 50,
            "parentId": 5,
            "type": "middle_class",
            "value": "Thailand",
            "text": "Thailand",
            "remarks": "Thailand",
            "orderId": 60,
            "status": 1
          },
          "childern": []
        },
        {
          "data": {
            "rcdId": 51,
            "parentId": 5,
            "type": "middle_class",
            "value": "Vietnam",
            "text": "Vietnam",
            "remarks": "Vietnam",
            "orderId": 70,
            "status": 1
          },
          "childern": []
        }
      ]
    }
  ],
	slStaff : {}

}

export default {
	state,
	mutations,
	actions
}
