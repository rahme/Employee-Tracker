USE employee_tracker;

INSERT INTO department (id, name)
VALUES (1, "Downstream");
INSERT INTO department (id, name)
VALUES (2, "Upstream");
INSERT INTO department (id, name)
VALUES (3, "Quality Assurance");
INSERT INTO department (id, name)
VALUES (4, "Formulations");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Associate", 54000, 1);
INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Supervisor", 65000, 1);
INSERT INTO role (id, title, salary, department_id)
VALUES (3, "Manager", 78000, 1);
INSERT INTO role (id, title, salary, department_id)
VALUES (4, "Director", 86000, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Raffay", "Ahmed", 1, null);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Dennis", "Casteneda", 1, null);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Bob", "Pollas", 3, null);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Brian", "Monk", 4, null);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Zack", "Tanner", 2, null);
