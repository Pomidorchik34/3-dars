// 5-OY 3-DARS
let res;
// 1

// 2
// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "John", age: 22, score: 98, status: "inactive" },
// ];
// let max = 0;
// let result = students.forEach((value, index) => {
//   if (max < value.score) {
//     max = index;
//   }
// });
// console.log(students[max]);

// 3
// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Andrew", age: 23, score: 88, status: "active" },
// ];
// let arr = [];
// for (const i of students) {
//   arr.push(i.name);
// }
// arr.sort();
// console.log(arr);

// 4

// 5
// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "John", age: 22, score: 92, status: "inactive" },
//   { name: "John", age: 23, score: 88, status: "active" },
// ];
// res = students.find((value) => value.name == "John");
// console.log(res);

// 6
// const students = [
//   { name: "Alice", age: 20, score: 80, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Charlie", age: 23, score: 85, status: "active" },
// ];
// res = students.findIndex((value) => value.score == 85);
// console.log(res);

// 7
// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Charlie", age: 23, score: 88, status: "active" },
// ];
// res = students.filter((value) => {
//   return value.status == "active";
// });
// console.log(res);

// 8
// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Charlie", age: 18, score: 88, status: "active" },
// ];
// res = students.every((value) => {
//   return value.age >= 18;
// });
// console.log(res);

// 9
// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Charlie", age: 23, score: 88, status: "active" },
// ];
// res = students.some((value) => value.age > 90);
// console.log(res);

// 10

// 11

// 12
// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
// ];

// res = students.map((vlaue) => {
//   return vlaue.name.toUpperCase();
// });
// console.log(res);

// 13

// 14
// const students = [{ name: "Alice", age: 20, score: 85, status: "active" }];
// res = Object.keys(students[0]);
// console.log(res);

// 15
// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
// ];
// const newStudent = { name: "Charlie", age: 23, score: 88, status: "active" };
// students.push(newStudent);
// console.log(students);

// 16
// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Charlie", age: 23, score: 88, status: "active" },
// ];
// let name = "Charlie";
// res = students.findIndex((value) => value.name == name);
// delete students[res];
// console.log(students);

// 17
// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Charlie", age: 19, score: 88, status: "active" },
// ];
// res = students.every((value) => {
//   return value.age > 20 && value.age > 20;
// });
// console.log(res);

// 18

// 19

// 20
// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Charlie", age: 21, score: 88, status: "active" },
// ];
// let min = 0;
// res = students.forEach((value, index) => {
//   if (value.age < min) {
//     min = index;
//   }
// });
// console.log(students[min]);

// 1
// let str = `hello world`;
// console.log(str.substring(0, 5));
