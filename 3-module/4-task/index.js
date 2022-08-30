function showSalary(users, age) {
  let someUsers = users.filter(item => item.age <= age);
  let someUsersCut = someUsers.map(item => (item.name + ', ' + item.balance));
  let string = '';
  someUsersCut.forEach((item, index, array) => {
    string = string + item;
    if (index < array.length - 1) string = string + '\n';
  })
  return string;
}
