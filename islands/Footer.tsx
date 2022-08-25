/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Footer() {
  return (
    <footer class={tw`w-full flex items-center justify-center py-4`}>
      <p class={tw`font-bold text-white flex flex-col items-center`}>
        <a href="https://fresh.deno.dev"><img width="197" height="37" src="https://fresh.deno.dev/fresh-badge-dark.svg" /></a> 
        By Prince J.
      </p>
    </footer>
  )
}