

// Tạo kết nối đến MySQL server
const connection = mysql.createConnection({
  host: 'localhost',  // Địa chỉ của MySQL server
  user: 'root',       // Tên người dùng MySQL
  password: 'password',   // Mật khẩu MySQL
  database: 'your_database_name' // Tên của database bạn muốn kết nối
});

connection.connect((err) => {
  if (err) {
    console.error('Lỗi kết nối:', err);
  } else {
    console.log('Kết nối thành công!');
    
    
    
    // Đóng kết nối sau khi hoàn tất công việc
    connection.end((err) => {
      if (err) {
        console.error('Lỗi đóng kết nối:', err);
      } else {
        console.log('Đã đóng kết nối!');
      }
    });
  }
});
