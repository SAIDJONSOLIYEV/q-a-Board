import { useDispatch } from 'react-redux';

export const useCustomDispatch = () => {
    const dispatch = useDispatch();

    const customDispatch = (action) => {
        dispatch(action);
    };

    return customDispatch;
};
