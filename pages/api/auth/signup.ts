import { connectToMongoDB } from "../../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/user";
import { hash } from "bcryptjs";
import mongoose from "mongoose";

interface Iuser {
    _id: string,
    email: string,
    fullName: string
}
const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    await connectToMongoDB().catch(err => res.json(err));

    if(req.method === "POST"){

        if(!req.body){
            return res.status(400).json({error: "Data is missing"});
        }

        const {email,fullName, password} = req.body;


        const userexists = await User.findOne({email: email})

        if(userexists){
            return res.status(409).json({error: "User already exists"});
        }else{
            
            const hashedpassword = await hash(password,12)

            User.create({
                fullName,
                email,
                password: hashedpassword,
            }).then((data: Iuser) => {
                // Handle success
                const user = {
                    email: data.email,
                    fullName: data.fullName,
                    _id: data._id,
                };
                return res.status(201).json({ success: true, user });
            }).catch((error) => {
                // Handle errors
                if (error instanceof mongoose.Error.ValidationError) {
                    for (let field in error.errors) {
                        const msg = error.errors[field].message;
                        return res.status(409).json({ error: msg });
                    }
                } else {
                    // Handle other types of errors
                    return res.status(500).json({ error: "Internal Server Error" });
                }
            });
            
        }
    }else{
        return res.status(405).json({error: "Method not allowed"});
    }
}
export default handler;