function getMinMax(str) {
  let arr = str.split(' ');
      let array = [];
      arr.forEach((element) => {
       // alert(Number(element))
        if (isNaN(Number(element)));
          else array.push(element);
      });
      let result = {
        min: Math.min(...array),
        max: Math.max(...array)
      };
      return result;
}
