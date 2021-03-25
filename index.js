let map = new Map();
map.set(false, "boolean");
map.set("Moscow", "City");
map.set(123, "number");
map.set(true, "boolean");
map.set(654, "number");
for (let [key, value] of map) {
  console.log(`Ключ - ${key}, Значение - ${value}`);
}
