function hideSelf() {
  document.querySelector('.hide-self-button').addEventListener('click', function hideSelfButton() {
    this.hidden = true;
    console.log(this);
  })
}
