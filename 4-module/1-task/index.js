function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  ul.className = 'list';
  for (let item of friends) {
    let li = document.createElement('LI');
    li.innerHTML = item.firstName + ' ' + item.lastName;
    ul.append(li);
  }
  return ul;
  }// ваш код...
