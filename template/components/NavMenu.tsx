"use client";
import * as z from "zod";
import Link from "next/link";
import { signIn,signOut,useSession } from "next-auth/react";
import { Form } from "./ui/form";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
function AuthButton (){

    const {data: session}= useSession();

  
    if(session){
        return(
            <>
            {session?.user?.name}
            <br/>
            <button onClick={()=>signOut()}>Sign out</button>
            
            </>
        )
    }
    return (
        <>
        Not signed in <br/>
        <button onClick={()=>signIn()}>Sign in</button>

        
        </>
    )
}

export default function NavMenu(){
    return(
        <div className="pt-[100px]">
            <AuthButton />


        </div>
    )
}