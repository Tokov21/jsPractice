function getQuadraticRoots(a, b, c) {

  // Через тернарый оператор
  // const d = Number(b) ** 2 - 4 * Number(a) * Number(c);

  // const x1 = (-b + Math.sqrt(d)) / (2 * a);
  // const x2 = (-b - Math.sqrt(d)) / (2 * a);

  // const x = -b / (2 * a);

  // return isNaN(a) || isNaN(b) || isNaN(c)
  //   ? NaN
  //   : d > 0
  //   ? { x1, x2 }
  //   : d === 0
  //   ? x
  //   : null;

  // Через if
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return NaN;
  }

  const d = Number(b) ** 2 - 4 * Number(a) * Number(c);

  if (d > 0) {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);

    return { x1, x2 };
  }

  if (d === 0) {
    const x = -b / (2 * a);

    return x;
  }

  return null;
}
