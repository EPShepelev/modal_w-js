function _createModal(options) {
  const modal = document.createElement('div')
  modal.classList.add('ourmodal')
  modal.insertAdjacentHTML('afterbegin', `
<div class="modal-overlay">
      <div class="modal-window">
        <div class="modal-header">
          <span class="modal-title">Awesome Title</span>
          <span class="modal-close">&times;</span>
        </div>
        <div class="modal-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, libero?</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div class="modal-footer">
          <button>Accept</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
    `)
    document.body.appendChild(modal)
  return modal
}

$.modal = function(options) {
  const ANIMATION_SPEED = 300
  const $modal = _createModal(options)
  let closing = false

  return {
    open() {
      !closing && $modal.classList.add('open') //если не closing то добавляем класс, метод срабатывает
    },
    close() {
      closing = true
      $modal.classList.remove('open')
      $modal.classList.add('hiding')
      setTimeout(() => {
        $modal.classList.remove('hiding')
        closing = false
      }, ANIMATION_SPEED)
    },
    destroy() {}
  }
}