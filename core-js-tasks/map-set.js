const map = new Map();
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

map.set(obj1, 'obj');
map.set(obj2, 'obj2').set(obj3, 'obj3');

console.log(map);
console.log(map.size);
console.log(map.keys());
for (obj of map.keys()) {
    console.log(obj);
}
for (value of map.values()) {
    console.log(value)
}
for (entries of map) {
    console.log(entries)
}
map.forEach((item, index) => console.log(index, item));
for (entries of map.entries()) {
    console.log(entries[0], entries[1]);
}
console.log(map.get(obj2));
console.log(map.has(obj3));
map.delete(obj2);
console.log(map.has(obj2));
map.clear();
console.log(map);

const set = new Set([obj1, obj2, obj3]);
console.log(set);
for (value of set) {
    console.log(value);
}
set.delete(obj1);
console.log(set)
set.add(obj3).add(obj3).add(obj3).add(obj1);
console.log(set);