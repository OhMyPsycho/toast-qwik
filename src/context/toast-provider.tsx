import { Slot, component$, useContextProvider, useStore, useStyles$ } from '@builder.io/qwik';

import { ToastContext, ToastState } from './toast-context';
import { ToastWrapper } from '../components/wrapper';
import styles from '../scss/main.scss?inline';

export interface ToastProviderProps {
  config?: ToastState;
}

export const ToastProvider = component$(({
  config
}: ToastProviderProps) => {
  
  // initial data of context
  const toastData = useStore<ToastState>({
    duration: config?.duration || 5000,
    items: [],
    position: config?.position || "BR",
  });

  // instance of context
  useContextProvider(ToastContext, toastData);

  
  useStyles$(styles);
  return <>
    <Slot/>
    <ToastWrapper />
  </>
});