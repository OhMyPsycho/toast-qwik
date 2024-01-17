import { PropFunction } from "@builder.io/qwik";
import {ToastType} from "../utils";

export interface ToastAction {
    content?: string;
    onAction?: PropFunction<() => void>
}

export interface ToastItem {
    id: number;
    duration: number;
    type: ToastType;
    title?: string
    message: string;
    closeable?: boolean;
    action?: ToastAction,
}