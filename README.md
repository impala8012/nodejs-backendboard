# nodejs 後端部落格
### [連結](https://immense-ravine-88548.herokuapp.com/)

![](https://i.imgur.com/NMgeQyY.png)

利用 node.js 與 express 框架實作出的部落格，最後部署於 Heroku 主機

- 管理員資訊
帳號：admin
密碼：admin

## 功能介紹
### 使用者
- 閱讀文章
- 也可以利用分類的方式閱讀自己想要的該分類文章

![](https://i.imgur.com/GlIszir.gif)

### 管理員
- 新增、編輯、刪除文章。
- 新增、編輯、刪除分類。

![](https://i.imgur.com/R6dDRAt.gif)

## 使用工具
- node.js
- Express: 利用 MVC 架構實作簡易部落格。
- Sequelize: 利用 ORM 形式進行資料庫的關聯與操作。
- EJS: 部落格個分頁模板引擎。
- Heroku 主機部屬

### Middleware
- body-parser：解析 JSON、XML、URL-encoded 格式的請求。
- express-session：管理 Session
- connect-flash：顯示錯誤/成功訊息
