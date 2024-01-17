import { component$, useContext } from '@builder.io/qwik';
import { ToastContext } from '../context/toast-context';
// import { Toast } from './toast';
import clsx from 'clsx';
import { Toast } from './toast';
// interface Props {
//     position: POSITION;
//     items: ToastItem[]
// }

export const ToastWrapper = component$(() => {
  const {items, position} = useContext(ToastContext);
  
  if(!items) return null;

  return (
    <div class={clsx([
      "wrapper",
      position
    ])}>
      {items.map((item, index) => {
        const separatorClass = items.length > 0 ? `m-${position}` : 'm-0';
        return (
          <Toast 
          separatorClass={separatorClass}
          item={item} 
          key={index} />
        )
      })}
    </div>
  )

  // return <div class={[
  //   'toast_wrapper',
  //   position,
  // ]}>
  //   {items.map(((item, index) => 
  //       <Toast 
  //       separatorClass={items.length > 0 ? `${position}__mr` : 'mr-0'}
  //       key={index} 
  //       item={item} />))}
  //   </div>
});