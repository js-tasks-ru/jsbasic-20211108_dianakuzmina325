/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {

  constructor(rows) {

  }

  createTable() {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    document.body.appendChild(table);

    let head = document.createElement('tr');
    let thName = document.createElement('th');
    thName.innerHTML = "Name";

    let thAge = document.createElement('th');
    thAge.innerHTML = "Age";

    let thSalary = document.createElement('th');
    thSalary.innerHTML = "Salary";

    let thCity = document.createElement('th');
    thCity.innerHTML = "City";

    head.appendChild(heading_1);
    head.appendChild(heading_2);
    head.appendChild(heading_3);
    head.appendChild(heading_4);
    thead.appendChild(head);

    for (let i = 0; i < rows.length; i++) {

      let tr = document.createElement('tr');
      tbody.appendChild(tr);

      let name = document.createElement('td');
      name.innerHTML = rows[i].name;
      tr.appendChild(name);

      let age = document.createElement('td');
      age.innerHTML = rows[i].age;
      tr.appendChild(age);

      let salary = document.createElement('td');
      salary.innerHTML = rows[i].salary;
      tr.appendChild(salary);

      let city = document.createElement('td');
      city.innerHTML = rows[i].city;
      tr.appendChild(city);

      let buttonRemove = document.createElement('td');
      buttonRemove.innerHTML = '<button>X</button>';
      tr.appendChild(buttonRemove);

    }
  }

  deleterow() {
    let trAll = tbody.querySelectorAll('tr');
    for (let tr of trAll) {
      tr.lastElementChild.onclick = () => tr.remove();
    }
  }

}
