//  转化map
const map = new Map([["key", "value"], [1, 0], ['k', 'val', 'k2', 'val2']])
const o = Object.fromEntries(map)
console.log(o); // { '1': 0, key: 'value', k: 'val' }

// 转化数组
const arr = [['foo', 'bar'], [12,53]];
const obj2 = Object.fromEntries(arr);
console.log(obj2); // { '12': 53, foo: 'bar' }

// 转化url中query参数
const params = 'name=zhangsan&age=19';
const searchParams = new URLSearchParams(params);
console.log(searchParams); // URLSearchParams { 'name' => 'zhangsan', 'age' => '19' }
const obj3 = Object.fromEntries(searchParams);
console.log(obj3); // { name: 'zhangsan', age: '19' }