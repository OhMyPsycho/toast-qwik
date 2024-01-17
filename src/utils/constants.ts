const enum Position {
    TOP_LEFT = 'TL',
    TOP_RIGHT = 'TR',
    BOTTOM_LEFT = 'BL',
    BOTTOM_RIGHT = 'BR',
}

export type ToastPosition = `${Position}`;

const enum Type {
    DEFAULT = 'default',
    SUCCESS = 'success',
    WARNING = 'warning',
    DANGER = 'danger',
    INFO = 'info',
}

export type ToastType = `${Type}`;

export const enum Default {
    CSS_NAMESPACE = "eden",
    COLLAPSE_TIMEOUT = 5000,
}