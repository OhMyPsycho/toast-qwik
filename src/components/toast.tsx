import { component$, useStylesScoped$ } from '@builder.io/qwik';
import clsx from 'clsx';
import styles from '../scss/main.scss?inline'
import { ToastItem } from '../interfaces/toast';
import { TypeIcon } from './TypeIcon';
import LucideX from '../icons/LucideX';
import { useToast } from '../hooks/useToast';
import { Default } from '../utils';


export interface ToastProps {
    item: ToastItem;
    separatorClass: string;
}


export const Toast = component$(({
  separatorClass,
  item: {
  title,
  message,
  type,
  action,
  closeable,
  id
}}: ToastProps) => {
  const {close} = useToast();

  useStylesScoped$(styles)
  return (
    <div class={clsx([
      separatorClass,
      'toast',
      `${Default.CSS_NAMESPACE}__toast-theme--dark`,
      'toastAnimation'
    ])}>
      <TypeIcon type={type} />
      <section class="toast-info">
        {title && <p>{title}</p>}
        <span>{message}</span>
      </section>
      {action && <section class="toast-actions">
        <button onClick$={action.onAction} class="button-action">
          {action.content || "Undo"}
        </button>
      </section>}
      {closeable && <span class="toast-closeable" onClick$={() => close(id)}>
        <LucideX class="toast-icon" />
      </span>}
    </div>
  )
});




// import { component$ } from '@builder.io/qwik';
// import { ToastItem } from '../interfaces/toast';
// import LucideX from '../icons/LucideX';
// import { useToast } from '../hooks/useToast';

// interface Props {
//     item: ToastItem
//     separatorClass: string;
// }

// export const Toast = component$(({
//   item, separatorClass
// }: Props) => {
//   const {close} = useToast();
  
//   return <div class={[
//     separatorClass, 
//     'toast', 
//     'toastAnimation', 
//     `toast_${item.type}`
//     ]}>
//     <span>{item.message}</span>
//     {item.action && <button class="btn_action" onClick$={item.action.onAction}>{item.action.content}</button>}
//     {item.closeable && <button onClick$={() => close(item.id)} class="btn_closed"><LucideX style={{strokeWidth: '2'}} /></button>}
//   </div>
// });