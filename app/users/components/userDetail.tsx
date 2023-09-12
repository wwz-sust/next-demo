'use client'
type Users = {
    name: string,
    age: number,
    email: string
}

export default function Detail({users}:{users:Users}){

    return (
    <ul>
        <li>{users.name}</li>
        <li>{users.email}</li>
        <li>{users.age}</li>
    </ul>
    )
}