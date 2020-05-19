function _createModal(options) {
  const DEFAULT_WIDTH = '600px'
  const modal = document.createElement('div')
  modal.classList.add('ourmodal')
  modal.insertAdjacentHTML('afterbegin', `
<div class="modal-overlay" data-close="true">
      <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}">
        <div class="modal-header">
          <span class="modal-title">${options.title || 'Default title'}</span>
          ${options.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
        </div>
        <div class="modal-body">
          ${options.content || ''}
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
  let destroyed = false
  const modal = {
    open() {
      if (destroyed) {
        return console.log('Modal is destroyed')
      }
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
  }
  const listener = event => {
    if (event.target.dataset.close){
    modal.close()
  }
}
  $modal.addEventListener('click', listener)
  return Object.assign(modal, {
    destroy() {
      $modal.parentNode.removeChild($modal)
      $modal.removeEventListener('click', listener)
      destroyed = true
    }
  })
}