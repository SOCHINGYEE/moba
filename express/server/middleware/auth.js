module.exports = options =>  async (req, res, next) => {
    const assert = require('http-assert')
    const AdminUser = require('../models/adminUsers')
    const jwt = require("jsonwebtoken");
        let token = String(req.headers.authorization || "")
          .split(" ")
          .pop(); //在前端的路由拦截器加了，有可能为空
        assert(token, 401, "请提供token")
        let { id } = jwt.verify(token, req.app.get("secret")); 
        //解密token，{ id: '5f85c870efb2c42095e0b602', iat: 1602998564 }ID是MongoDB的ID
        assert(id, 401, "无效的token")
        // let token = jwt.sign({ id: user._id }, app.get("secret"));
        req.user = await AdminUser.findById(id);
        assert(req.user, 401, "用户不存在")
        console.log(req.user); //{ _id: 5f85c870efb2c42095e0b602, username: 'admin', __v: 0 }
        await next();
      }
