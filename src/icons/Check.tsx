import { QwikIntrinsicElements } from "@builder.io/qwik";

export function Check(props: QwikIntrinsicElements['svg'], key: string) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props} key={key}><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
    )
  }