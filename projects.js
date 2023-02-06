//--------Problem 1--------//
// Let’s play a mind game.
// A function takes value into it. That value shows the output of addition, subtraction, multiplication, division.


function mindGame(value) {
  const multiplies = value * 3;
  const plus = multiplies + 10;
  const divide = plus / 2;
  const minus = divide - 5;
  return minus;
 }

 const solved1 = mindGame(5);
 console.log(solved1);


//---------------Problem 2-----------//
// Finding even or odd.
// A function is shown as a string. Then even odd numbers are shown with some conditions.

function evenOdd(stringName) {
  const number = stringName.length;
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
  }
  const solved2 = evenOdd("chatgpt");
  console.log(solved2);


// --------Problem 3----- //
// Is Less or Greater than seven.
// The  is shown with condition in value the function.


function isLGSeven(value) {
  if (value < 7) {
    return value - 7;
  }
  else {
    return value * 2;
  }
  }
  const solved3 = isLGSeven(15);
  console.log(solved3);



//---------problem 4-------//

// Finding Bad data.
// The array is declared in the function and the bad data is found by running forloop in it.


const array = [ -4, -9, -5, -33, -55 ];

function findingBadData(array) {
    let positive = [];
    let negative = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
      positive.push(array[i]);
    }   else {
      negative.push(array[i]);
    }
    }
    return positive, negative;
    }

    const solved4 = findingBadData(array);
    const totalOddNumber = solved4.length;
    console.log(totalOddNumber);



// ---- Problem 5 ----//

//Convert my friends gems into diamond.
// First take the 3 parameters  then multiply them by their values, sum    each product, condition the total product and get the output.


function gemsToDiamond(a, b, c) {
    let total = 0;
    const friend1 = a * 21;
    const friend2 = b * 32;
    const friend3 = c * 43;
    const totalGems = friend1 + friend2 + friend3;
    total = total + totalGems;
    if (total > 2000) {
      return total - 2000;
    } else {
      return total;
    }
    }
    const solved5 = gemsToDiamond(20, 200, 50);
    console.log(solved5);
  