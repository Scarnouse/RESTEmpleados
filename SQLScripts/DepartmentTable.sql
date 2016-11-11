CREATE TABLE IF NOT EXISTS DEPARTMENT (
    n_dept int(10) unsigned NOT NULL AUTO_INCREMENT,
    name_dept varchar(50) NOT NULL,
    PRIMARY KEY (n_dept),
    UNIQUE KEY dept_name_unique (name_dept)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;