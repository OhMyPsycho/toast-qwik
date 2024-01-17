import { component$ } from '@builder.io/qwik';
import { ToastType } from '../utils';
import { InfoIcon } from '../icons/Info';
import { Check } from '../icons/Check';
import { WarnIcon } from '../icons/WarnIcon';
import { ErrorIcon } from '../icons/Error';

interface TypeIconProps {
    type: ToastType;
}

export const TypeIcon = component$(({type}: TypeIconProps) => {

    if(type === 'info') {
        return <InfoIcon class="toast-icon" />
    }

    if(type === 'success') {
        return <Check class="toast-icon" />
    }

    if(type === 'warning') {
        return <WarnIcon class="toast-icon" />
    }

    if(type === 'danger') {
        return <ErrorIcon class="toast-icon" />
    }

  return null;
});