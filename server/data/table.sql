CREATE TABLE role_t (
    role_id             VARCHAR(50)     NOT NULL    PRIMARY KEY,
    role_name           VARCHAR(50)     NOT NULL
)ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE user_t (
    phone_number        VARCHAR(50)     NOT NULL    PRIMARY KEY,
    role_id             VARCHAR(50)     NOT NULL,
    FOREIGN KEY (role_id) REFERENCES role_t(role_id)
)ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE restaurant (
    phone_number            VARCHAR(50)     NOT NULL,
    restaurant_name         VARCHAR(50)     NOT NULL    PRIMARY KEY,
    area                    VARCHAR(50)     NOT NULL,
    picture                 BLOB            NULL,
    restaurant_status       VARCHAR(50)     NOT NULL,
    rating                  DOUBLE(2, 2)    NULL,
    FOREIGN KEY (phone_number) REFERENCES user_t(phone_number)
)ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE menu_t (
    menu_name               VARCHAR(50)     NOT NULL,
    restaurant_name         VARCHAR(50)     NOT NULL,
    price                   INT(3)          NOT NULL,
    PRIMARY KEY (menu_name, restaurant_name),
    FOREIGN KEY (restaurant_name) REFERENCES restaurant(restaurant_name)
)ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE category_t (
    menu_name               VARCHAR(50)     NOT NULL,
    category                VARCHAR(50)     NOT NULL,
    PRIMARY KEY (menu_name, category),
    FOREIGN KEY (menu_name) REFERENCES menu_t(menu_name)
)ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE ingredient_t (
    ingredient              VARCHAR(50)     NOT NULL,
    restaurant_name         VARCHAR(50)     NOT NULL,
    price_adjust            INT(3)          NOT NULL,
    PRIMARY KEY (ingredient, restaurant_name),
    FOREIGN KEY (restaurant_name) REFERENCES restaurant(restaurant_name)
)ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE toping_t (
    restaurant_name         VARCHAR(50)     NOT NULL,
    toping                  VARCHAR(50)     NOT NULL,
    price_adjust            INT(3)          NOT NULL,
    PRIMARY KEY (restaurant_name, toping),
    FOREIGN KEY (restaurant_name) REFERENCES restaurant(restaurant_name)
)ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE queue_log (
    queue_id                INT(4)     		PRIMARY KEY     AUTO_INCREMENT,
    restaurant_name         VARCHAR(50)     NOT NULL,
    phone_number            VARCHAR(50)     NOT NULL,
    menu_name               VARCHAR(50)     NOT NULL,
    ingredient              VARCHAR(50)     NOT NULL,
    note                    VARCHAR(50)     NULL,
    order_status            INT(2)          NOT NULL		DEFAULT 0,
    order_time              TIMESTAMP       NOT NULL,
    FOREIGN KEY (restaurant_name) REFERENCES restaurant(restaurant_name),
    FOREIGN KEY (phone_number) REFERENCES user_t(phone_number),
    FOREIGN KEY (ingredient) REFERENCES ingredient_t(ingredient)
)ENGINE = InnoDB DEFAULT CHARSET = utf8;

ALTER TABLE queue_log AUTO_INCREMENT=13;

/* insert role table */
INSERT INTO role_t(role_id, role_name) VALUES ('rest001','Restaurant');
INSERT INTO role_t(role_id, role_name) VALUES ('rest002','Restaurant');
INSERT INTO role_t(role_id, role_name) VALUES ('rest003','Restaurant');
INSERT INTO role_t(role_id, role_name) VALUES ('rest004','Restaurant');
INSERT INTO role_t(role_id, role_name) VALUES ('rest005','Restaurant');
INSERT INTO role_t(role_id, role_name) VALUES ('rest006','Restaurant');
INSERT INTO role_t(role_id, role_name) VALUES ('rest007','Restaurant');
INSERT INTO role_t(role_id, role_name) VALUES ('user001','Customer');
INSERT INTO role_t(role_id, role_name) VALUES ('user002','Customer');
INSERT INTO role_t(role_id, role_name) VALUES ('user003','Customer');

