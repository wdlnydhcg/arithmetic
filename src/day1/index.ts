/*
 * @Author: MrAlenZhong
 * @Date: 2022-03-28 19:32:58
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-03-28 21:41:28
 * @Description: 
 * 
整数的 数组形式  num 是按照从左到右的顺序表示其数字的数组。

例如，对于 num = 1321 ，数组形式是 [1,3,2,1] 。
给定 num ，整数的 数组形式 ，和整数 k ，返回 整数 num + k 的 数组形式 。

示例 1：

输入：num = [1,2,0,0], k = 34
输出：[1,2,3,4]
解释：1200 + 34 = 1234
示例 2：

输入：num = [2,7,4], k = 181
输出：[4,5,5]
解释：274 + 181 = 455
示例 3：

输入：num = [2,1,5], k = 806
输出：[1,0,2,1]
解释：215 + 806 = 1021

链接：https://leetcode-cn.com/problems/add-to-array-form-of-integer
 */

function addToArrayForm(num: number[], k: number): number[]{
  let numListSumStr: string = "";
  for (let i = 0; i < num.length; i++) {
    numListSumStr += String(num[i]);
  }
  return add(numListSumStr, String(k));
};

function add(a:string, b:string):number[] {
  //取两个数字的最大长度
  let maxLength = Math.max(a.length, b.length);
  //用0去补齐长度
  a = a.padStart(maxLength, "0"); //"0009007199254740991"
  b = b.padStart(maxLength, "0"); //"1234567899999999999"
  //定义加法过程中需要用到的变量
  let t = 0;
  let f = 0; //"进位"
  let sum = "";
  for (let i = maxLength - 1; i >= 0; i--) {
    t = parseInt(a[i]) + parseInt(b[i]) + f;
    f = Math.floor(t / 10);
    sum = (t % 10) + sum;
  }
  if (f == 1) {
    sum = "1" + sum;
  }
  return sum.split("").map((item:any) => item * 1);
}

// console.log(addToArrayForm([1, 2, 0, 0], 34));
// console.log(addToArrayForm([2, 7, 4], 181));
// console.log(addToArrayForm([2, 1, 5], 806));
console.log(
  addToArrayForm(
    [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
    516
  )
);

