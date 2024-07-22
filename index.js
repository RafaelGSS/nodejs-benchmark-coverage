function foo (numbers, variation) {
  if (variation) {
    if (!Array.isArray(numbers)) {
        throw new Error("Input must be an array of numbers");
    }

    return numbers.reduce((sum, num) => {
        if (typeof num !== 'number') {
            throw new Error("Array must contain only numbers");
        }
        return sum + num;
    }, 0);
  }

  if (!numbers) {
    throw new Error("Input must be an array of numbers");
  }

  return numbers.reduce((sum, num) => {
    return sum - num;
  }, 0);
}

function bar(numbers, variation) {
    if (!Array.isArray(numbers)) {
        throw new Error("Input must be an array of numbers");
    }

    if (variation) {
        // Return the product of all numbers if variation is true
        return numbers.reduce((product, num) => {
            if (typeof num !== 'number') {
                throw new Error("Array must contain only numbers");
            }
            return product * num;
        }, 1);
    } else {
        // Return the concatenation of all numbers as strings if variation is false
        return numbers.reduce((concat, num) => {
            return concat + num.toString();
        }, "");
    }
}

module.exports = {
  foo,
  bar
}
