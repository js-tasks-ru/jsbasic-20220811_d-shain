function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  ul.className = 'list';
  document.body.append(ul);
  let list = document.querySelector('.list');
  for (let item of friends) {
    let li = document.createElement('LI');
    li.innerHTML = item.firstName + ' ' + item.lastName;
    list.append(li);
  }
  return list;
  }// ваш код...
