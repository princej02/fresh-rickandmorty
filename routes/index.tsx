/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts'

type character = ICharacter[];

interface ICharacter {
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export const handler: Handlers<ICharacter | null> = {
  async GET(_, ctx) {
    const resp = await fetch(`https://rickandmortyapi.com/api/character`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const character = await resp.json();
    return ctx.render(character.results);
  },
}


import Navbar from "../islands/Navbar.tsx";
import Card from "../islands/Card.tsx";
import Footer from "../islands/Footer.tsx";


export default function Home({ data }: PageProps<character>) {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="description" content="Characters from the Rick and Morty series on Netflix." />
        <title>Rick & Morty</title>
      </Head>
      <main class={tw`bg-lime`}>
        <Navbar />
        <div class={tw`my-5 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 center`}>
          {data.map(char => (
            <Card
              name={char.name}
              image={char.image}
              gender={char.gender}
              status={char.status}
              species={char.species} 
            />
          ))}
        </div>
        <Footer />
    </main>
    </>
  );
}
