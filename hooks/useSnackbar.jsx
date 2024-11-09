import { useSnackStore } from '../store/snack-store';

export default function useSnackbar() {

    const { create } = useSnackStore(state => state)


    function createSnackbar({ text, action }) {
        create(text, action)
    }

    return createSnackbar;
}