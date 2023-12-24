const express = require('express');
const session = require('express-session');
const app = express();

// Sử dụng express-session middleware
app.use(session({
  secret: 'your-secret-key', // Key bí mật để mã hóa phiên
  resave: false,
  saveUninitialized: true,
}));

app.post('/login', (req, res) => {

  req.session.user = {
    username: 'nguoidung',

  };
  res.send('Đăng nhập thành công!');
});

// Kiểm tra trạng thái đăng nhập
app.get('/profile', (req, res) => {
  if (req.session.user) {
    // Nếu có thông tin người dùng trong phiên, hiển thị trang profile
    res.send(`Xin chào ${req.session.user.username}!`);
  } else {
    // Nếu không có thông tin người dùng, chuyển hướng đến trang đăng nhập
    res.redirect('/login');
  }
});

// Đăng xuất và hủy phiên làm việc
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Lỗi khi đăng xuất:', err);
    } else {
      res.redirect('/');
    }
  });
});


const port = 3000;
app.listen(port, () => {
  console.log(`Ứng dụng đang lắng nghe tại http://localhost:${port}`);
});
