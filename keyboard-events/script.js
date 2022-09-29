const key = document.querySelector('#key-press')

document.addEventListener('keydown', function (e) {
  key.innerHTML = e.key
  if (e.keyCode == 32) {
    key.innerHTML = "Spacebar"
  }
})