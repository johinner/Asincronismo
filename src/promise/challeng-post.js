import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
}

const dataProduct = {
  "title": "TNT Protein",
  "price": 100000,
  "description": "A description",
  "categoryId": 1,
  "images": [
    "https://placeimg.com/640/480/any"
  ]
}
const dataUsers = {
  "email": "reina_dragon@live.com",
  "password": "changeme",
  "name": "daenerys",
  "role": "customer",
  "avatar": "https://i.postimg.cc/hv3fLD5n/dayneris.jpg"
}

postData(`${API}/users`, dataUsers)
  .then(response => response.json())
  .then(data => console.log(data));

