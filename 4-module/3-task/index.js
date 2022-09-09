function highlight(table) {
  for (let tr of table.children[1].children) {
    if (tr.lastElementChild.dataset.available == null) tr.hidden = true;
    if (tr.lastElementChild.dataset.available == 'true') tr.classList.add('available');
    if (tr.lastElementChild.dataset.available == 'false') tr.classList.add('unavailablee');
    if (tr.children[2].innerHTML == 'm') tr.classList.add('male');
      else if (tr.children[2].innerHTML == 'f') tr.classList.add('female');
    if (Number(tr.children[1].innerHTML) < 18) {
            tr.style = "text-decoration: line-through";
    }
  }    
}
