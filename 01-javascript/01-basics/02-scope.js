let name = "Amit";

function sayHello() {
  let name = "Stranger";
  console.log(name); // It will print "Stranger" -- Casue it will give first priority to its function' variable not gloabl
}

sayHello();
console.log(name); // It will print "Amit" as this log is outside of the function

function outer() {
  let secret = "I am outer";

  function inner() {
    console.log(secret); // It will print "I am outer" -- casue inner function doesn't have var called secret so it will look out to the outer function
  }

  inner();
}

outer();
console.log(secret); // it will obviously print the "i am outer"

// After runninng the code i saw the output and i was wrong, I understood why I got reference error, Casue that log is outside of the function and the secret is inside the outer funtion, hence it won't have access to the secret var
