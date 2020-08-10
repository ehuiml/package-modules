function Stack() {
  this.items = [];
  Stack.prototype.push = function (ele) {
    this.items.push(ele)
  }
  Stack.prototype.pop = function (ele) {
    return this.items.pop()
  }
  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1]
  }
  Stack.prototype.isEmpty = function () {
    return this.items.length == 0;
  }
  Stack.prototype.size = function () {
    return this.items.length
  }
  Stack.prototype.toString = function () {// 20 10 12 8 7
    var resultString = '';
    for (var i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + ' '
    }
    return resultString
  }
}

// var s = new Stack();
// s.push(10)
// s.push(20)
// s.push(30)
// s.push(40)
// s.push(100)
// console.log(s);  

// s.pop()
// s.pop()
// console.log(s);

// console.log(s.peek());

// console.log(s.isEmpty());

// console.log(s.size());

function dec2bin(decNumber) {
  // 1. 定义栈对象
  var stack = new Stack();
  // 2. 循环操作
  while (decNumber > 0) {
    // 2.1 获取余数,并且放入数组中
    stack.push(decNumber % 2);
    // 2.2 获取整数后的结果, 作为下一次运行的数字
    decNumber = Math.floor(decNumber / 2);
  }
  // 3. 从栈中去除0和1
  var binaryString = "";
  while (!stack.isEmpty()) {
    binaryString += stack.pop();
  }
  return binaryString;
}

console.log(dec2bin(1));
console.log(dec2bin(2));
console.log(dec2bin(3));
console.log(dec2bin(4));
console.log(dec2bin(8));
console.log(dec2bin(10));
console.log(dec2bin(100));