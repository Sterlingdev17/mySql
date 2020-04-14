// connection.query("SELECT * FROM roles", function (err, res) {
//     if (err) throw err;
//     const roles = res;
//     // console.log(roles)
//     const choices = roles.map(({ id, title }) => ({
//         name: title,
//         value: id
//     }))

var fruits = ["mango", "banana", "mango", "potatoe", "blavkberry", "strawberry"] 

fruits.forEach(function(fruits){
    console.log(fruits);
})

var num = [1, 3, 6, 9, 12,]
const double = num.map(function(number){
    var nums = number * 2

    console.log(nums);
})