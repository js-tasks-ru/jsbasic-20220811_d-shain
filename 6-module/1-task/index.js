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
    this.data = rows;
    this.render();
  }

  render() {
    this.elem = document.createElement('TABLE');
    let thead = document.createElement('THEAD');
    let tbody = document.createElement('TBODY');
    
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Имя";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Возраст";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Зарплата";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "Город";
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = "";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    thead.appendChild(row_1);

    for (let i = 0; i < this.data.length; i++) {
      let tempRow = document.createElement('tr');
      for (let key in this.data[i]) {
        let tempCell = document.createElement('td');
        tempCell.innerHTML = this.data[i][key];
        tempRow.appendChild(tempCell);
      }
      let button = document.createElement('button');
      button.innerHTML = 'X';
      button.setAttribute('data-delete-id', true);
      tempRow.appendChild(button);
      tbody.appendChild(tempRow);
    }

    this.elem.appendChild(thead);
    this.elem.appendChild(tbody);

    this.elem.addEventListener('click', this.onClick);
  }

  onClick = (event) => {
    if (event.target.closest('button')) {
    let deletedItem = event.target.closest('tr');
    deletedItem.remove();
    }
  }
  /*get elem() {
    return this.elem;
  }*/
}
