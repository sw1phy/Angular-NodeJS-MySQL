//imports

const express=require("express")
app = express()
const cors=require("cors")
const port=process.env.port || 3000
const mysql2=require("mysql2")

//create server
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    "extended":false
}))
const controller=require("./controller/controller")
app.use(controller)

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
    
})




//create mysql connection & pool





//create controller-CRUD functionalities
