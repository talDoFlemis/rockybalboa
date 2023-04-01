import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const resp = await fetch("http://localhost:4000/criar", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      console.log(resp)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <section className="container flex flex-col gap-8 justify-center items-center mx-auto h-screen">
      <h1 className="text-4xl text-primary">Said Jr assassino de aluguel</h1>
      <p className="text-secondary">lutador de mma</p>
      <form
        className="flex flex-col space-y-8 w-1/2"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          placeholder="Tubias"
          className="form-input"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="email"
          className="form-input"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Numero de telefone"
          className="form-input"
          onChange={(e) => setData({ ...data, number: e.target.value })}
        />
        <input
          type="text"
          placeholder="endereco"
          className="form-input"
          onChange={(e) => setData({ ...data, address: e.target.value })}
        />
        <input
          type="submit"
          value="Enviar"
          className="py-4 bg-red-500 from-indigo-500 via-purple-500 to-pink-500 rounded-lg hover:bg-gradient-to-r focus:outline-zinc-900 active:py-6z"
        />
      </form>
    </section>
  );
};

export default Form;
