/*
module.exports = app =>{
    const express = require("express");
    const router = express.Router();
    const Category = require("../../modules/Category");

    //创建分类
    router.post('/categories',async (req,res)=>{
        const model = await Category.create(req.body);
        res.send(model)
    })

    //获取分类数据
    router.get("/categories",async (req,res)=>{
        const items = await Category.find().populate('parent').limit(10);
        res.send(items)
    })

    //用ID查询分类
    router.get("/categories/:id",async (req,res)=>{
        //populate表示从数据库中去除关联的字段
        const model = await Category.findById(req.params.id);
        res.send(model)
    })

    //修改分类
    router.put("/categories/:id",async (req,res)=>{
        const model = await Category.findByIdAndUpdate(req.params.id,req.body);
        res.send(model);
    })

    //删除分类
    router.delete("/categories/:id",async (req,res)=>{
        console.log(req);
        await Category.findByIdAndDelete(req.params.id);
        res.send({
            success:true
        })
    })

    app.use('/admin/api/',router);
}*/


//通用CRUD接口


module.exports = app => {
    const express = require("express");

    const assert = require("http-assert");

    const jwt = require("jsonwebtoken");

    const AdminUser = require("../../modules/AdminUser");

    const router = express.Router({
        mergeParams: true,
        useFindAndModify: false,
    });

    //创建
    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body);
        res.send(model)
    });

    //获取数据
    router.get("/", async (req, res) => {
        let queryOptions = {};
        if (req.Model.modelName === "Category") {
            queryOptions.populate = 'parent';
        }
        const items = await req.Model.find().setOptions(queryOptions);
        res.send(items)
    });

    //用ID查询
    router.get("/:id", async (req, res) => {
        //populate表示从数据库中去除关联的字段
        const model = await req.Model.findById(req.params.id);
        res.send(model)
    })

    //修改
    router.put("/:id", async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
        res.send(model);
    })

    //删除
    router.delete("/:id", async (req, res) => {
        console.log(req);
        await req.Model.findByIdAndDelete(req.params.id);
        res.send({
            success: true
        })
    })

    //登录校验中间件
    const authMiddleware = require("../../middleware/auth");

    const resourceMiddleware = require("../../middleware/resource");

    app.use('/admin/api/rest/:resource', authMiddleware(),resourceMiddleware(), router);


    const multer = require("multer");
    const upload = multer({dest: __dirname + '../../../uploads'})
    app.post("/admin/api/uploads",authMiddleware(), upload.single('file'), async (req, res) => {
        const file = req.file;
        file.url = `http://localhost:3000/uploads/${file.filename}`;
        res.send(file);
    });


    app.post("/admin/api/login", async (req, res) => {
        const {username, password} = req.body;
        const user = await AdminUser.findOne({username}).select("+password");
        //根据用户名查找用户
        assert(user,422,"用户不存在");
/*        if (!user) {
            return res.status(422).send({
                message: "该用户不存在!"
            })
        }*/
        //校验密码
        const isValid = require("bcryptjs").compareSync(password, user.password);
        assert(isValid,422,"密码错误");
/*        if (!isValid) {
            return res.status(422).send({
                message: "密码错误!"
            })
        }*/
        //返回token
        const token = jwt.sign({id: user._id}, app.get("secret"));
        res.send({token})
    })
    //错误处理函数
    app.use(async (err,req,res,next)=>{
        res.status(err.statusCode || 500).send({
            message:err.message
        })
    })

    app.get("/admin/api/getUser",authMiddleware(),async (req,res)=>{
        res.send(req.user)
    })
};