import React, { useEffect, useState } from 'react'

interface ItemProps {
    name: string;
    email: number;
}

const Item = ({ name, email }: ItemProps) => {
    return (
        <li className='text-3xl font-sans text-cyan-300'>{name}</li>
    )
}

const Resultados = () => {
    const [users, setUsers] = useState<ItemProps[]>([])

    const fetchUsers = async () => {
        try {
            const resp = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await resp.json()
            setUsers(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <section className="container flex flex-col gap-8 justify-center items-center mx-auto h-screen">
            <h1 className="text-white text-5xl font-bold"> Alex Pereira Dream Killer </h1>
            <ul className="flex flex-col items-center py-6">
                {users?.length !== 0 ? (users.map((chaves) => (
                    <Item
                        key={chaves.name}
                        name={chaves.name}
                        email={chaves.email}
                    />
                ))) : (<p>asdfasdf</p>)}
            </ul>
        </section>

    )
}

export default Resultados
