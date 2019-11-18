var items = [1, 2, 3, 4, 5, 6]
var results = []

function async(arg, callback) {
  console.log('参数为' + arg +'，1s返回的结果');
  setTimeout(function () { callback(arg * 2)}, 1000)
}

function final(value) {
  console.log('完成', value);
}

// function series(item) {
//   if(item) {
//     async(item, function(result){
//       results.push(result)
//       return series(items.shift())
//     })
//   } else {
//     return final(results[results.length - 1])
//   }
// }

// series(items.shift())

items.forEach(function(item) {
  async(item, function(result){
    results.push(result);
    if(results.length === items.length) {
      final(results[results.length - 1]);
    }
  })
});