const express = require("express");
const cookieParser = require("cookie-parser");
const cryto = require("crypto");
const jwt = require("jsonwebtoken");
const { urlencoded, json } = require("body-parser");
const fs = require("fs");
const path = require("path");
const joi = require('joi');

const app = express();

const port = process.env.PORT || 8000;

app.use(cookieParser());
app.use(json());
app.use(urlencoded({ extended: true }));

let users = [];
let todos = []

if (fs.existsSync("users.json")) {
  try {
    const all = fs.readFileSync("users.json", "utf-8");
    users = JSON.parse(all);
  } catch (err) {
    console.error("Error parsing users.json:", err);
  }
}
if (fs.existsSync("todos.json")) {
  try {
    const all = fs.readFileSync("todos.json", "utf-8");
    todos = JSON.parse(all);
  } catch (err) {
    console.error("Error parsing todos.json:", err);
  }
}
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.post("/register", async (req, res) => {
  const { email, firstName, lastName, password } = req.body;
  if (!data.find((e) => e.email === email)) {
    const user = {
      _userId: cryto.randomBytes(16).toString("hex"),
      id: data.length + 1,
      firstName,
      lastName,
      email,
      password: cryto.createHash("sha256").update(password).digest("hex"),
      todos: [],
    };
    users.push(user);
    try {
      await fs.promises.writeFile("users.json", JSON.stringify(data));
      console.log("User is registered successfully !");
      const token = jwt.sign(user, "my-secr3t-da", { expiresIn: "30 days" });
      res.cookie("__token", token, {
        httpOnly: true,
        secure: true,
        maxAge: 2592000000,
      });
      res
        .status(201)
        .json({ status: 201, message: "User is registered successfully !" })
        .redirect("/");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error saving user");
    }
  } else {
    res
      .status(409)
      .json({ status: 409, message: "User is registered before..." });
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (users.find((e) => e.email === email)) {
    const storedPassword = users.find((e) => e.email === email).password;
    const hashedPassword = cryto.createHash("sha256").update(password).digest('hex');
    const passwordMatch = cryto.timingSafeEqual(
      Buffer.from(hashedPassword),
      Buffer.from(storedPassword)
    );
    if (passwordMatch) {
      const token = jwt.sign(users.find(e=>e.email === email), "my-secr3t-da", {
        expiresIn: "30 days",
      });
      res.status(200).cookie("__token", token, {
        httpOnly: true,
        secure: true,
        maxAge: 2592000000,
      }).redirect('/');
    } else {
        res.status(409).json({status:409,message:"Email or password is incorrect"})
    }
  } else {
    res.send(404).json({status:404,message:"We can not find user like this"})
  }
});

app.post('/logout',(req,res)=>{
    res.clearCookie("__token").redirect('/')
})

const todoScheme = joi.object({
    body:joi.string().required()
})
app.post('/todo',async (req,res)=>{
  if(req.cookies.__token){
    const {value,error} = todoScheme.validate(req.body)
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const len = todos.filter(e=>e.owner === jwt.verify(req.cookies.__token, 'my-secr3t-da')._userId).length
    const newTodo = {
      owner:jwt.verify(req.cookies.__token, 'my-secr3t-da')._userId,
      id:len + 1,
      body:value.body,
      createdAt:new Date()
    }
    todos.push(newTodo)
    try {
      await fs.promises.writeFile('todos.json',JSON.stringify(todos))
      console.log('Data is received successfully !');
      res.status(201).send('Received')
    } catch (err) {
      console.error(err);
      res.status(500).send("Error saving your data");
    }
  }else{
    res.status(401).json({status:401,message:'Unauthorized access'})
  }
})

app.delete('/delete/:id',async (req,res)=>{
  const {id} = req.params
  if(req.cookies.__token){
    if (id !== undefined) {
      const lastTodos = todos.filter(e=>e !== todos.find(el=>el.owner === jwt.verify(req.cookies.__token,'my-secr3t-da')._userId && el.id === parseInt(id) ))
      try {
        await fs.promises.writeFile('todos.json',JSON.stringify(todos))
        res.status(202).json({status:202,message:'Deleted successfully !'})
      } catch (error) {
        console.error(error)
        res.status(500).send("Error saving your data");
      }
    }
  }else{
    res.status(401).json({status:401,message:'Unauthorized access'})
  }
})

app.delete('/user/delete/:userId',async (req,res)=>{
  if(req.cookies.__token){
    const {userId} = req.params
    const lastUser = users.filter(e=>e._userId !== userId)
    try {
      await fs.promises.writeFile('users.json',JSON.stringify(lastUser))
    } catch (err) {
      console.error(err)
      res.status(500).send("Error saving your data");
    }
  }else{
    res.status(401).json({status:401,message:'Unauthorized access'})
  }
})

app.listen(port, () => {
  console.log(`APP_IS_RUNNING ON PORT ${port}`);
});