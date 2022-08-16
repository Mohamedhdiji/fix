const express=require('express');
const app=express();
const connectDb=require("./config/ConnectDb")
connectDb();
app.use(express.json())
const user=require("./routes/user");
app.use("/user",user)
const PORT=process.env.PORT||6000;
app.listen(PORT,err=>err?console.log(err):console.log(`the Server is Runing on PORT ${PORT}`))