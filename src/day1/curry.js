//方法一
function curry (func) {
  return function curried (...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

function sum (a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6，仍然可以被正常调用
console.log(curriedSum(1)(2, 3)); // 6，对第一个参数的柯里化
console.log(curriedSum(1)(2)(3)); // 6，全柯里化

/*******************方法二*******************************/
function add(){
  //将传入的不定参数转为数组对象
  var _args = Array.prototype.slice.call(arguments);
  var _adder = function(){
    _args.push(...arguments)
    return _adder
  }
  //toString隐形转换的特性
  _adder.toString = function(){
    return _args.reduce(function(a,b){
      return a+b
    },0)
  }
  return _adder
}
let a = add(1,2,3);
let b = add(1)(2)(3)
let c = add(1, 2, 3)
console.log(a);
console.log(b);
console.log(c);
/**************************************************/
//b站技术蛋 https://www.bilibili.com/video/BV1RA411E7aN?spm_id_from=333.337.search-card.all.click

/**
 * 柯里化最常用的场景是参数复用
 */

//step-1
function uri (protocol, hostname, pathname){
  return `${protocol}${hostname}${pathname}`
}

const uri1 = uri('https://','www.danlaoshi.con','/dir')
console.log(uri1);
//step-2
function uri_curring(protocol){
  return function(hostname,pathname){
    return `${protocol}${hostname}${pathname}`
  }
}

//这里就复用了uri这个函数的第一个参数https://
const uri_https = uri_curring('https://');
const uri2 = uri_https('www.danlaoshi.con','/dir2')
const uri3 = uri_https('www.danlaoshi.con', '/dir3')
const uri4 = uri_https('www.danlaoshi.con', '/dir4')
console.log(uri2,uri3,uri4)
//setp-3  柯里化的另一个使用场景，浏览器兼容性
//如，attachEvent和addEventListner
//attachEvent是IE的方法
//addEventListner是现代浏览器的方法
const whichEvent = (function(){
  if(window.addEventListener){
    return function (element,type,listener,useCapture){
      element.addEventListener(type,function(e){
        listener.call(element,e);
      },useCapture);
    }
  }else if(window.attachEvent){
    return function (element, type,handler){
      element.attachEvent('on'+type,function(e){
        handler.call(element,e);
      })
    }
  }
})()
/**
 * step-3
 * //方法三
 */
function addEgg(){
  let args = Array.prototype.slice.call(arguments)
  let inner = function(){
    args.push(...arguments);
    return inner;
  }

  inner.toString = function(){
    return args.reduce(function(prev,cur){
      return prev + cur;
    });
  }
  return inner
}
const result = addEgg(1)(2)(3)(4,5)
console.log(result);