/* insert user table */
INSERT INTO user_t(phone_number, role_id) VALUES ('0987456321','rest001');
INSERT INTO user_t(phone_number, role_id) VALUES ('0963258741','rest002');
INSERT INTO user_t(phone_number, role_id) VALUES ('0951236987','rest003');
INSERT INTO user_t(phone_number, role_id) VALUES ('0874596581','rest004');
INSERT INTO user_t(phone_number, role_id) VALUES ('0874596821','rest005');
INSERT INTO user_t(phone_number, role_id) VALUES ('0658425748','rest006');
INSERT INTO user_t(phone_number, role_id) VALUES ('0684859524','rest007');
INSERT INTO user_t(phone_number, role_id) VALUES ('0123456789','user001');
INSERT INTO user_t(phone_number, role_id) VALUES ('0123456788','user002');
INSERT INTO user_t(phone_number, role_id) VALUES ('0123456787','user003');

/* insert restaurant table */
INSERT INTO restaurant(phone_number, restaurant_name, area, restaurant_status) VALUES ('0987456321','ชิกกี้ชิก','ใต้หอพักนักศึกษาหญิง (S6)','Open now');
INSERT INTO restaurant(phone_number, restaurant_name, area, restaurant_status) VALUES ('0963258741','ร้านแม่น้องพั้นซ์','ใต้หอพักนักศึกษาหญิง (S6)','Open now');
INSERT INTO restaurant(phone_number, restaurant_name, area, restaurant_status) VALUES ('0951236987','ร้านก๋วยเตี๋ยว ลุงหนวด','ใต้หอพักนักศึกษาหญิง (S6)','Open now');
INSERT INTO restaurant(phone_number, restaurant_name, area, restaurant_status) VALUES ('0874596581','หมูกะไก่','ใต้หอพักนักศึกษาหญิง (S6)','Closed');
INSERT INTO restaurant(phone_number, restaurant_name, area, restaurant_status) VALUES ('0874596821','ครัวป้าแหม่ม','ใต้หอพักนักศึกษาชาย (S5)','Closed');
INSERT INTO restaurant(phone_number, restaurant_name, area, restaurant_status) VALUES ('0658425748','MUKDARA FAMILY','ใต้หอพักนักศึกษาชาย (S5)','Closed');
INSERT INTO restaurant(phone_number, restaurant_name, area, restaurant_status) VALUES ('0684859524','ลุงหนุ่ม square','บริเวณอาคารเรียนรวม 1 (N20)','Closed');

