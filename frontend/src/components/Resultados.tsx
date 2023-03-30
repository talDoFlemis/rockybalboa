import React, { useEffect, useState } from 'react'

interface ItemProps {
    name: string;
    number: number;
    email: number;
    address: string;
}

const Item = ({ name, email, number, address }: ItemProps) => {
    return (
        <li className="flex gap-8 flex-wrap">
            <div className="text-3xl bg-gradient-to-r from-cyan-500 via-white to-pink-500 text-orange-700">{name}</div>
            <div className="text-3xl bg-gradient-to-r from-cyan-500 via-white to-pink-500 text-orange-700">{number}</div>
            <div className='bg-slate-400 font-sans text-3xl underline decoration-white text-white '>{email}</div>
            <div className='bg-gradient-to-r from-orange-200 to-orange-50 font-sans text-3xl text-black '>{address}</div>
        </li>

    )
}

const Resultados = () => {
    const [users, setUsers] = useState<ItemProps[]>([])

    const fetchUsers = async () => {
        try {
            const resp = await fetch("http://localhost:4000/dados")
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
                        number={chaves.number}
                        address={chaves.address}
                    />
                ))) : (<p>Nenhum fera foi encontrado</p>)}
            </ul>
        </section>

    )
}

export default Resultados
