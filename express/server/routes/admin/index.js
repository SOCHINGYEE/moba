module.exports = (app) => {
  const express = require("express");
  const jwt = require("jsonwebtoken");
  const AdminUser = require("../../models/adminUsers");
  const assert = require("http-assert");
  const router = express.Router({
    mergeParams: true,
  });

  router.post("/", async (req, res) => {
    const model = await req.Model.create(req.body);
    res.send(model);
  });

  router.get("/",async (req, res) => { 
      let queryOptions = {};
      if (req.Model.modelName == "Category") {
        queryOptions.populate = "parent";
      }
      const items = await req.Model.find().setOptions(queryOptions)
      res.send(items);
    }
  );

  router.get("/:id", async (req, res) => {
    const model = await req.Model.findById(req.params.id);
    res.send(model);
  });

  router.put("/:id", async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
    res.send(model);
  });

  router.delete("/:id", async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body);
    res.send({
      success: true,
    });
  });

  const authMiddleWare = require('../../middleware/auth')
  
  
  app.use(
    "/admin/api/rest/:resource", authMiddleWare(), async (req, res, next) => {
      req.Model = require(`../../models/${req.params.resource}`);
      next();
    },
    router
  );



  const multer = require("multer");

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + "../../../uploads/" + req.params.resource);

    },
  });
  const upload = multer({ storage });
  app.post(
    "/admin/api/upload/:resource",authMiddleWare(),
    upload.single("file"),
    async (req, res) => {
      const file = req.file;
      let resource = req.params.resource;
      file.url = `http://localhost:3000/uploads/${resource}/${file.filename}`;
      res.send(file);
    }
  ),
    app.post("/admin/api/login", async (req, res) => {
      let { username, password } = req.body;

      let user = await AdminUser.findOne({ username }).select("+password");
//{ _id: 5f7d92bb961512246c0938a1,
// password:
// '$2b$10$ykj9/jimuYSwBira9yJP7.mNC4jGHJNlnILL.Tf3VDiBmXGLWPtBO',
// username: 'admin',
// __v: 0 }
      assert(user, 422, "用户不存在");
   

      let isValid = require("bcrypt").compareSync(password, user.password); //user可打印password字段
      
      assert(isValid, 422, "用户名或密码错误");

      let token = jwt.sign({ id: user._id }, app.get("secret"));
      res.send({ token });
    });

    //捕获错误 assert抛出的
    app.use(async (err, req, res, next) => {
      console.log('这是状态码',err)
      res.status(err.status || '').send({
       message:err.message
     })
    })
    
};
