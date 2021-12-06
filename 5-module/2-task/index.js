function toggleText() {
  let textHidden = document.querySelector('#text');
  document.querySelector('.toggle-text-button').addEventListener('click', () => {
    if (textHidden.hidden == false) {
      textHidden.hidden = true;
    } else {
      textHidden.hidden = false;
    }
  })
}
