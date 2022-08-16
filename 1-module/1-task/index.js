function factorial(n) {
  let f = n;
  while (n > 1) {
    n--;
    f = f * n;
  }
  if (f === 0) return 1; 
    else return f;
  // ваш код...
}
