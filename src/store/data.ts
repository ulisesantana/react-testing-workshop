import {Store} from "../types";

export const store: Store = {
  assets: {},
  holders: {},
  records: []
} as Store;

export const mockStore: Store = {
  "assets": {
    "1c062cc0-bd44-430f-8437-a3befcb5c6f7": {
      "id": "1c062cc0-bd44-430f-8437-a3befcb5c6f7",
      "createDate": "2019-10-19T16:04:31.792Z",
      "name": "Acer Chromebook R11",
      "notes": "Convertible de Acer con aplicaciones de Android y Linux",
      "blocked": false,
      "serial": "9804197864251978fqwugio",
      "assignedTo": "fe05b791-11de-4b2a-bac5-055cf78732ea",
      "updateDate": "2019-10-19T16:04:31.792Z"
    },
    "2b79ffad-53e7-4180-8582-e3edb511206f": {
      "id": "2b79ffad-53e7-4180-8582-e3edb511206f",
      "createDate": "2019-10-19T16:07:42.931Z",
      "name": "Chuwi Lapbook Air 14\"",
      "notes": "SO: Linux\nTouchpad: Works randomly. Use an external mouse.",
      "blocked": false,
      "serial": "7A8D69A7DA9DGAS59SG9ASH5NBAV",
      "assignedTo": "213814ef-3569-41ce-88c4-3d6ece0b5cb4",
      "updateDate": "2019-10-19T16:07:42.931Z"
    },
    "bbaa1155-e65c-41e4-a75f-e02fbc868af2": {
      "id": "bbaa1155-e65c-41e4-a75f-e02fbc868af2",
      "createDate": "2019-10-19T16:06:29.265Z",
      "name": "iPad Mini 2019",
      "notes": "Small, but powerful.",
      "blocked": false,
      "serial": "H784S3HKS8SH58S58S",
      "assignedTo": "d850a7c9-a5a0-41f3-a6b5-e30c3e97f556",
      "updateDate": "2019-10-19T16:06:29.265Z"
    },
    "3c204481-36f0-4dcc-8c34-e5ccef83fd55": {
      "id": "3c204481-36f0-4dcc-8c34-e5ccef83fd55",
      "createDate": "2019-10-19T15:03:03.733Z",
      "name": "iPhone XS",
      "notes": "A nice phone, great camera.",
      "blocked": false,
      "serial": "63120b51603765105v370636cdjhsj",
      "assignedTo": "f0628e14-273c-4814-9574-93f895a0ca90",
      "updateDate": "2019-10-19T15:59:18.699Z"
    },
    "84288e1d-8bcd-44e9-a255-ebdaf29f136d": {
      "id": "84288e1d-8bcd-44e9-a255-ebdaf29f136d",
      "createDate": "2019-10-19T16:05:32.418Z",
      "name": "Macbook Pro 13\"",
      "notes": "",
      "blocked": false,
      "serial": "KSJ756RS4J26581J68J2SJ6S73",
      "assignedTo": "96192629-9999-4f94-a82d-7a4b06bbd858",
      "updateDate": "2019-10-19T16:05:32.418Z"
    },
    "ccfc8bf2-5f49-417b-a6e9-83368f25d3d6": {
      "id": "ccfc8bf2-5f49-417b-a6e9-83368f25d3d6",
      "createDate": "2019-10-19T16:09:46.498Z",
      "name": "Slimbook 14\"",
      "notes": "RAM: 16GB\nSSD: 256GB\nSO: Ubuntu Budgie",
      "blocked": false,
      "serial": "KFJ5E9IYS9E57TX076EXGHLO75E",
      "assignedTo": "bddbe580-b29c-4aba-b5ae-a2b5bdc97add",
      "updateDate": "2019-10-19T16:09:46.498Z"
    }
  },
  "holders": {
    "d850a7c9-a5a0-41f3-a6b5-e30c3e97f556": {
      "id": "d850a7c9-a5a0-41f3-a6b5-e30c3e97f556",
      "createDate": "2019-10-19T15:52:47.190Z",
      "name": "Ada Lovelace",
      "notes": "Awesome mind.\n",
      "blocked": false,
      "updateDate": "2019-10-19T15:52:47.190Z"
    },
    "f0628e14-273c-4814-9574-93f895a0ca90": {
      "id": "f0628e14-273c-4814-9574-93f895a0ca90",
      "createDate": "2019-10-19T15:49:55.546Z",
      "name": "Bill Gates",
      "notes": "The optimization guy",
      "blocked": false,
      "updateDate": "2019-10-19T15:49:55.546Z"
    },
    "bddbe580-b29c-4aba-b5ae-a2b5bdc97add": {
      "id": "bddbe580-b29c-4aba-b5ae-a2b5bdc97add",
      "createDate": "2019-10-19T15:53:37.930Z",
      "name": "Lea Verou",
      "notes": "If you work on web, please see her talks.",
      "blocked": false,
      "updateDate": "2019-10-19T15:53:37.930Z"
    },
    "213814ef-3569-41ce-88c4-3d6ece0b5cb4": {
      "id": "213814ef-3569-41ce-88c4-3d6ece0b5cb4",
      "createDate": "2019-10-19T15:57:32.237Z",
      "name": "Margaret Hamilton",
      "notes": "",
      "blocked": false,
      "updateDate": "2019-10-19T15:57:32.237Z"
    },
    "96192629-9999-4f94-a82d-7a4b06bbd858": {
      "id": "96192629-9999-4f94-a82d-7a4b06bbd858",
      "createDate": "2019-10-19T15:47:49.521Z",
      "name": "Ryan Dahl",
      "notes": "Great guy, pretty smart.",
      "blocked": false,
      "updateDate": "2019-10-19T15:47:49.521Z"
    },
    "fe05b791-11de-4b2a-bac5-055cf78732ea": {
      "id": "fe05b791-11de-4b2a-bac5-055cf78732ea",
      "createDate": "2019-10-19T15:51:40.770Z",
      "name": "Steve Jobs",
      "notes": "With all his cons, but a genius.",
      "blocked": false,
      "updateDate": "2019-10-19T15:51:40.770Z"
    },
    "e4869687-c498-4240-a7c2-d42424e7a4b8": {
      "id": "e4869687-c498-4240-a7c2-d42424e7a4b8",
      "createDate": "2019-10-19T15:48:53.659Z",
      "name": "Ulises Santana",
      "notes": "Only sugarless Monster",
      "blocked": false,
      "updateDate": "2019-10-19T15:50:08.473Z"
    }
  },
  "records": [
    {
      "id": "741ff8cc-11d4-4585-868b-45ca64ba2e62",
      "date": "2019-10-19T16:09:46.498Z",
      "from": false,
      "to": "bddbe580-b29c-4aba-b5ae-a2b5bdc97add",
      "asset": "ccfc8bf2-5f49-417b-a6e9-83368f25d3d6",
      "observations": ""
    },
    {
      "id": "3afdb9ae-419a-4d1f-b5fc-348df404d6f8",
      "date": "2019-10-19T16:07:42.931Z",
      "from": false,
      "to": "213814ef-3569-41ce-88c4-3d6ece0b5cb4",
      "asset": "2b79ffad-53e7-4180-8582-e3edb511206f",
      "observations": ""
    },
    {
      "id": "c675e769-2bd0-4673-8395-30552db684de",
      "date": "2019-10-19T16:06:29.265Z",
      "from": false,
      "to": "d850a7c9-a5a0-41f3-a6b5-e30c3e97f556",
      "asset": "bbaa1155-e65c-41e4-a75f-e02fbc868af2",
      "observations": ""
    },
    {
      "id": "e4b52f9d-daca-44ba-becf-466fb8bfe608",
      "date": "2019-10-19T16:05:32.418Z",
      "from": false,
      "to": "96192629-9999-4f94-a82d-7a4b06bbd858",
      "asset": "84288e1d-8bcd-44e9-a255-ebdaf29f136d",
      "observations": ""
    },
    {
      "id": "3da338e8-28f7-4122-8c93-173489dc5e92",
      "date": "2019-10-19T16:04:31.792Z",
      "from": false,
      "to": "fe05b791-11de-4b2a-bac5-055cf78732ea",
      "asset": "1c062cc0-bd44-430f-8437-a3befcb5c6f7",
      "observations": ""
    },
    {
      "id": "79b5842e-24ab-4c82-912d-228468f6a704",
      "date": "2019-10-19T15:59:18.699Z",
      "from": false,
      "to": false,
      "asset": "3c204481-36f0-4dcc-8c34-e5ccef83fd55",
      "observations": ""
    },
    {
      "id": "b2606bc1-f160-423c-8b41-4e137c62585e",
      "date": "2019-10-19T15:59:06.087Z",
      "from": false,
      "to": false,
      "asset": "3c204481-36f0-4dcc-8c34-e5ccef83fd55",
      "observations": ""
    },
    {
      "id": "78e90fc8-b73c-4c04-a29a-ce054f1ebd60",
      "date": "2019-10-19T15:59:03.096Z",
      "from": false,
      "to": "f0628e14-273c-4814-9574-93f895a0ca90",
      "asset": "3c204481-36f0-4dcc-8c34-e5ccef83fd55",
      "observations": ""
    },
    {
      "id": "f7f235a0-76ab-4119-a67f-b00e9af9fe6d",
      "date": "2019-10-19T15:03:03.733Z",
      "from": false,
      "to": false,
      "asset": "3c204481-36f0-4dcc-8c34-e5ccef83fd55",
      "observations": ""
    }
  ]
}