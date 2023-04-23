const express=require('express')


const app=express()


app.get('/',(req,res)=>{
    res.send("Wellcome to thr home")
})

app.listen(3000,()=>{
    console.log("WWWW")
})