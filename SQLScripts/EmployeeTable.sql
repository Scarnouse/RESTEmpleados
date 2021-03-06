CREATE TABLE IF NOT EXISTS EMPLOYEE (
    n_empl int(10) unsigned NOT NULL AUTO_INCREMENT,
    name_empl varchar(50) NOT NULL,
    surname_empl varchar(50) NOT NULL,
    start_date_empl date NOT NULL DEFAULT '0000-00-00',
    n_dept int(10) unsigned NOT NULL,
    PRIMARY KEY (n_empl),
    FOREIGN KEY (n_dept) REFERENCES DEPARTMENT(n_dept)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;