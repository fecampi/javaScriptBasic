//Values
function keyValue(type) {
  const keys = {
    0: "key 0",
    1: "key 1",
    2: "key 2",
    3: "key 3",
    4: "key 4",
    5: "key 5",
    6: "key 6",
    default: "default",
  };
  keys[type] || keys["default"];
}
const value = keyValue(0);
console.log("value: " + value);

//Function
function keyPress(type) {
  const keys = {
    0: () => console.log("key 0"),
    1: () => console.log("key 1"),
    2: () => console.log("key 2"),
    3: () => console.log("key 3"),
    4: () => console.log("key 4"),
    5: () => console.log("key 5"),
    6: () => console.log("key 6"),
    default: () => {
      return;
    },
  };
  (keys[type] || keys["default"])();
}
keyPress(0);
