// Fibonacci斐波那契数列: 0 1 1 2 3 5 8 13 21 34 55
// 一个Fibonacci数字是前两个Fibonacci数字之和，最前面的两个数字是0和1

var fibonaci = function(n) {
  return n < 2? n: fibonaci(n - 1) + fibonaci(n - 2);
};

// 打印前10个fibonacci数字
for (var i = 0; i < 10; i++) {
  console.log(fibonaci(i));
}

/* console output
D:\temp\node.exe 02_fibonacci.js
0
1
1
2
3
5
8
13
21
34
*/