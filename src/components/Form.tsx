import React, { useState } from 'react'

const Form = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <section className='container h-screen flex flex-col justify-center items-center gap-8 mx-auto'>
      <h1 className=" text-primary text-4xl ">
        Said Jr assassino de aluguel
      </h1>
      <p className="text-secondary">
        lutador de mma
      </p>
      <form className="flex flex-col w-1/2 space-y-8" onSubmit={(e) => handleSubmit(e)} >
        <input type="text" placeholder="Tubias" className='form-input' onChange={(e) => setData({ ...data, name: e.target.value })} />
        <input type="email" placeholder="email" className="form-input" onChange={(e) => setData({ ...data, email: e.target.value })} />
        <input type="tel" placeholder="Numero de telefone" className="form-input" onChange={(e) => setData({ ...data, phone: e.target.value })} />
        <input type="text" placeholder="endereco" className="form-input" onChange={(e) => setData({ ...data, address: e.target.value })} />
        <input type="submit" value="Enviar" className='rounded-lg bg-red-500 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 active:py-6z focus:outline-zinc-900 py-4 ' />
      </form>
    </section >
  )
}

export default Form