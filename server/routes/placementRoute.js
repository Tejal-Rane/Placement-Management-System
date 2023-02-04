const mongoose= require('mongoose')
const router=require('express').Router()
const Placement=require('../model/placement')

router.get("/get-placement/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const allplacement=await Placement.findById(id);
        res.status(200).json(allplacement);
        console.log('Data received');
    }catch(error)
    {
        console.log(error);
    }
});