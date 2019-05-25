//会溢出
//用的是字符串，链表
function LinkedNode(val) {
  this.val = val;
  this.next = null;

}
/**
 * 
 * @param {LinkedList} l1 
 * @param {LinkedList} l2 
 */
var addTwoNumbers = function(l1, l2){
  //每个链表的每一位
  let a = [], b = [],
   newL1 = l1,
   newL2 = l2;  /*引用赋值，内部修改会影响外部*/
  
  //倒着来 链表是单向的
  //使用数组的reverse()
  while( newL1){
    a.push(newL1.val)
    newL1 = newL1.next;
  }
  while( newL2) {
    b.push(newL2.val)
    newL2 = newL2.next;
  }
  a.reverse()
  b.reverse()
  let ans = []; //两位相加的结果
  let carry = 0; //是否进位
  while(a.length || b.length){
    let c = a.length ? a.shift() : 0;
    let d = b.length ? b.shift() : 0;

    let sum = c + d + carry;
    // 对十求余，将各位放入
    ans.push(sum % 10); 
    if( sum >= 10 ) {
      carry = 1;
    } else {
      carry = 0;
    }
  }
  //if carry为真则执行后面
  carry && (ans.push(carry));
  ans.reverse()
  //return ans.join('')
  //返回一个节点，只要头节点就行
  let ret = [];
  for(let i = 0, len = ans.length; i < len; i++){
    ret[i] = new LinkedNode(ans[i]);
  }
  for(let i = 0, len = ans.length; i < len - 1; i++){
    ret[i].next = ret[i+1];
  }
  //通过数组生成一个链表
  return ret[0];
}

// 链表的初始化
let a1 = new LinkedNode(1),
  a2 = new LinkedNode(2),
  a3 = new LinkedNode(3);
a1.next = a2
a2.next = a3

let b1 = new LinkedNode(4),
  b2 = new LinkedNode(5),
  b3 = new LinkedNode(6);
b1.next = b2
b2.next = b3

// console.log(addTwoNumbers(a1, b1));
let ret = addTwoNumbers(a1, b1);
while(ret) {
  console.log(ret.val)
  ret = ret.next
}