import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const position = toast.POSITION.BOTTOM_RIGHT

export function notifyOnSuccess(message) {
    toast.success(message, {
        position: position
    });
}

export function notifyOnFail(message) {
    toast.error(message, {
        position: position
    });
}