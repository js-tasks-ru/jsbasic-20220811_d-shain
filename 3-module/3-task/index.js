function camelize(str) {
  let arr = str.split('-');
      function toUpper(element, index, array) {
        if (index != 0) array[index] = element[0].toUpperCase() + element.slice(1);
      }
      arr.forEach(toUpper);
      let result = arr.join("");
      return result;// ваш код...
}
