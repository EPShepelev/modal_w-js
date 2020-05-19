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