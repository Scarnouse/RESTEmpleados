#!/bin/bash

clear


echo -n "Enter root user in mysql --> "
read root_name
echo -n "Enter root password in mysql -->"
read root_pass

mysql -u $root_name --password=$root_pass < ./SQLScripts/CreateDatabase.sql
mysql -u $root_name --password=$root_pass EMPLOYEES < ./SQLScripts/DepartmentTable.sql
mysql -u $root_name --password=$root_pass EMPLOYEES < ./SQLScripts/DepartmentUpdate.sql
mysql -u $root_name --password=$root_pass EMPLOYEES < ./SQLScripts/EmployeeTable.sql
mysql -u $root_name --password=$root_pass EMPLOYEES < ./SQLScripts/EmployeeUpdate.sql
mysql -u $root_name --password=$root_pass EMPLOYEES < ./SQLScripts/ProjectTable.sql
mysql -u $root_name --password=$root_pass EMPLOYEES < ./SQLScripts/ProjectUpdate.sql
mysql -u $root_name --password=$root_pass EMPLOYEES < ./SQLScripts/WorksOnTable.sql
mysql -u $root_name --password=$root_pass EMPLOYEES < ./SQLScripts/WorksOnUpdate.sql
mysql -u $root_name --password=$root_pass EMPLOYEES < ./SQLScripts/CreateUser.sql
mysql -u $root_name --password=$root_pass EMPLOYEES < ./SQLScripts/InsertData.sql
