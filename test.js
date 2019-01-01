const items = [1,2,3,4,5,6,7,8,9,10]
const bigArr = []
let minArr = []
/* 一页最大的数量 */
const maxNum = 4
items.forEach(item => {
  if(minArr.length === 0) {
    bigArr.push(minArr)
  }
  minArr.push(item)
  if(minArr.length === maxNum) {
    minArr = []
  }
})
console.log(bigArr)
console.log('congratulation complate this page segmentation!!!')
console.log('---------------------')

/* 以下为评分 */
let score = (5 * Math.random()).toFixed(1)
const arr = []
const onNum = Math.floor(score)
for (let i = 0; i < onNum; i++) {
  arr.push('on')
}
if(score - onNum > 0.5) {
  arr.push('half')
  for(let i = 0; i < (5 - 1 - onNum); i++) {
    arr.push('off')
  }
}
else {
  for (let i = 0; i < (5 - onNum); i++) {
    arr.push('off')
  }
}
console.log(score)
console.log(arr)