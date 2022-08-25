/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface Card {
  name: string;
  status: string;
  species: string;
  image: string;
  gender: string;
}

export default function Card(props: Card) {
  return (
    <div class={tw`bg-white w-full rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-500 hover:scale-110 shadow-xl`}>
      <img class={tw`w-full`} src={props.image} alt={props.name} />
      <div class={tw`py-4 px-6 flex flex-col items-center`}>
        <h2 class={tw`text-2xl mb-2 text-center font-semibold`}>{props.name}</h2>
        <p><span class={tw`font-medium`}>status: </span>{props.status}</p>
        <p><span class={tw`font-medium`}>gender: </span>{props.gender}</p>
        <p><span class={tw`font-medium`}>species: </span>{props.species}</p>
      </div>
    </div>
  )
}