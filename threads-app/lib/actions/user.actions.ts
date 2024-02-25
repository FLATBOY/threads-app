"use server"

import { revalidatePath } from "next/cache";
import User from "../models/user.model"
import { ConnectToDB } from "../mongoose"

interface Params{
    userId: string,
    username:string,
    bio:string,
    name:string,
    image:string,
    path:string,  
}

export async function updateUser({
    name,
    path,
    username,
    userId,
    bio,
    image,
}: Params): Promise<void> {
    ConnectToDB();
    try {
        await User.findOneAndUpdate(
            { id: userId },
            { 
                username: username.toLowerCase(),
                name,
                bio,
                image,
                onboarded: true,
            },
            { upsert: true }
        );
    
        if(path === '/profile/edit'){
            revalidatePath(path);
        }
    } catch (error:any) {
        throw new Error(`Failed to create/update user: ${error.message}`)
    }
    
}