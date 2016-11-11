CREATE USER 'usuario'@'localhost' IDENTIFIED BY 'usuario';

GRANT DELETE, INSERT, SELECT, UPDATE ON EMPLOYEES.* TO 'usuario'@'localhost';

FLUSH PRIVILEGES;