import { User } from "../models/user";
import { Request, Response,NextFunction } from "express";

export const signUp = (req:Request,res:Response,next:NextFunction)=>{
    const email=req.body.email;
    const userName=req.body.userName;
    const password=req.body.password

    const user =new User({
        username:userName,
        email:email,
        password:password
    });
    return user.save()
    .then(result=>{
        res.status(201).json( {
            message:'user created!',
            userId:result._id
        })
    })
    .catch(err=>{
        console.log(err);
    })

}