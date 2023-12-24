

// Đăng ký người dùng
function registerUser(username, password) {
  // Mã hóa mật khẩu trước khi lưu vào CSDL
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Thực hiện truy vấn chèn thông tin người dùng vào bảng users
  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  const values = [username, hashedPassword];

  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error('Lỗi khi đăng ký:', err);
    } else {
      console.log('Đăng ký thành công!');
    }
  });
}

// Sử dụng hàm đăng ký
registerUser('nguoidung', 'matkhau');
