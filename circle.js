const circleArea = (radius) => {
  const pi = 3.14;
  const result = pi * (radius * radius);

  console.log(`Yarıçapı ${radius} olan dairenin alanı: ${result.toFixed(2)}`);
};

const circleCircumference = (radius) => {
  const pi = 3.14;
  const result = 2 * pi * radius;

  console.log(`Yarıçapı ${radius} olan dairenin çevresi: ${result.toFixed(2)}`);
};

module.exports = {
  circleArea,
  circleCircumference
}