/* insert menu table */
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','ผัดพริกแกง','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','ผัดขี้เมา','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','ผัดพริกหยวก','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','ผัดซีอิ๊ว','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','ข้าวผัด','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','ข้าวผัดต้มยำ','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','ผัดผงกะหรี่','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','ผัดผักบุ้ง','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','ผัดคะน้า','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','ผัดกิมจิ','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','ทอดกระเทียม','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','หมูสไลด์ผัดกะปิ','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','ข้าวไก่ป๊อป','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','เส้นใหญ่คั่ว','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','ราดหน้า','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','สปาเก็ตตี้ผัดขี้เมา','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','สปาเก็ตตี้ผัดพริกแห้ง','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','สปาเก็ตตี้ผัดกะเพรา','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','สปาเก็ตตี้คาโบนาร่า','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','สปาเก็ตตี้ไวท์ซอส','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','สปาเก็ตตี้ซอสมะเขือเทศ','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','ข้าวไข่ข้น','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','ข้าวไข่เจียว','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','สุกี้น้ำ','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','สุกี้แห้ง','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','ก๋วยเตี๋ยวน้ำใส','30');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','ก๋วยเตี๋ยวต้มยำ','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','ก๋วยเตี๋ยวหมูตุ๋น','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','ป๊อป ป๊อป','30');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','ชิก นักเก็ต','30');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','ชิก คาราเกะ','30');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','คริสปี้ วิงส์','30');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','ชิก คัสซุ','30');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','ชิก อบูริ','30');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ชิกกี้ชิก','เฟรนช์ฟรายส์','30');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ข้าวเปล่า','10');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดกะเพรา','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดกะเพราหน่อไม้','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดกะเพราวุ้นเส้น','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดพริกหยวก','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดพริกแกง','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดพริกเผา','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดขี้เมา','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดคะน้า','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดโหระพา','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดพริกไทยดำ','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดเผ็ด','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดฉ่า','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดผักรวมมิตร','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดผักบุ้ง','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','คั่วพริกเกลือ','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ทอดกระเทียม','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ข้าวไข่ข้น','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ข้าวไข่เจียว','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ข้าวต้ม','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดมาม่ากะเพรา','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดมาม่าซอสมะเขือเทศ','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดมาม่าขี้เมา','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดมาม่าพริกแห้ง','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','มักกะโรนี','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','สปาเก็ตตี้','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ราดหน้าเส้นใหญ่','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ราดหน้าหมี่ขาว','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ราดหน้าหมี่กรอบ','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดกะเพราเต้าหู้ไข่','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดพริกเผาไข่เค็ม','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดผงกะหรี่','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ข้าวผัด','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ข้าวผัดต้มยำ','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ข้าวไข่รวม','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ข้าวมันไก่ต้ม','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ข้าวมันไก่ทอด','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ต้มเลือดหมู','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดมาม่า','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดมาม่าหมาล่า','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','เส้นใหญ่คั่ว','45');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','เส้นใหญ่คั่วเย็นตาโฟ','45');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดซีอิ๊ว','45');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','สุกี้แห้ง','45');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','สุกี้น้ำ','45');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ผัดกะเพราไข่เยี่ยวม้า','45');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านแม่น้องพั้นซ์','ข้าวมันไก่ผสม','50');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ก๋วยเตี๋ยวหมูน้ำตก','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ก๋วยเตี๋ยวน่องไก่','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ก๋วยเตี๋ยวน้ำใส','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ราดหน้า','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','สปาเก็ตตี้','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','มักกะโรนี','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ผัดกะเพรา','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ผัดพริกแกงแดง','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ผัดพริกแกงใต้','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ผัดพริกแกงเขียวหวาน','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ผัดพริกเผา','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ผัดพริกหยวก','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ผัดขี้เมา','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ผัดผักรวมมิตร','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ผัดผักบุ้ง','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ผัดคะน้า','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','คั่วพริกเกลือ','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ทอดกระเทียม','35');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ก๋วยเตี๋ยวน้ำตกต้มยำ','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ก๋วยเตี๋ยวน้ำตกหมูตุ๋น','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ก๋วยเตี๋ยวแห้งต้มยำ','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','เย็นตาโฟ','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','เกี๊ยวหมูแดง','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ผัดไทย','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ผัดซีอิ๊ว','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ข้าวผัด','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ผัดผงกะหรี่','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ผัดมาม่า','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','เส้นใหญ่คั่ว','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','สุกี้แห้ง','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','สุกี้น้ำ','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','สปาเก็ตตี้ผัดซอส','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','สปาเก็ตตี้ผัดขี้เมา','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','มักกะโรนีผัดซอส','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','มักกะโรนีผัดขี้เมา','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ผัดไข่เค็ม','40');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ก๋วยจั๊บ','45');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ก๋วยเตี๋ยวหมูเด้ง','45');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ก๋วยเตี๋ยวไก่กรอบ','45');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ก๋วยเตี๋ยวไก่ย่าง','45');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ยากิโซบะ','45');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ก๋วยเตี๋ยวหมูกรอบ','50');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','หอยทอด','50');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','หมึกทอด','50');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','กุ้งทอด','60');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ไก่ย่าง','60');
INSERT INTO menu_t(restaurant_name, menu_name, price) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ทะเลทอด','70');

