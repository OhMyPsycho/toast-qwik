import { $, component$, useSignal } from '@builder.io/qwik';
import { useToast } from '../hooks/useToast';

export const Example = component$(() => {
    const {toast} = useToast();
    const count = useSignal(0);

      const showDefault = $(() => {
    count.value++;
    toast({
      message: "Sunday, December 03, 2023 at 9:00 AM",
      title: "Event has been created",
      type: "success",
      action: {
        content: "show",
        onAction: $(() => {
          console.log("Hello toast")
        })
      },
      duration: 1500000,
      closeable: true
    })
  })

  // const showInfo = $(() => {
  //   count.value++;
  //   toast.info(`Test of toast Qwik ${count.value}`, {closeable: true, action: {
  //     content: 'SHOW',
  //     onAction: $(() => console.log('SHOW'))
  //   }})
  // })

  // const showWarn = $(() => {
  //   count.value++;
  //   toast.warn(`Test of toast Qwik ${count.value}`)
  // })

  // const showSuccess = $(() => {
  //   count.value++;
  //   toast.success(`Test of toast Qwik ${count.value}`)
  // })

  // const showDefault = $(() => {
  //   count.value++;
  //   toast.default(`Test of toast Qwik ${count.value}`)
  // })

  // // Event has been created
  // // Sunday, December 03, 2023 at 9:00 AM

  // const showError = $(() => {
  //   count.value++;
  //   toast.error(`Test of toast Qwik ${count.value}`)
  // })

  return <div>
    <h1>Example toast qwik</h1>
    <button onClick$={showDefault}>
      Show toast
    </button>
    {/* <button onClick$={() => showInfo()}>show info toast</button>
    <button onClick$={() => showSuccess()}>show success toast</button>
    <button onClick$={() => showWarn()}>show warn toast</button>
    <button onClick$={() => showDefault()}>show default toast</button>
    <button onClick$={() => showError()}>show error toast</button> */}
  </div>
});