import { $, useContext } from "@builder.io/qwik";
import { ToastContext, ToastState } from "../context/toast-context";
// import { ToastItem } from "../interfaces/toast";
import { ToastType } from "../utils";
import { ToastAction } from "../interfaces/toast";

// export interface ShowToastProp {
//     type?: Type;
//     closeable?: boolean;
//     action?: ToastAction;
// }

interface ToastItemProps {
    duration?: number;
    type?: ToastType;
    message: string;
    title?: string;
    action?: ToastAction,
    closeable?: boolean
}

export const useToast = () => {
    const ctx = useContext<ToastState>(ToastContext);

    const toast = $(({
        duration = 5000,
        message,
        title,
        type = "default",
        action,
        closeable = false
    }: ToastItemProps) => {
        const id = Date.now();
        ctx.items = [...ctx.items!, {
            id,
            duration,
            title,
            message,
            type,
            action,
            closeable
        }]

        const toastInstance = setTimeout(async () => {
            ctx.items = ctx.items!.filter(toast => toast.id !== id)
        }, duration)

        if (ctx.items.length > 5) {
            clearTimeout(toastInstance);
            ctx.items.shift();
        }
    })

    // const show = $((message: string, config?: ShowToastProp) => {
    //     const id = Date.now();
    //     ctx.items = [...ctx.items!, {
    //         id,
    //         duration: ctx.duration,
    //         message: message,
    //         type: config?.type || Type.DEFAULT,
    //         closeable: config?.closeable,
    //         action: config?.action,
    //     }]
        
    //     setTimeout(async () => {
    //         ctx.items = ctx.items!.filter(toast => toast.id !== id)
    //     }, ctx.duration)

    //     if (ctx.items.length > 5) {
    //         ctx.items.shift();
    //     }
    // });

    const close = $((id: number) => {
        ctx.items = ctx.items!.filter(toast => toast.id !== id)
    })

    return {
        toast,
    //    default: $((message: string, config?: ShowToastProp) => show(message, {type: Type.DEFAULT, action: config?.action, closeable: config?.closeable})),
    //    error: $((message: string, config?: ShowToastProp) => show(message, {type: Type.DANGER, action: config?.action, closeable: config?.closeable})),
    //    info: $((message: string, config?: ShowToastProp) => show(message, {type: Type.INFO, action: config?.action, closeable: config?.closeable})),
    //    success: $((message: string, config?: ShowToastProp) => show(message, {type: Type.SUCCESS, action: config?.action, closeable: config?.closeable})),
    //    warn: $((message: string, config?: ShowToastProp) => show(message, {type: Type.WARNING, action: config?.action, closeable: config?.closeable})),
       close: $((id: number) => {close(id)})
    }
}