type Users = {
    name: string,
    age: number,
    email: string
}
export async function getUsersData(){
    const users = await fetch('http://localhost:3000/api/detail');
    // console.log('users', users);
    if(!users.ok){
        throw new Error('Failed to fetch data')
    }
    
    return users.json()
}