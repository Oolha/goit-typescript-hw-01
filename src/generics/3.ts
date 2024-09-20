function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedObject = merge({ name: "Olha" }, { age: 20 });
console.log(mergedObject);
