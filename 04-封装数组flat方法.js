// 要求:扁平化
// 升序
// 不重复
let arr = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, 14]]], 10
]
let result = [];
flat(arr);
function flat(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
      if (result.indexOf(arr[i]) == -1) {  // 往新数组中添加该元素, 前提是新数组不存在这个元素,相当于去重了
        result.push(arr[i]);
      }
    } else {
      flat(arr[i])   // 如果数组中的该元素为数组元素的话,调用自身递归去扁平化
    }
  }
}
console.log(result);   // [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 10] 没有排序


let arr = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, 14]]], 10
]
let result = [];
let json = {};
flat(arr);

function flat(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
      if (!json[arr[i]]) {
        result.push(arr[i]);
        json[arr[i]] = true;
      }
    } else {
      flat(arr[i])
    }
  }
}
// 然后可以排序
// result.sort((a, b)=> a-b)
// 可以用冒泡排序
// 手写排序  也可以用sort
for (let i = 1; i < result.length; i++) {
  for (let j = i; j > 0; j--) {
    if (result[j] < result[j - 1]) {
      //这里可以用 解构赋值或者声明一个中间变量temp
      result[j] += result[j - 1];
      result[j - 1] = result[j] - result[j - 1];
      result[j] -= result[j - 1];
    }
  }
}
console.log(result);