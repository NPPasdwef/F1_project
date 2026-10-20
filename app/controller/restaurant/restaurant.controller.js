module.exports = {
    overviws: async (req, res) => {
        res.status(200).json({
            status: 200,
            data: {
                rating: 4.8,
                prep_minutes: 18,
                menu_count: 42,
                service_count: 3
            }
        })
    },
    signature: async (req, res) => {
        res.status(200).json({
            status: 200,
            data: {
                list: [{
                    id: 1,
                    category: 'ขายดี',
                    name: 'พ่อ',
                    description: 'ผัดไฟแรง กลิ่นกะเพราชัด เลือกระดับความเผ็ดได้',
                    image: '/assets/img/upload/menu/single/menu-01.jpg',
                    price: 85
                }, {
                    id: 2,
                    category: 'แนะนำ',
                    name: 'มึง',
                    description: 'หม้อไฟรสจัดจ้านสำหรับแบ่งกัน 2-3 คน',
                    image: '/assets/img/upload/menu/shared/menu-07.jpg',
                    price: 180
                }, {
                    id: 3,
                    category: 'ครัวบ้านดี',
                    name: 'ตาย',
                    description: 'เส้นเหนียวนุ่ม ซอสหวานเค็มเปรี้ยว กุ้งตัวโต',
                    image: '/assets/img/upload/menu/noodle/menu-13.jpg',
                    price: 120
                }, {
                    id: 4,
                    category: 'เย็นชื่นใจ',
                    name: 'ควย',
                    description: 'เลือกความหวาน แยกน้ำแข็ง หรือเพิ่มท็อปปิงได้',
                    image: '/assets/img/upload/menu/drink/menu-25.jpg',
                    price: 45
                }]
            }
        })
    },
    promotion: async (req, res) => {
        res.status(200).json({
            status: 200,
            data: {
                list: [{
                    id: 1,
                    image: '/assets/img/upload/promotion/promotion-family.jpg',
                    tag: 'มื้อครอบครัว',
                    name: 'ลด 10% เมื่อครบ 500 บาท',
                    description: 'ใช้ได้ทั้งทานที่ร้านและกลับบ้าน เงื่อนไขแสดงตอนยืนยันออเดอร์',
                }, {
                    id: 2,
                    image: '/assets/img/upload/promotion/promotion-drinks.jpg',
                    tag: 'ทุกวันศุกร์',
                    name: 'เครื่องดื่มลด 20 บาท',
                    description: 'สำหรับชาไทย น้ำสมุนไพร และเครื่องดื่มเย็นที่ร่วมรายการ',
                }, {
                    id: 3,
                    image: '/assets/img/upload/promotion/promotion-combo.jpg',
                    tag: 'ชุดอิ่มคุ้ม',
                    name: 'เพิ่มของทานเล่น 49 บาท',
                    description: 'เมื่อสั่งเมนูหลัก 2 รายการขึ้นไป เหมาะกับโต๊ะเล็กและออฟฟิศ',
                }]
            }
        })
    },
    menu: async (req, res) => {
        res.status(200).json({
            status: 200,
            data: {
                list: [{
                    "id": 1,
                    "category": "อาหารจานเดียว",
                    "tag": "ขายดี",
                    "name": "ข้าวกะเพราไก่ไข่ดาว",
                    "description": "ผัดกะเพราไก่สับหอมใบกะเพรา เสิร์ฟพร้อมไข่ดาวกรอบ",
                    "price": 85,
                    "image": "/assets/img/upload/menu/single/menu-01.jpg"
                },
                {
                    "id": 5,
                    "category": "อาหารจานเดียว",
                    "tag": "แนะนำ",
                    "name": "ข้าวผัดกุ้ง",
                    "description": "ข้าวหอมผัดไข่กับกุ้งสด หอมกระทะและผักสามสี",
                    "price": 95,
                    "image": "/assets/img/upload/menu/single/menu-02.jpg"
                },
                {
                    "id": 6,
                    "category": "อาหารจานเดียว",
                    "tag": "พร้อมขาย",
                    "name": "ข้าวหมูทอดกระเทียม",
                    "description": "หมูหมักนุ่มทอดกระเทียมหอม กินคู่พริกน้ำปลา",
                    "price": 89,
                    "image": "/assets/img/upload/menu/single/menu-03.jpg"
                },
                {
                    "id": 7,
                    "category": "อาหารจานเดียว",
                    "tag": "เผ็ดกลาง",
                    "name": "ข้าวพริกแกงหมูกรอบ",
                    "description": "พริกแกงเข้มข้นกับหมูกรอบและถั่วฝักยาว",
                    "price": 99,
                    "image": "/assets/img/upload/menu/single/menu-04.jpg"
                },
                {
                    "id": 8,
                    "category": "อาหารจานเดียว",
                    "tag": "ใหม่",
                    "name": "ข้าวไข่ข้นกุ้ง",
                    "description": "ไข่ข้นนุ่มราดบนข้าวหอมมะลิพร้อมกุ้งเด้ง",
                    "price": 105,
                    "image": "/assets/img/upload/menu/single/menu-05.jpg"
                },
                {
                    "id": 9,
                    "category": "อาหารจานเดียว",
                    "tag": "พร้อมขาย",
                    "name": "ข้าวไก่ผัดเม็ดมะม่วง",
                    "description": "ไก่ผัดซอสหวานเค็มกับเม็ดมะม่วงและพริกแห้ง",
                    "price": 115,
                    "image": "/assets/img/upload/menu/single/menu-06.jpg"
                },
                {
                    "id": 2,
                    "category": "กับข้าว",
                    "tag": "ขายดี",
                    "name": "ต้มยำกุ้งน้ำข้น",
                    "description": "หม้อไฟรสจัดจ้าน หอมสมุนไพรไทยสำหรับแบ่งกัน",
                    "price": 180,
                    "image": "/assets/img/upload/menu/shared/menu-07.jpg"
                },
                {
                    "id": 10,
                    "category": "กับข้าว",
                    "tag": "แนะนำ",
                    "name": "แกงเขียวหวานไก่",
                    "description": "แกงกะทิเข้มข้น ใส่มะเขือและใบโหระพา",
                    "price": 145,
                    "image": "/assets/img/upload/menu/shared/menu-08.jpg"
                },
                {
                    "id": 11,
                    "category": "กับข้าว",
                    "tag": "พร้อมขาย",
                    "name": "ผัดผักรวมกุ้ง",
                    "description": "ผักสดหลายชนิดผัดไฟแรงกับกุ้งสด",
                    "price": 130,
                    "image": "/assets/img/upload/menu/shared/menu-09.jpg"
                },
                {
                    "id": 12,
                    "category": "กับข้าว",
                    "tag": "ขายดี",
                    "name": "หมูสามชั้นทอดน้ำปลา",
                    "description": "หมูสามชั้นทอดกรอบนอกนุ่มใน เสิร์ฟพร้อมน้ำจิ้มแจ่ว",
                    "price": 150,
                    "image": "/assets/img/upload/menu/shared/menu-10.jpg"
                },
                {
                    "id": 13,
                    "category": "กับข้าว",
                    "tag": "พร้อมขาย",
                    "name": "ไข่เจียวหมูสับ",
                    "description": "ไข่เจียวฟูกรอบใส่หมูสับ กินง่ายทุกโต๊ะ",
                    "price": 80,
                    "image": "/assets/img/upload/menu/shared/menu-11.jpg"
                },
                {
                    "id": 14,
                    "category": "กับข้าว",
                    "tag": "พิเศษ",
                    "name": "ปลากะพงทอดน้ำปลา",
                    "description": "ปลากะพงทอดกรอบ ราดน้ำปลาหอม เสิร์ฟพร้อมน้ำยำมะม่วง",
                    "price": 320,
                    "image": "/assets/img/upload/menu/shared/menu-12.jpg"
                },
                {
                    "id": 3,
                    "category": "เส้นและแกง",
                    "tag": "แนะนำ",
                    "name": "ผัดไทยกุ้งสด",
                    "description": "เส้นจันท์ผัดซอสผัดไทย กุ้งสด ถั่วงอก และมะนาว",
                    "price": 120,
                    "image": "/assets/img/upload/menu/noodle/menu-13.jpg"
                },
                {
                    "id": 15,
                    "category": "เส้นและแกง",
                    "tag": "พร้อมขาย",
                    "name": "ราดหน้าหมูหมัก",
                    "description": "เส้นใหญ่ผัดหอมกระทะ ราดน้ำราดหน้าหมูหมักนุ่ม",
                    "price": 95,
                    "image": "/assets/img/upload/menu/noodle/menu-14.jpg"
                },
                {
                    "id": 16,
                    "category": "เส้นและแกง",
                    "tag": "พร้อมขาย",
                    "name": "สุกี้น้ำทะเล",
                    "description": "น้ำซุปร้อน ๆ พร้อมกุ้ง ปลาหมึก ผัก และน้ำจิ้มสุกี้",
                    "price": 115,
                    "image": "/assets/img/upload/menu/noodle/menu-15.jpg"
                },
                {
                    "id": 17,
                    "category": "เส้นและแกง",
                    "tag": "ขายดี",
                    "name": "ก๋วยเตี๋ยวคั่วไก่",
                    "description": "เส้นใหญ่คั่วไก่หอมกระทะ โรยพริกไทยและต้นหอม",
                    "price": 90,
                    "image": "/assets/img/upload/menu/noodle/menu-16.jpg"
                },
                {
                    "id": 18,
                    "category": "เส้นและแกง",
                    "tag": "พร้อมขาย",
                    "name": "ขนมจีนแกงเขียวหวาน",
                    "description": "ขนมจีนเสิร์ฟกับแกงเขียวหวานไก่และผักสด",
                    "price": 110,
                    "image": "/assets/img/upload/menu/noodle/menu-17.jpg"
                },
                {
                    "id": 19,
                    "category": "เส้นและแกง",
                    "tag": "พร้อมขาย",
                    "name": "เส้นใหญ่ผัดซีอิ๊ว",
                    "description": "เส้นใหญ่เหนียวนุ่ม ผัดซีอิ๊วกับหมูและคะน้า",
                    "price": 89,
                    "image": "/assets/img/upload/menu/noodle/menu-18.jpg"
                },
                {
                    "id": 20,
                    "category": "ของทานเล่น",
                    "tag": "ทานเล่น",
                    "name": "ปอเปี๊ยะทอด",
                    "description": "ไส้ผักและวุ้นเส้นทอดกรอบ เสิร์ฟพร้อมน้ำจิ้มบ๊วย",
                    "price": 75,
                    "image": "/assets/img/upload/menu/snack/menu-19.jpg"
                },
                {
                    "id": 21,
                    "category": "ของทานเล่น",
                    "tag": "ขายดี",
                    "name": "ไก่ทอดสมุนไพร",
                    "description": "ไก่หมักสมุนไพรทอดกรอบ หอมตะไคร้และใบมะกรูด",
                    "price": 110,
                    "image": "/assets/img/upload/menu/snack/menu-20.jpg"
                },
                {
                    "id": 22,
                    "category": "ของทานเล่น",
                    "tag": "พร้อมขาย",
                    "name": "ลูกชิ้นทอดรวม",
                    "description": "ลูกชิ้นรวมทอดร้อน ๆ พร้อมน้ำจิ้มรสเด็ด",
                    "price": 70,
                    "image": "/assets/img/upload/menu/snack/menu-21.jpg"
                },
                {
                    "id": 23,
                    "category": "ของทานเล่น",
                    "tag": "เด็กชอบ",
                    "name": "เฟรนช์ฟรายส์",
                    "description": "มันฝรั่งทอดกรอบ โรยเกลือ เสิร์ฟพร้อมซอสมะเขือเทศ",
                    "price": 65,
                    "image": "/assets/img/upload/menu/snack/menu-22.jpg"
                },
                {
                    "id": 24,
                    "category": "ของทานเล่น",
                    "tag": "เผ็ด",
                    "name": "หมูมะนาว",
                    "description": "หมูนุ่มราดน้ำยำมะนาวกระเทียมพริกสด",
                    "price": 120,
                    "image": "/assets/img/upload/menu/snack/menu-23.jpg"
                },
                {
                    "id": 25,
                    "category": "ของทานเล่น",
                    "tag": "แซ่บ",
                    "name": "ยำวุ้นเส้นทะเล",
                    "description": "วุ้นเส้นเหนียวนุ่มคลุกน้ำยำกับกุ้งและปลาหมึก",
                    "price": 135,
                    "image": "/assets/img/upload/menu/snack/menu-24.jpg"
                },
                {
                    "id": 4,
                    "category": "เครื่องดื่ม",
                    "tag": "ขายดี",
                    "name": "ชาไทยเย็น",
                    "description": "ชาไทยหอมเข้ม เลือกระดับความหวานได้",
                    "price": 45,
                    "image": "/assets/img/upload/menu/drink/menu-25.jpg"
                },
                {
                    "id": 26,
                    "category": "เครื่องดื่ม",
                    "tag": "สดชื่น",
                    "name": "ชามะนาว",
                    "description": "ชาดำผสมน้ำมะนาวสด เปรี้ยวหวานสดชื่น",
                    "price": 45,
                    "image": "/assets/img/upload/menu/drink/menu-26.jpg"
                },
                {
                    "id": 27,
                    "category": "เครื่องดื่ม",
                    "tag": "พร้อมขาย",
                    "name": "กาแฟเย็น",
                    "description": "กาแฟเย็นเข้มข้น หวานมันแบบไทย",
                    "price": 50,
                    "image": "/assets/img/upload/menu/drink/menu-27.jpg"
                },
                {
                    "id": 28,
                    "category": "เครื่องดื่ม",
                    "tag": "พร้อมขาย",
                    "name": "น้ำลำไย",
                    "description": "ลำไยหอมหวาน เสิร์ฟเย็นพร้อมเนื้อลำไย",
                    "price": 45,
                    "image": "/assets/img/upload/menu/drink/menu-28.jpg"
                },
                {
                    "id": 29,
                    "category": "เครื่องดื่ม",
                    "tag": "พร้อมขาย",
                    "name": "น้ำเก๊กฮวย",
                    "description": "เก๊กฮวยหอมละมุน ดื่มง่ายคลายร้อน",
                    "price": 40,
                    "image": "/assets/img/upload/menu/drink/menu-29.jpg"
                },
                {
                    "id": 30,
                    "category": "เครื่องดื่ม",
                    "tag": "แนะนำ",
                    "name": "น้ำมะพร้าว",
                    "description": "น้ำมะพร้าวเย็นชื่นใจพร้อมเนื้อมะพร้าวอ่อน",
                    "price": 55,
                    "image": "/assets/img/upload/menu/drink/menu-30.jpg"
                },
                {
                    "id": 31,
                    "category": "ของหวาน",
                    "tag": "ตามฤดูกาล",
                    "name": "ข้าวเหนียวมะม่วง",
                    "description": "ข้าวเหนียวมูนหอมกะทิกับมะม่วงสุกหวาน",
                    "price": 95,
                    "image": "/assets/img/upload/menu/dessert/menu-31.jpg"
                },
                {
                    "id": 32,
                    "category": "ของหวาน",
                    "tag": "อุ่นใจ",
                    "name": "บัวลอยไข่หวาน",
                    "description": "บัวลอยนุ่มในน้ำกะทิหอม พร้อมไข่หวาน",
                    "price": 70,
                    "image": "/assets/img/upload/menu/dessert/menu-32.jpg"
                },
                {
                    "id": 33,
                    "category": "ของหวาน",
                    "tag": "เย็นชื่นใจ",
                    "name": "ทับทิมกรอบ",
                    "description": "ทับทิมกรอบสีสดในน้ำกะทิเย็นหอมหวาน",
                    "price": 65,
                    "image": "/assets/img/upload/menu/dessert/menu-33.jpg"
                },
                {
                    "id": 34,
                    "category": "ของหวาน",
                    "tag": "พร้อมขาย",
                    "name": "เฉาก๊วยนมสด",
                    "description": "เฉาก๊วยหนึบกับนมสดหวานละมุน",
                    "price": 60,
                    "image": "/assets/img/upload/menu/dessert/menu-34.jpg"
                },
                {
                    "id": 35,
                    "category": "ของหวาน",
                    "tag": "คลาสสิก",
                    "name": "กล้วยบวชชี",
                    "description": "กล้วยน้ำว้าในกะทิหอม หวานกำลังดี",
                    "price": 55,
                    "image": "/assets/img/upload/menu/dessert/menu-35.jpg"
                },
                {
                    "id": 36,
                    "category": "ของหวาน",
                    "tag": "ขายดี",
                    "name": "ไอศกรีมกะทิ",
                    "description": "ไอศกรีมกะทิสด เสิร์ฟพร้อมถั่วและข้าวเหนียว",
                    "price": 65,
                    "image": "/assets/img/upload/menu/dessert/menu-36.jpg"
                },
                {
                    "id": 37,
                    "category": "ชุดเซ็ต",
                    "tag": "คุ้มค่า",
                    "name": "ชุดครอบครัวบ้านดี",
                    "description": "ต้มยำกุ้ง ผัดผักรวม ไก่ทอด และข้าวสวยสำหรับ 4 คน",
                    "price": 590,
                    "image": "/assets/img/upload/menu/set/menu-37.jpg"
                },
                {
                    "id": 38,
                    "category": "ชุดเซ็ต",
                    "tag": "ยอดนิยม",
                    "name": "ชุดออฟฟิศมื้อกลางวัน",
                    "description": "อาหารจานเดียว 5 กล่อง พร้อมเครื่องดื่มเย็น",
                    "price": 499,
                    "image": "/assets/img/upload/menu/set/menu-38.jpg"
                },
                {
                    "id": 39,
                    "category": "ชุดเซ็ต",
                    "tag": "แนะนำ",
                    "name": "ชุดอิ่มคู่",
                    "description": "เมนูหลัก 2 รายการ ของทานเล่น 1 รายการ และเครื่องดื่ม 2 แก้ว",
                    "price": 299,
                    "image": "/assets/img/upload/menu/set/menu-39.jpg"
                },
                {
                    "id": 40,
                    "category": "ชุดเซ็ต",
                    "tag": "เด็กชอบ",
                    "name": "ชุดเด็กกินง่าย",
                    "description": "ข้าวไข่เจียว เฟรนช์ฟรายส์ และน้ำผลไม้",
                    "price": 159,
                    "image": "/assets/img/upload/menu/set/menu-40.jpg"
                },
                {
                    "id": 41,
                    "category": "ชุดเซ็ต",
                    "tag": "สดชื่น",
                    "name": "ชุดเครื่องดื่มรวม",
                    "description": "ชาไทย ชามะนาว น้ำเก๊กฮวย และน้ำลำไย",
                    "price": 160,
                    "image": "/assets/img/upload/menu/set/menu-41.jpg"
                },
                {
                    "id": 42,
                    "category": "ชุดเซ็ต",
                    "tag": "หวานพอดี",
                    "name": "ชุดของหวานหลังมื้อ",
                    "description": "ข้าวเหนียวมะม่วง บัวลอย และเฉาก๊วยนมสด",
                    "price": 199,
                    "image": "/assets/img/upload/menu/set/menu-42.jpg"
                }
                ]
            }
        })
    }
}
