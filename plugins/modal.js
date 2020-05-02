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
  $modal = _createModal(options)

  return {
    open() {
      $modal.classList.add('open')
    },
    close() {
      $modal.classList.remove('open')
    },
    destroy() {}
  }
}