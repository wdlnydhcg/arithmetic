/*
 * @Author: MrAlenZhong
 * @Date: 2022-03-30 21:02:23
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-04-01 17:12:52
 * @Description: Promise.allSettled的实现
 */

function allSettled(promiseList){
  if(promiseList.length === 0) return Promise.resolve([]);
  
  const _promises = promiseList.map(item =>  item instanceof Promise ? item : Promise.resolve(item)
  );
  return new Promise((resolve,reject) => {
    let result = [];
    
    _promises.forEach((promise,index) => {
      promise.then((value) => {
        result[index] = {
          status:'fulfilled',
          value
        }
        if (index === _promises.length - 1) {
          resolve(result)
        }
      },(reason)=>{
        result[index] = {
          status: 'rejected',
          reason
        }
        if (index === _promises.length - 1) {
          resolve(result)
        }
      })
    })
  })
}

let promiseList = [1,3,new Promise(()=>{
  setTimeout(() => {
    console.log(3);
  }, 1000);
})]
allSettled(promiseList)



/***********************************/

function allSettled (promises) {
  if (promises.length === 0) return Promise.resolve([])

  const _promises = promises.map(
    item => item instanceof Promise ? item : Promise.resolve(item)
  )

  return new Promise((resolve, reject) => {
    const result = []

    _promises.forEach((promise, index) => {
      promise.then((value) => {
        result[index] = {
          status: 'fulfilled',
          value
        }
        if (index === _promises.length - 1) {
          resolve(result)
        }

      }, (reason) => {
        result[index] = {
          status: 'rejected',
          reason
        }
        if (index === _promises.length - 1) {
          resolve(result)
        }
      })
    })
  })
}
