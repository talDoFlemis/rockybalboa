import React from "react";
import Image from "next/image";

const Herobalboa = () => {
  return (
    <section className="container flex flex-col gap-8 justify-center items-center mx-auto h-screen text-center">
      <h1 className="text-7xl text-white font-dyna">Rocky Balboa</h1>
      <Image
        width={1000}
        height={1000}
        alt="john cena falando em chines ao comer um sorvete e anunciando o filme do velozes e furiosos(emchines: zao shang hao zongh wo bla bla bla bing chilling)"
        src="https://media.tenor.com/XZiayvLsOjwAAAAC/rocky-balboa-sylvester-stallone.gif"
      />

      <p className="text-xl text-secondary">
        Rocky Balboa é um um lutador de Boxing dos EUA, derrotou Apollo Creed,
        Ivan Drago e outros oponentes.
      </p>
    </section>
  );
};

export default Herobalboa;
