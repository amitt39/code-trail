// // string
// const name: string = "Amit"
// // number
// const age: number = 22;
// // boolean
// const isMale:boolean = true;
// // null
// const student: null = null;
// // undefined
// const isMarrid: undefined = undefined;

// const userNames: string[] = ['a', 'b', 'c']
// const userNum: Array<number> = [1, 2, 3]
// const tuple: [string, number, boolean] = ['a', 1, false]

// export { };

// const enum direction {
//   Up,Down
// }
// const move:direction = direction.Up

// enum ApplicationStatus {
//   Applied, Interviewing, Rejected
// }

// const myStatus: ApplicationStatus = ApplicationStatus.Interviewing
// console.log(myStatus);

// const enum ExpenseType {
//   Shopping, Food, Health, Travel
// }

// const myExpesne: ExpenseType = ExpenseType.Shopping
// console.log(myExpesne);

// let value: any = 55;

// value = 'ad'
// value = true

// value.ad().ane();

// const str: unknown = 'Hello'
// if (typeof str === "string") {
//  const upper = str.toUpperCase()
//  console.log(upper);
// }

// const username = "Amit" as string
// console.log(typeof username);

// const surname = "sonagra" as const
// console.log(typeof surname);

// let age: number | string  = "amit"
// age = 22
// // age = true

// let data: string | null = '';
// data = "ahvsdj"
// data = true

// type A = {username: string}
// type B = {age: number}

// type C = A & B;

// const user: C = { username:"Amit", age: 22 }

// type status =  "Offered" | "Rejected"

// const emp1: status = "Offered"
// console.log(emp1);

// interface Product {
//  readonly id: number;
//   name: string;
//   price: number;
//   inStock: boolean;
//   description?: string
//   discount?: number
// }

// const product1: Product = {
//   id: 1,
//   name: "phone",
//   price: 999,
//   inStock: true,
// }
// console.log(product1.id);

// const product2: Product = {
//   id: 1,
//   name: "phone",
//   price: 999,
//   inStock: true,
//   description: "hisd",
//   discount: 10
// }

// product1.id = 111
// console.log(product1.id);

// interface ProductRatings  {
//   [key: string]: number;
// }

// const products: ProductRatings = {
//   p1: 4,
//   p2: 1,
//   3: "good"
// }

// interface BaseProduct {
//   id: number;
//   name: string;
// }

// interface PhysicalProduct extends BaseProduct {
//   weight: number;
//   dimension: string;
// }

// const Product: PhysicalProduct = {
//   id: 1,
//   name: "p1",
//   weight: 5,
//   dimension: "sfd",
// }

// interface Product {
//   id: number;
// }
// interface Product {
//   name: string;
// }

// const p1: Product = {
//   id: 3,
//   name:"sdvs"
// }

// type Product = {
//   id: number;
// }
// type Product = {
//   name: string;
// }

// const p1: Product = {
//   id: 32,
// }

// type userId = number;
// type Status = "active" | "inactive" | "pending"
// type Coordinate ={x: number, y: number}

// const id: userId = 5;
// const status: Status = 'pending';
// const coords: Coordinate = {x: 5, y: 6}
