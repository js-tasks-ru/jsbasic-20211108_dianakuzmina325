function highlight(table) {
  let tHead = table.querySelectorAll('thead > tr > td');
  let tBody = table.querySelector('tbody');

  for (let td of tHead) {
    if (td.innerHTML == 'Gender') {
      let tdGenderIndex = td.cellIndex;
      for (let i = 1; i < table.rows.length; i++) {
        let tdCurrent = table.rows[i].cells[tdGenderIndex];
        if (tdCurrent.innerHTML == "m") {
          tdCurrent.parentElement.classList.add('male');
        } else if (tdCurrent.innerHTML == "f") {
          tdCurrent.parentElement.classList.add('female');
        }
      }
    }
    if (td.innerHTML == 'Age') {
      let tdAgeIndex = td.cellIndex;
      for (let i = 1; i < table.rows.length; i++) {
        let tdCurrent = table.rows[i].cells[tdAgeIndex];
        if (tdCurrent.innerHTML < 18) {
          tdCurrent.parentElement.style.textDecoration = 'line-through';
        }
      }
    }
  }

  for (let row of tBody.rows) {
    let rowStatus = row.lastElementChild;
    let result = rowStatus.getAttribute('data-available');
    for (let td of row.children) {
      if (rowStatus.hasAttribute('data-available')) {
        if (result == 'true') {
          td.parentElement.classList.add('available');
        } else {
          td.parentElement.classList.add('unavailable');
        }
      } else {
        td.parentElement.setAttribute('hidden', 'hidden');
      }
    }
  }
}
