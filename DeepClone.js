function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  } else if (obj === null) {
    return null;
  } else if (typeof obj === 'object') {
    let clone = {};
    const keys = Object.keys(obj);
    for (let key of keys) {
      if (typeof obj[key] === 'object') {
        clone[key] = deepClone(obj[key]);
      } else {
        clone[key] = obj[key];
      }
    }
    return clone;
  } else {
    return obj;
  }
}

var arr = ['old', 1, true, ['old1', 'old2'], { old: 1 }]

const arrClone = deepClone(arr)

arr[3][0] = 'hello';

console.log(arrClone)


// typeof 'object'  - null, Array, object

