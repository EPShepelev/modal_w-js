const cars = [
  {id: 1, title: 'Dodge', price: 25, img: 'https://avatars.mds.yandex.net/get-pdb/1615223/1e089d46-25b9-48b6-a522-c7d5b9716b34/s1200?webp=false'},
  {id: 2, title: 'Aston Martin', price: 110, img: 'https://avatars.mds.yandex.net/get-pdb/2308976/f8904053-2465-4541-9d9e-28f68702dbae/s1200?webp=false'},
  {id: 3, title: 'Jaguar', price: 80, img: 'http://www.fonstola.ru/pic/201111/2560x1600/fonstola.ru-57180.jpg'}
]

const toHTML = car => `
<div class="col">
    <div class="card">
      <img style="height: 300px;" src="${car.img}" class="card-img-top" alt="${car.title}">
      <div class="card-body">
        <h5 class="card-title">${car.title}</h5>
        <a href="#" class="btn btn-primary">See price</a>
        <a href="#" class="btn btn-danger">Delete</a>
      </div>
    </div>
   </div>`

function render() {

  // строчка ниже эквивалентна car => toHTML(car).join('')
  const html = cars.map(toHTML).join('')
  document.querySelector('#cars').innerHTML = html
}

render()

const myModal = $.modal({
  //передача базовых опций для модального окна
  title: 'Modal Window',
  closable: true,
  content: `
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit in magnam dignissimos, harum</p>
  <p>Lorem ipsum, dolor sit amn magnam dignissimos, harum</p>
  `,
  width: '400px',
  footerButtons: [
    {
      text: 'OK',
      type: 'primary',
      handler() {
        console.log('Primary btn clicked')
        myModal.close()
      }
    },
    {
      text: 'Cancel',
      type: 'danger',
      handler() {
        console.log('Danger btn clicked')
        myModal.close()
      }
    }
  ]
})