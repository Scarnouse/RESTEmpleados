#!/bin/bash

clear

mysql -u root --password=admin EMPLOYEES < ./SQLScripts/DepartmentTable.sql
mysql -u root --password=admin EMPLOYEES < ./SQLScripts/DepartmentUpdate.sql
mysql -u root --password=admin EMPLOYEES < ./SQLScripts/EmployeeTable.sql
mysql -u root --password=admin EMPLOYEES < ./SQLScripts/EmployeeUpdate.sql
mysql -u root --password=admin EMPLOYEES < ./SQLScripts/ProjectTable.sql
mysql -u root --password=admin EMPLOYEES < ./SQLScripts/ProjectUpdate.sql
mysql -u root --password=admin EMPLOYEES < ./SQLScripts/WorksOnTable.sql
mysql -u root --password=admin EMPLOYEES < ./SQLScripts/WorksOnUpdate.sql
mysql -u root --password=admin EMPLOYEES < ./SQLScripts/CreateUser.sql
mysql -u root --password=admin EMPLOYEES < ./SQLScripts/InsertData.sql
