function combineWords(word1, word2) {
	return word1 + word2;
}
var result = combineWords('dog', 'house');
console.log(result);



function repeatPhrase(phrase, n) {
  if(n === 0){
    return;
  }
  console.log(phrase);
  n--;
  repeatPhrase(phrase, n);

}
repeatPhrase("Hello", 5);



function toTheNthPower(number, power) {
  if(power === 0){return 1;}
  if(power === 1){return number;}
  var result = number;
  for(var i = 1; i < power; i++ ){
    result *= number;
  }
  return result;
}

var result = toTheNthPower(4, 5);
console.log(result);



function areaOfACircle(radius) {
  PI = 3.14;
  return PI *( radius * radius);
}

var result = areaOfACircle(2);
console.log(result);




function pythagoreanTheorem(a, b) {
  return Math.sqrt(Math.pow(a, 2)+ Math.pow(b, 2));
}

var result = pythagoreanTheorem(3, 4);
console.log(result);


function isXEvenlyDivisibleByY(x, y) {
  return x % y === 0
}

var result = isXEvenlyDivisibleByY(99, 3);
console.log(result);


function countVowels(word) {
  count = 0;
  letterArr = word.split('');
  letterArr.forEach(function(l){
    if(l.match(/[aeiou]/i)){
      count += 1;
    }
  });
  return count;
}

var result = countVowels("stealing");
console.log(result);



function findWdi(arr){
  result = false;
  arr.forEach(function(ele){
    if(ele === 'wdi'){
      result = true;
    }
  })
  return result;
}



console.log(findWdi([9,'Bart Simpson', true, 'wdi']));
console.log(findWdi(['a','b','c']));





function printTriangle(length) {
  star = "*";
  for(var i = 0; i < length; i++){
    console.log(star);
    star += "*";
  }
}

printTriangle(3);



function printPyramid(length) {
  star = "";
  starArr = [];
  for(var i = 0; i < length; i++){
    for(var j = 0; j < length; j++){
      star += "* ";
    }
      star += "\n";
  }
  starArr = star.split("\n");
  starArr.pop();
  
  for(var k = 0; k < starArr.length; k++){
  	for(var l = k; l > 0; l--){
  		starArr[k] = starArr[k].replace('*','');

  		console.log();
  	}
  }

  return starArr.reverse().join("\n");

}

console.log(printPyramid(8));
