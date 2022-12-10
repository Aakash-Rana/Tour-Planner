const express = require('express');
const app=express();

const PORT=8484;
app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})

app.get("/",(req,res)=>{
    res.status(200).send("WELCOME TO MY PAGE");
})