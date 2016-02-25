// 汉诺塔汉诺塔（又称河内塔）问题是源于印度一个古老传说的益智玩具。
// 大梵天创造世界的时候做了三根金刚石柱子，在一根柱子上从下往上
// 按照大小顺序摞着64片黄金圆盘。大梵天命令婆罗门把圆盘从下面开始
// 按大小顺序重新摆放在另一根柱子上。并且规定，在小圆盘上不能放大圆盘，
// 在三根柱子之间一次只能移动一个圆盘。

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
D:\temp>node.exe 01_tower_of_hanoi.js
move disc# 1 from A to C
move disc# 2 from A to B
move disc# 1 from C to B
move disc# 3 from A to C
move disc# 1 from B to A
move disc# 2 from B to C
move disc# 1 from A to C
*/