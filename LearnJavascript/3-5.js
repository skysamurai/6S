//Что не так в нижеприведённом тесте функции pow?

it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

// Тест не разбит  и мы не узнаем где была ошибка, и лучше делать с конкретными значениями.

describe("Возводит x в степень n", function() {
  it("2 в степени 3 будет 8", function() {
    assert.equal(pow(2, 3), 8);
  });

  it("3 в степени 2 будет 9", function() {
    assert.equal(pow(3, 2), 9);
  });

  it("-2 в степени 3 будет 8", function() {
    assert.equal(pow(-2, 3), -8);
  });
});