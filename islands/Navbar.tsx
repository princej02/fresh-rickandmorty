/** @jsx h */
import { h } from 'preact';
import { tw } from "@twind";

export default function Navbar() {
  return (
    <header class={tw`w-full flex items-center justify-center py-3`}>
      <img class={tw`w-96`} src="logo.svg" alt="logo" />
    </header>
  )
}