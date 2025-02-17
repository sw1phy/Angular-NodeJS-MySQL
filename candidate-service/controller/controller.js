const express=require("express")
const router=express.Router()
const db=require("../db/db")

router.get("/api/v1/candidates",(req,res)=>{
    const sql="Select * from candidate";
    db.query(sql,(err, result)=>{
        if(err) return res.json(err);
        return res.json(result);
    })
})

router.post("/api/v1/candidates",(req,res)=>{
    const sql="insert into candidate(`name`,`email`,`address`) values(?,?,?)";
    db.query(sql,[req.body.name,req.body.email,req.body.address],(err, result)=>{
        if(err) return res.json(err);
        return res.json(result);
    })
})

router.put("/api/v1/candidates/:id",(req,res)=>{
    const sql="update candidate set `name`=?,`email`=?,`address`=? where id=?";
    const id=Number(req.params.id);
    db.query(sql,[req.body.name,req.body.email,req.body.address, id],(err, result)=>{
        if(err) return res.json(err);
        return res.json(result);
    })
})

router.delete("/api/v1/candidates/:id",(req,res)=>{
    const sql="delete from candidate where id=?";
    const id=Number(req.params.id);
    db.query(sql,[id],(err, result)=>{
        if(err) return res.json(err);
        return res.json(result);
    })
})

module.exports=router;