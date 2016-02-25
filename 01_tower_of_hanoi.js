//汉诺塔

//把disc个圆盘从a通过b移动到c
var hanoi = function (disc, a, b, c) {
  if (disc > 0) {
    hanoi(disc-1, a, c, b); //把n-1个圆盘从a通过c移动到b
    console.log("move disc# "+ disc +" from "+ a +" to "+ c); //把第n个圆盘从a移动到c
    hanoi(disc-1, b, a, c); //把n-1个圆盘从b通过a移动到c
  }
}

hanoi(3,"A","B","C");

/* console output
D:\temp>node haha.js
move disc# 1 from A to C
move disc# 2 from A to B
move disc# 1 from C to B
move disc# 3 from A to C
move disc# 1 from B to A
move disc# 2 from B to C
move disc# 1 from A to C
*/