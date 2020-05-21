const cars = [
  {id: 1, title: 'Dodge', price: 25, img: 'https://avatars.mds.yandex.net/get-pdb/1615223/1e089d46-25b9-48b6-a522-c7d5b9716b34/s1200?webp=false'},
  {id: 2, title: 'Aston Martin', price: 110, img: 'https://avatars.mds.yandex.net/get-pdb/1615223/1e089d46-25b9-48b6-a522-c7d5b9716b34/s1200?webp=false'},
  {id: 3, title: 'Jaguar', price: 80, img: 'https://avatars.mds.yandex.net/get-pdb/1615223/1e089d46-25b9-48b6-a522-c7d5b9716b34/s1200?webp=false'}
]

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