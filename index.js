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
        <a href="#" class="btn btn-primary" data-btn="price" data-id="${car.id}">See price</a>
        <a href="#" class="btn btn-danger" data-btn="remove" data-id="${car.id}">Delete</a>
      </div>
    </div>
   </div>`

function render() {

  // строчка ниже эквивалентна car => toHTML(car).join('')
  const html = cars.map(toHTML).join('')
  document.querySelector('#cars').innerHTML = html
}

render()

const priceModal = $.modal({
  //передача базовых опций для модального окна
  title: 'Price',
  closable: true,
  width: '400px',
  footerButtons: [
    {
      text: 'Close',
      type: 'primary',
      handler() {
        priceModal.close()
      }
    }
  ]
})

const confirmModal = $.modal({
  //передача базовых опций для модального окна
  title: 'Are you sure?',
  closable: true,
  width: '400px',
  footerButtons: [
    {
      text: 'Cancel',
      type: 'secondary',
      handler() {
        confirmModal.close()
      }
    },
    {
      text: 'Delete',
      type: 'danger',
      handler() {
        confirmModal.close()
      }
    }
  ]
})

document.addEventListener('click', event => {
  event.preventDefault()
  const btnType = event.target.dataset.btn
  const id = +event.target.dataset.id  
  const car = cars.find(c => c.id === id)

  if(btnType === 'price') {
    priceModal.setContent(`
    <p>Car ${car.title} costs ${car.price}k$</p>
    `)
    priceModal.open()
  } else if(btnType === 'remove') {
    confirmModal.setContent(`
    <p>You deleting car ${car.title}</p>
    `)
    confirmModal.open()
  }
})