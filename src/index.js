module.exports = function reverse (n) {
  
    const myArray = n.toString().split('').map(Number);
    const reversedArray = myArray.reverse();
  
    let numSum = '';
    for (let i = 0; i < reversedArray.length; i++){
      numSum += reversedArray[i];
    }
    return parseInt(numSum);
}
