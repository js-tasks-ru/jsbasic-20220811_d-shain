function highlight(table) {
  for (let tr of table.tBodies) {
    if (tr.lastElementChild.dataset.available == null) tr.hidden = true;
      else if (tr.lastElementChild.dataset.available == true) tr.classList.add('available');
        else tr.classList.add('unavailablee');
    if (tr.children[2] == 'm') tr.classList.add('male');
      else if (tr.children[2] == 'f') tr.classList.add('female');
    if (tr.children[1] < 18) tr.style = "text-decoration: line-through";
  }    
}
