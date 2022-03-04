'use strict'

const sendData = (user) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log( json,`Данные отправлены`))
  .catch(error => console.log("Ошибка отправки"))
}


const getData = (url) => {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    sendData(data) 
    console.log(data, 'Данные полученны')
  })
  .catch(error => console.log("Ошибка получения данных"))
}

getData('db.json')