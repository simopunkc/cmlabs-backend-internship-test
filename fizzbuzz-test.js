class ChallTest {
  checkIfFizz(n) {
    return n % 3 == 0;
  }

  checkIfBuzz(n) {
    return n % 5 == 0;
  }

  checkIfFizzBuzzOrNot(n) {
    const tempFizz = this.checkIfFizz(n);
    const tempBuzz = this.checkIfBuzz(n);
    if (tempFizz && tempBuzz) {
      return 'FizzBuzz';
    }
    if (tempFizz) {
      return 'Fizz';
    }
    if (tempBuzz) {
      return 'Buzz';
    }
    return '';
  }

  fizzBuzz(n) {
    let arr = new Map();
    for (let i = 1; i <= n; i++) {
      arr[i] = this.checkIfFizzBuzzOrNot(i);
    }
    return arr;
  }
}

describe("Unit Test", () => {
  const obj = new ChallTest();
  const result = obj.fizzBuzz(100);

  it("Fizz", () => {
    const expected = 'Fizz';
    const arr = [3, 6, 9, 12, 18, 21, 24, 27, 33, 36, 39, 42, 48];
    arr.forEach((i) => {
      const checkIfEqual = result[i] == expected;
      if (!checkIfEqual) {
        console.log(`(Fizz ${i})`, '=', result[i]);
      }
      expect(checkIfEqual).toEqual(true);
    });
  });

  it("Buzz", () => {
    const expected = 'Buzz';
    const arr = [10, 20, 25, 35, 40, 50, 100];
    arr.forEach((i) => {
      const checkIfEqual = result[i] == expected;
      if (!checkIfEqual) {
        console.log(`(Buzz ${i})`, '=', result[i]);
      }
      expect(checkIfEqual).toEqual(true);
    });
  });

  it("FizzBuzz", () => {
    const expected = 'FizzBuzz';
    const arr = [15, 30, 45];
    arr.forEach((i) => {
      const checkIfEqual = result[i] == expected;
      if (!checkIfEqual) {
        console.log(`(FizzBuzz ${i})`, '=', result[i]);
      }
      expect(checkIfEqual).toEqual(true);
    });
  });

  it("not FizzBuzz", () => {
    const expected = '';
    const arr = [1, 2, 4, 7, 8, 11, 13, 14, 16, 17, 19, 22, 23, 26, 28, 29, 31, 32, 34, 37, 38, 41, 43, 44, 46, 47, 49];
    arr.forEach((i) => {
      const checkIfEqual = result[i] == expected;
      if (!checkIfEqual) {
        console.log(`(not FizzBuzz ${i})`, '=', result[i]);
      }
      expect(checkIfEqual).toEqual(true);
    });
  });
});