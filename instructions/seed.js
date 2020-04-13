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
// adding new department
function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what is the name of the department?",

        }

    ]).then(function (answers) {
        connection.query("INSERT INTO department set?",
            {
                names: answers.name,

            }, function (err, res) {
                if (err) throw err
                console.table(res);
                // prompt the questions again "what would they like to do dynamically"
                afterConnection();

            })
    })

};

// add role
function addRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "what is employee title?",

        },
        {
            type: "input",
            name: "salary",
            message: "what is the employee salary ?",

        },
        {
            type: "input",
            name: "departmentId",
            message: "what is the ID of the department ?",

        }

    ]).then(function (answers) {
        connection.query("INSERT INTO roles set?",
            {
                title: answers.title,
                salary: parseFloat(answers.salary),
                department_id: parseInt(answers.departmentId)

            }, function (err, res) {
                if (err) throw err
                console.table(res);
                afterConnection();

            })
    })

};

// add Employee to a department
function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "what is employee first name?",

        },
        {
            type: "input",
            name: "lastName",
            message: "what is the employee last name ?",

        },
        {
            type: "list",
            name: "roleId",
            message: "what is the ID of the role ?",

        },
        {
            type: "list",
            name: "managerId",
            message: "what is the ID of the manager ?",

        }

    ]).then(function (answers) {
        connection.query("INSERT INTO employee set?",
        {
            first_name: answers.firstName,
            last_name: answers.lastName,
            role_id: answers.roleId,
            manager_id: answers.managerId

        }, function (err, res) {
            if (err) throw err
            console.table(res);
        })
    })

};

// view the list of departments
function viewDepartment() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        afterConnection();
    })

};
function viewRole() {
    connection.query("SELECT * FROM roles", function (err, res) {
        if (err) throw err;
        console.table(res);
        afterConnection();
    })
};

function viewEmployee() {
    connection.query(`SELECT employee.id, employee.first_name, employee.Last_name, roles.title, department.names
    FROM employee JOIN roles on employee.role_id = roles.id
    JOIN department on roles.department_id = department.id `, function (err, res) {
        if (err) throw err;


        console.table(res);
    })
};

function updateEmployee() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;


        console.table(res);
        connection.query("SELECT * FROM roles", function (err, res) {
            if (err) throw err;
            const roles = res;
            // console.log(roles)
            const choices = roles.map( ({id, title}) => ({
                name: title, 
                value: id
            }))
            // console.log(choices);
            inquirer.prompt([
                {
                    type: "input",
                    name: "employeeId",
                    message: "what is the employee Id?",
        
                },
                {
                    type: "list",
                    name: "roleId",
                    message: "what is the employer new role",
                    choices: choices
        
                }
            ]).then( function(answers){
                connection.query("UPDATE employee set role_id = ? where id = ?",[answers.roleId, answers.employeeId],
    
                 function(err,res){
                     if (err) throw err;
                     console.table(res);
                 }) 
            })
        })
    })
    
   

    
    

};