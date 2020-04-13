// connection.query("SELECT * FROM roles", function (err, res) {
//     if (err) throw err;
//     const roles = res;
//     // console.log(roles)
//     const choices = roles.map(({ id, title }) => ({
//         name: title,
//         value: id
//     }))