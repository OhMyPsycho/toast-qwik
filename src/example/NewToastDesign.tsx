import { component$, useStylesScoped$ } from '@builder.io/qwik';
import clsx from 'clsx';
import styles from '../scss/main.scss?inline'


export const NewToastDesign = component$(() => {

  useStylesScoped$(styles)
  return (
    <div class={clsx([
      'toast'
    ])}>
      <section class="toast-info">
        <p>Event has been created</p>
        <span>Sunday, December 03, 2023 at 9:00 AM</span>
      </section>
      <section class="toast-actions">
        <button class="button-action">
          Undo
        </button>
      </section>
    </div>
  )
});