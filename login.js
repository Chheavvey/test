
function loginUser(username, password) {
    // Thực hiện truy vấn kiểm tra thông tin đăng nhập
    const sql = 'SELECT * FROM users WHERE username = ?';
    const values = [username];
  
    connection.query(sql, values, (err, results) => {
      if (err) {
        console.error('Lỗi khi đăng nhập:', err);
      } else {
        // So sánh mật khẩu đã mã hóa
        if (results.length > 0 && bcrypt.compareSync(password, results[0].password)) {
          console.log('Đăng nhập thành công!');
          // Thực hiện các hành động cần thiết sau khi đăng nhập
        } else {
          console.log('Thông tin đăng nhập không chính xác.');
        }
      }
    });
  }
  
  // Sử dụng hàm đăng nhập
  loginUser('nguoidung', 'matkhau');
  