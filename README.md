# RESTEmpleados

Install mysql

```
sudo apt-get install mysql-server
sudo mysql_secure_installation
```

Create database, create tables, create user and fill out database

```
./LoadData.sh
```

##DEPARTMENT

Action | Method | URL | Params | Body
------------ | -------------  | -------------  | -------------  | -------------
List all departments | GET | /departments |  |  
List a department by n_dept | GET | /departments | /:n_dept |
List employees from department | GET | /departments/employees | /:n_dept |
Create a department | POST | /departments |  | {“n_dept” : 1, “name_dept” : “testdept"}
Update a department | PUT | /departments | /:n_dept | {“name_dept” : “testdept”}
Delete a department | DELETE | /departments | /:n_dept |

##EMPLOYEE

Action | Method | URL | Params | Body
------------ | -------------  | -------------  | -------------  | -------------
List all employees | GET | /employees |  |
List an employee by n_empl | GET | /employees | /:n_empl |
Create an employee | POST | /employees |  | {“n_empl” : 1, “name_empl” : “nameempl”, “surname_empl” : “surnameempl”, “start_date_empl”: “2016-12-17”, “n_dept” : 1}
Update an employee | PUT | /employees | /:n_empl | {“name_empl” : “nameempl”, “surname_empl” : “surnameempl”, “start_date_empl”: “2016-12-17”, “n_dept” : 1}
Delete an employee | DELETE | /employees | /:n_empl |

##PROJECT

Action | Method | URL | Params | Body
------------ | -------------  | -------------  | -------------  | -------------
List all projects | GET | /projects |  | 
List a project by n_proj | GET | /projects | /:n_proj |
Create a project | POST | /projects |  | {“n_proj” : 1, “name_proj” : “testproj”, “budget_proj” : 2000}
Update a project | PUT | /projects | /:n_proj | {“name_proj” : “testproj”, “budget_proj” : 2000}
Delete a project | DELETE | /projects | /:n_proj |

##WORKS_ON

Action | Method | URL | Params | Body
------------ | -------------  | -------------  | -------------  | -------------
List employees working on a project | GET | /workson | /:n_proj |
Add an employee to a project | POST | /workson |  | {“n_proj” : 1, “n_empl” : 1, “start_date_proj” : “2016-12-17”, “task” : “testtask”}
Update employee data of a project | PUT | /workson | /:n_proj | {“n_empl” : 1, “start_date_proj” : “2016-12-17”, “task” : “testtask”}
