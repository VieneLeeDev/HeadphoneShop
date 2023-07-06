import item_01 from "../assets/img/item_001.webp";
import item_03 from "../assets/img/item_003.webp";
import item_02 from "../assets/img/item_002.webp";
import item_04 from "../assets/img/item_004.webp";
import item_05 from "../assets/img/item_005.webp";
import item_06 from "../assets/img/item_006.webp";
import emplyee_1 from "../assets/img/employee_1.jpg";
import emplyee_2 from "../assets/img/employee_2.jpg";
import emplyee_3 from "../assets/img/employee_3.webp";
const products = [
  {
    id: "1",
    nameItem: "Sony WH-1000XM5",
    description:
      "Tai nghe sở hữu thiết kế kiểu choàng đầu phong cách cá tính. Khi không sử dụng, bạn có thể gấp gọn lại và thuận tiện cho bạn mang theo trong công việc hay bất cứ nơi đâu. Đặc biệt, bao bì tai nghe không sử dụng nhựa thay vào đó là các vật liệu tái chế an toàn cho môi trường.",
    price: 790000,
    img: item_02,
  },
  {
    id: "2",
    nameItem: "Soul Ultra Dynamic 2",
    description:
      "Tai nghe chụp tai SOUL Ultra Dynamic 2 có ngoại hình trẻ trung, thiết kế đơn giản. Đặc biệt, mẫu tai nghe không dây dạng chụp tai này có thể điều chỉnh được kích thước của sản phẩm một cách linh hoạt, để đeo vừa vặn với từng người.",
    price: 790000,
    img: item_03,
  },
  {
    id: "3",
    nameItem: "Edifier W820NB",
    description:
      "Tai nghe Edifier W820NB hiện nay đang được nhiều người lựa chọn bởi tính hiện đại và thiết kế nhỏ gọn. Được biết tai nghe chụp tai Edifier này hỗ trợ nhiều tính năng tiện lợi cho người dùng.",
    price: 1050000,
    img: item_04,
  },
  {
    id: "4",
    nameItem: "Havit i62",
    description:
      "Dù chưa gây tiếng vang lớn tại thị trường Việt Nam nhưng một vài sản phẩm tai nghe không dây gần đây của HAVIT đã tạo dựng được tiếng vang lớn. Điển hình như tai nghe chụp tai HAVIT I62 gây ấn tượng với rất nhiều người dùng ở khả năng thể hiện chất âm khác biệt.",
    price: 390000,
    img: item_01,
  },
  {
    id: "5",
    nameItem: "Motorola Pulse Bass 200 (có dây)",
    description:
      "Motorola Pulse bass 200 nghe nói có chất âm ấm áp ấn tượng và thiết kế phong cách. Điểm tuyệt vời của chiếc tai nghe còn nhiều hơn thế đang chờ đợi bạn cùng khám phá. Hãy xem đoạn mô tả sau để hiểu rõ về chiếc tai nghe xinh đẹp này nhé!",
    price: 650000,
    img: item_05,
  },
  {
    id: "6",
    nameItem: "Gaming Logitech G435",
    description:
      "Đối với game thủ thì tai nghe gaming là một trong những thiết bị công nghệ được lựa chọn nhiều và được sự ưu ái đặc biệt bởi sự cần thiết và tiện ích của nó. Tai nghe gaming Logitech G435 là 1 sản phẩm hỗ trợ nâng cao trải nghiệm.",
    price: 1550000,
    img: item_06,
  },
  {
    id: "7",
    nameItem: "Gaming Logitech G435",
    description:
      "Đối với game thủ thì tai nghe gaming là một trong những thiết bị công nghệ được lựa chọn nhiều và được sự ưu ái đặc biệt bởi sự cần thiết và tiện ích của nó. Tai nghe gaming Logitech G435 là 1 sản phẩm hỗ trợ nâng cao trải nghiệm.",
    price: 1550000,
    img: item_06,
  },
  {
    id: "8",
    nameItem: "Gaming Logitech G435",
    description:
      "Đối với game thủ thì tai nghe gaming là một trong những thiết bị công nghệ được lựa chọn nhiều và được sự ưu ái đặc biệt bởi sự cần thiết và tiện ích của nó. Tai nghe gaming Logitech G435 là 1 sản phẩm hỗ trợ nâng cao trải nghiệm.",
    price: 1550000,
    img: item_06,
  },
  {
    id: "9",
    nameItem: "Gaming Logitech G435",
    description:
      "Đối với game thủ thì tai nghe gaming là một trong những thiết bị công nghệ được lựa chọn nhiều và được sự ưu ái đặc biệt bởi sự cần thiết và tiện ích của nó. Tai nghe gaming Logitech G435 là 1 sản phẩm hỗ trợ nâng cao trải nghiệm.",
    price: 1550000,
    img: item_06,
  },
  {
    id: "10",
    nameItem: "Gaming Logitech G435",
    description:
      "Đối với game thủ thì tai nghe gaming là một trong những thiết bị công nghệ được lựa chọn nhiều và được sự ưu ái đặc biệt bởi sự cần thiết và tiện ích của nó. Tai nghe gaming Logitech G435 là 1 sản phẩm hỗ trợ nâng cao trải nghiệm.",
    price: 1550000,
    img: item_06,
  },
  {
    id: "11",
    nameItem: "Gaming Logitech G435",
    description:
      "Đối với game thủ thì tai nghe gaming là một trong những thiết bị công nghệ được lựa chọn nhiều và được sự ưu ái đặc biệt bởi sự cần thiết và tiện ích của nó. Tai nghe gaming Logitech G435 là 1 sản phẩm hỗ trợ nâng cao trải nghiệm.",
    price: 1550000,
    img: item_06,
  },
  {
    id: "12",
    nameItem: "Gaming Logitech G435",
    description:
      "Đối với game thủ thì tai nghe gaming là một trong những thiết bị công nghệ được lựa chọn nhiều và được sự ưu ái đặc biệt bởi sự cần thiết và tiện ích của nó. Tai nghe gaming Logitech G435 là 1 sản phẩm hỗ trợ nâng cao trải nghiệm.",
    price: 1550000,
    img: item_06,
  },
  {
    id: "13",
    nameItem: "Gaming Logitech G435",
    description:
      "Đối với game thủ thì tai nghe gaming là một trong những thiết bị công nghệ được lựa chọn nhiều và được sự ưu ái đặc biệt bởi sự cần thiết và tiện ích của nó. Tai nghe gaming Logitech G435 là 1 sản phẩm hỗ trợ nâng cao trải nghiệm.",
    price: 1550000,
    img: item_06,
  },
];

const employess = [
  {
    avatar: emplyee_1,
    firstName: "David",
    lastName: "Jamil",
    department: "Manager",
    gender: "Female",
    email: "Jamil@Email.com",
    phoneNumber: "0822641415",
  },
  {
    avatar: emplyee_2,
    firstName: "Justin",
    lastName: "Jodan",
    department: "Manager",
    gender: "Male",
    email: "Jodan@Email.com",
    phoneNumber: "082123445",
  },
  {
    avatar: emplyee_3,
    firstName: "Thomas",
    lastName: "Jevevermind",
    department: "Manager",
    gender: "Male",
    email: "Jevevermind@Email.com",
    phoneNumber: "09907966860",
  },
];
export { products, employess };
