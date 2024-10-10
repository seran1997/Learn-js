//Return 3*x arr items
const arr = [1, 2, 3, 4, 5, 6]
const newArr = arr.map(function(item) {
    return 3*item;
});
console.log(newArr);
//Say Hello to everyone
const arr = ["Дима", "Ваня", "Олег"]

arr.forEach(function(i) {console.log("Привет, " + i + "!")}); 