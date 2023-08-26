import { getSession } from "next-auth/react"

export default function (){
return(
    <>
    <div class="mar-left">
    <div><h1>Profile page</h1></div>
    
    </div>
    </>
)
}
export async function getServerSideProps({req}) {
    const session = await getSession({req})
    if (!session) {
        return{
            redirect:{
               destination : "/auth/login",
               permanent :false
            }
        }   
    }return{
        props:{
            session
        }
        }
    }