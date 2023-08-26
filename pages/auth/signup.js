import Form from "@/component/auth/form";


import { getSession } from "next-auth/react"
import { useRouter } from "next/router";

export default function signup(){
    const router = useRouter()
    const onsubmit = async (email, password,firstn , lastn)=>{
        console.log(email,password,firstn , lastn)
        try{
           const respo =  await fetch("/api/auth/signup",{
            method:"POST",
            body:JSON.stringify({email,password,firstn , lastn}),
            headers:{
                "Content-Type": "application/json"
            }
        }) 
        if (respo.ok) {
            router.push("/success")
        }
        }catch(err){
            console.error
        }
      
        }
    return(
        <>
        <Form signin={false} onformsubmit = {onsubmit} />
        </>
    )
}
export async function getServerSideProps({req}) {
    const session = await getSession({req})
    if (session) {
        return{
            redirect:{
               destination : "/profile",
               permanent :false
            }
        }   
    }return{
        props:{
            session
        }
        }
    }
