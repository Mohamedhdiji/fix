const express=require("express");
const {signUp,login, getUser} =require("../controllers/user.controller");
const { auth } = require("../middleware/auth");
const { singUpRules ,validator} = require("../middleware/validator");
router=express.Router();
//to add a new user
router.post("/singUp",singUpRules(),validator,signUp)
router.post("/login",login)
router.get("/get",auth,getUser)
module.exports=router