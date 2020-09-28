const connectpls = require("./database/database.js");
const inquirer = require("inquirer");
const mysql = require("mysql");

const start = function () {
    inquirer.prompt({
        type: "list",
        name: "whatdo",
        message: "Use The Arrow Keys To Select An Option",
        choices: [
            "View All the Employees",
            "View All the Roles",
            "View All the Departments",
            "Add an Employee",
            "Add a Department",
            "Add a Role",
            "Update an Employee's Role",
        ]
        }).then(function (answer) {
            switch (answer.whatdo) {
                case "View All the Employees":
                    viewemployees();
                    break;
                case "View All the Roles":
                    viewroles();
                    break;
                case "View All the Departments":
                    viewdepartments();
                    break;
                case "Add an Employee":
                    addemployee();
                    break;
                case "Add a Department":
                    adddepartment();
                    break;
                case "Add a Role":
                    addrole();
                    break;
                case "Update an Employee's Role":
                    changeemployeerole();
                    break;
            }
        });
};
start();

function viewdepartments() {
    connectpls.query("SELECT * FROM department", function (err, answer) {
        console.table(answer);
    });
    start();
}

function viewroles() {
    connectpls.query("SELECT * FROM role", function (err, answer) {
        console.table(answer);
    });
    start();
}

function viewemployees() {
    connectpls.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department on role.department_id = department.id;", function (err, answer) {
        console.table(answer);
    });
    start();
}

function addemployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "Employee's First Name",
            name: "firstname"
        },
        {
            type: "input",
            message: "Employee's Last Name",
            name: "lastname"
        }
        ]).then(function (answer) {
            connectpls.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: answer.firstname,
                    last_name: answer.lastname,
                    role_id: null,
                    manager_id: null
                },
                function (err, answer) {
                    if (err) {throw err;}
                    console.table(answer);
                }
            );
            start();
        });
}

function changeemployeerole() {
    let array1 = [];
    connectpls.query("SELECT * FROM employee", function (err, answer) {
        for (let i = 0; i < answer.length; i++) {
            array1.push(answer[i].id + " " + answer[i].first_name + " " + answer[i].last_name);
        }
        inquirer.prompt([
            {
                type: "list",
                name: "changeemployeerole",
                message: "Which employee's role to update?",
                choices: array1
            },
            {
                type: "list",
                message: "select new role",
                choices: ["Director", "Manager", "Employee"],
                name: "newrole"
            }
            ]).then(function (answer) {
                const idupdate = {};
                idupdate.employeeId = parseInt(answer.changeemployeerole.split(" ")[0]);
                if (answer.newrole === "Director") {
                    idupdate.role_id = 1;
                } else if (answer.newrole === "Manager") {
                    idupdate.role_id = 2;
                } else if (answer.newrole === "Employee") {
                    idupdate.role_id = 3;
                }
                connectpls.query(
                    "UPDATE employee SET role_id = ? WHERE id = ?",
                    [idupdate.role_id, idupdate.employeeId],
                    function (err, data) {
                        start();
                    }
                );
            });
    });
}

function adddepartment() {
    inquirer.prompt({
            type: "input",
            message: "What is the new department?",
            name: "dept"
        }).then(function (answer) {
            connectpls.query(
                "INSERT INTO department SET ?",
                {
                    name: answer.dept
                },
                function (err, answer) {
                    if (err) {throw err;}
                }
            ),
                console.table(answer);
            start();
        });
}

function addrole() {
    inquirer.prompt([
            {
                type: "input",
                message: "Employee's Title?",
                name: "newtitle"
            },
            {
                type: "input",
                message: "Employee's Salary?",
                name: "newsalary"
            },
            {
                type: "input",
                message: "Employee's Department ID?",
                name: "newdep"
            }
        ]).then(function (answer) {
            connectpls.query(
                "INSERT INTO role SET ?",
                {
                    title: answer.newtitle,
                    salary: answer.newsalary,
                    department_id: answer.newdep
                },
                function (err, answer) {
                    if (err) {throw err;}
                    console.table(answer);
                }
            );
            start();
        });
}