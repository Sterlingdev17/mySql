var mysql = require("mysql");
const inquirer = require("inquirer")


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "rootroot",
    database: "seed_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});
// after connections ask user what whould they like to do with choices of options 
function afterConnection() {
    inquirer.prompt([
        {
            type: "list",
            name: "selection",
            message: "what would you like to do today?",
            choices: ["add_department", "add_role", "add_employee", "view_department", "view_role", "view_employee", "update_employee_role", "EXIT"]
        }
    ]).then(function (answers) {
        switch (answers.selection) {
            case "add_department":
                addDepartment();
                break;

            case "add_role":
                addRole();
                break;

            case "add_employee":
                addEmployee();
                break;

            case "view_department":
                viewDepartment();
                break;

            case "view_role":
                viewRole();
                break;

            case "view_employee":
                viewEmployee();
                break;

            case "update_employee_role":
                updateEmployee();
                break;

            default: connection.end();
                break;
        }

    })
}
function addDepartment() {
    console.log("yea")
};
function addRole(){
    console.log("roleee")
};
function addEmployee(){
    console.log("employee")
};
function viewDepartment(){
    console.log("viewdepartment")

};
function viewRole(){
    console.log("viewrole")
};

function viewEmployee(){
    console.log("viewdemployee")

};

function updateEmployee(){
    console.log("viewdemployee")

};