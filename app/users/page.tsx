import { getUsersData } from "../lib/getUsersData"
import Detail from "./components/userDetail";
export default async function UsersPage(){
    const users = await getUsersData();
    console.log(users);
    
    return (
        <main>
            <h2>users:{users.name}</h2>
            <Detail users={users}/>
        </main>
    )
}