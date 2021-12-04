function toggleText() {
  let value = 0;
  document.querySelector('.toggle-text-button').addEventListener('click', () => {
    if (value == 0) {
      document.querySelector('#text').hidden = true;
      value = 1;
    } else {
      document.querySelector('#text').hidden = false;
      value = 0;
    }
  })
}