/* insert category table */
INSERT INTO category_t(menu_name, category) VALUES ('ผัดกะเพรา','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดพริกแกง','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดขี้เมา','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดพริกหยวก','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ข้าวผัด','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ข้าวผัดต้มยำ','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดผงกะหรี่','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดผักบุ้ง','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดคะน้า','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดกิมจิ','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ทอดกระเทียม','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('หมูสไลด์ผัดกะปิ','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ข้าวไก่ป๊อป','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ราดหน้า','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('สปาเก็ตตี้ผัดขี้เมา','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('สปาเก็ตตี้ผัดพริกแห้ง','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('สปาเก็ตตี้ผัดกะเพรา','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('สปาเก็ตตี้ไวท์ซอส','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('สปาเก็ตตี้คาโบนาร่า','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('สปาเก็ตตี้ซอสมะเขือเทศ','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ข้าวไข่ข้น','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ข้าวไข่เจียว','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('สุกี้แห้ง','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('สุกี้น้ำ','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ก๋วยเตี๋ยวน้ำใส','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ก๋วยเตี๋ยวต้มยำ','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ก๋วยเตี๋ยวหมูตุ๋น','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ป๊อป ป๊อป','Fast Food');
INSERT INTO category_t(menu_name, category) VALUES ('ชิก นักเก็ต','Fast Food');
INSERT INTO category_t(menu_name, category) VALUES ('ชิก คาราเกะ','Fast Food');
INSERT INTO category_t(menu_name, category) VALUES ('คริสปี้ วิงส์','Fast Food');
INSERT INTO category_t(menu_name, category) VALUES ('ชิก คัสซุ','Fast Food');
INSERT INTO category_t(menu_name, category) VALUES ('ชิก อบูริ','Fast Food');
INSERT INTO category_t(menu_name, category) VALUES ('เฟรนช์ฟรายส์','Fast Food');
INSERT INTO category_t(menu_name, category) VALUES ('ข้าวเปล่า','Add-on');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดกะเพราหน่อไม้','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดกะเพราวุ้นเส้น','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดพริกเผา','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดโหระพา','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดพริกไทยดำ','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดเผ็ด','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดฉ่า','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดผักรวมมิตร','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('คั่วพริกเกลือ','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ข้าวต้ม','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดมาม่ากะเพรา','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดมาม่าซอสมะเขือเทศ','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดมาม่าขี้เมา','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดมาม่าพริกแห้ง','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('มักกะโรนี','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('สปาเก็ตตี้','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ราดหน้าเส้นใหญ่','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ราดหน้าหมี่ขาว','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ราดหน้าหมี่กรอบ','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดกะเพราเต้าหู้ไข่','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดพริกเผาไข่เค็ม','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ข้าวมันไก่ต้ม','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ข้าวมันไก่ทอด','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ข้าวมันไก่ผสม','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ต้มเลือดหมู','Soup');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดมาม่า','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดมาม่าหมาล่า','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('เส้นใหญ่คั่ว','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('เส้นใหญ่คั่วเย็นตาโฟ','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดซีอิ๊ว','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดกะเพราไข่เยี่ยวม้า','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ก๋วยเตี๋ยวหมูน้ำตก','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ก๋วยเตี๋ยวน่องไก่','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ก๋วยเตี๋ยวน้ำตกต้มยำ','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ก๋วยเตี๋ยวน้ำตกหมูตุ๋น','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ก๋วยเตี๋ยวแห้งต้มยำ','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('เย็นตาโฟ','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('เกี๊ยวหมูแดง','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดไทย','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ก๋วยจั๊บ','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ก๋วยเตี๋ยวหมูเด้ง','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ก๋วยเตี๋ยวไก่กรอบ','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ก๋วยเตี๋ยวไก่ย่าง','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ยากิโซบะ','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ก๋วยเตี๋ยวหมูกรอบ','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('หอยทอด','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('หมึกทอด','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('กุ้งทอด','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ไก่ย่าง','Fast Food');
INSERT INTO category_t(menu_name, category) VALUES ('ทะเลทอด','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดพริกแกงแดง','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดพริกแกงใต้','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดพริกแกงเขียวหวาน','À la carte');
INSERT INTO category_t(menu_name, category) VALUES ('สปาเก็ตตี้ผัดซอส','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('มักกะโรนีผัดซอส','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('มักกะโรนีผัดขี้เมา','Noodle');
INSERT INTO category_t(menu_name, category) VALUES ('ผัดไข่เค็ม','À la carte');

/* insert ingredient table*/
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ชิกกี้ชิก','หมูสับ','0');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ชิกกี้ชิก','หมูชิ้น','0');
/*INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ชิกกี้ชิก','ไก่','0');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ชิกกี้ชิก','ไส้กรอก','0');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ชิกกี้ชิก','เครื่องในไก่','0');*/
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ชิกกี้ชิก','กุ้ง','5');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ชิกกี้ชิก','หมึก','5');
/*INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ชิกกี้ชิก','แฮม','5');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ชิกกี้ชิก','ไก่ป๊อป','5');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ชิกกี้ชิก','ไก่กรอบชิกกี้','5');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ชิกกี้ชิก','หมูยอ','5');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ชิกกี้ชิก','แหนม','5');*/
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ชิกกี้ชิก','หมูกรอบ','10');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ชิกกี้ชิก','เบคอน','10');
/*INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ชิกกี้ชิก','ทะเล','10');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ชิกกี้ชิก','หมูสไลด์','10');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ชิกกี้ชิก','คอหมูย่าง','10');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ชิกกี้ชิก','หมูตุ๋น','10');*/
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ชิกกี้ชิก','รวม','15');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านแม่น้องพั้นซ์','หมูสับ','0');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านแม่น้องพั้นซ์','ไก่','0');
/*INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านแม่น้องพั้นซ์','หมูชิ้น','0');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านแม่น้องพั้นซ์','เครื่องในไก่','0');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านแม่น้องพั้นซ์','ตับหมู','0');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านแม่น้องพั้นซ์','ไส้กรอกชีส','0');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านแม่น้องพั้นซ์','ไก่ยอ','0');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านแม่น้องพั้นซ์','กุนเชียง','0');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านแม่น้องพั้นซ์','แหนม','0');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านแม่น้องพั้นซ์','แฮม','0');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านแม่น้องพั้นซ์','ปลาดอลลี่','5');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านแม่น้องพั้นซ์','หมึก','5');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านแม่น้องพั้นซ์','ปลากระป๋อง','5');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านแม่น้องพั้นซ์','หอยลาย','5');*/
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านแม่น้องพั้นซ์','ไก่ทอด','5');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านแม่น้องพั้นซ์','กุ้ง','5');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านแม่น้องพั้นซ์','หมูสามชั้นสไลด์','10');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านแม่น้องพั้นซ์','หมูกรอบ','15');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านแม่น้องพั้นซ์','รวม','15');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ไส้กรอก','0');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','แฮม','5');
/*INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','หมูสับ','5');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ปลาดอลลี่','5');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','หมูชิ้น','5');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ไก่','5');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','หมึก','5');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ไก่กรอบ','10');*/
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','เบคอน','10');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','กุ้ง','10');
/*INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','หมูตุ๋นเครื่องยาจีน','15');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','หมูสามชั้นสไลด์','15');*/
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','หมูกรอบ','15');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','กระดูกหมูอ่อน','15');
INSERT INTO ingredient_t(restaurant_name, ingredient, price_adjust) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','รวม','15');

/* insert toping table */
INSERT INTO toping_t(restaurant_name, toping, price_adjust) VALUES ('ชิกกี้ชิก','ไข่ดาว','5');
INSERT INTO toping_t(restaurant_name, toping, price_adjust) VALUES ('ชิกกี้ชิก','ไข่ข้น','10');
INSERT INTO toping_t(restaurant_name, toping, price_adjust) VALUES ('ชิกกี้ชิก','ไข่เจียว','10');
INSERT INTO toping_t(restaurant_name, toping, price_adjust) VALUES ('ชิกกี้ชิก','พิเศษ','10');
INSERT INTO toping_t(restaurant_name, toping, price_adjust) VALUES ('ร้านแม่น้องพั้นซ์','ไข่ดาว','7');
INSERT INTO toping_t(restaurant_name, toping, price_adjust) VALUES ('ร้านแม่น้องพั้นซ์','ไข่ข้น','10');
INSERT INTO toping_t(restaurant_name, toping, price_adjust) VALUES ('ร้านแม่น้องพั้นซ์','ไข่เจียว','10');
INSERT INTO toping_t(restaurant_name, toping, price_adjust) VALUES ('ร้านแม่น้องพั้นซ์','พิเศษ','10');
INSERT INTO toping_t(restaurant_name, toping, price_adjust) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ไข่ดาว','5');
INSERT INTO toping_t(restaurant_name, toping, price_adjust) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ไข่ข้น','10');
INSERT INTO toping_t(restaurant_name, toping, price_adjust) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','ไข่เจียว','10');
INSERT INTO toping_t(restaurant_name, toping, price_adjust) VALUES ('ร้านก๋วยเตี๋ยว ลุงหนวด','พิเศษ','10');

/* insert queue log */
INSERT INTO queue_log(queue_id, restaurant_name, phone_number, menu_name, ingredient, note, order_status)
    VALUES ('10', 'ชิกกี้ชิก', '0123456789', 'ผัดกะเพรา', 'หมูสับ', 'ไข่ดาว', '0');
INSERT INTO queue_log(queue_id, restaurant_name, phone_number, menu_name, ingredient, note, order_status)
    VALUES ('11', 'ชิกกี้ชิก', '0123456788', 'ข้าวผัดต้มยำ', 'หมูกรอบ', 'ไข่เจียว', '0');
INSERT INTO queue_log(queue_id, restaurant_name, phone_number, menu_name, ingredient, order_status)
    VALUES ('12', 'ชิกกี้ชิก', '0123456787', 'สุกี้น้ำ', 'กุ้ง', '0');