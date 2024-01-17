import { createContextId } from "@builder.io/qwik";
import { ToastItem } from "../interfaces/toast";
import { ToastPosition } from "../utils";



export interface ToastState {
    duration?: number;
    position?: ToastPosition;
    items?: ToastItem[]
}

export const ToastContext = createContextId<ToastState>('toast-context');