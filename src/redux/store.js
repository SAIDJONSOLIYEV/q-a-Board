import { createStore } from 'redux';

const initialState = {
    isAuthenticated: false,
    tokens: {
        access: '',
        refresh: ''
    },
    user: {
        id: 0,
        role: '',
        email: '',
        auth_provider: '',
        full_name: '',
        image: null
    },
    notifications: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIALIZE_STORE':
            if (action.payload.access) {
                return {
                    ...state,
                    tokens: {
                        access: action.payload.access,
                        refresh: action.payload.refresh
                    },
                    isAuthenticated: true
                };
            } else {
                localStorage.clear();
                return {
                    ...initialState
                };
            }
        case 'REFRESH_TOKEN':
            return {
                ...state,
                tokens: {
                    ...state.tokens,
                    access: action.payload
                }
            };
        case 'SET_USER':
            return {
                ...state,
                user: {
                    id: action.payload.id,
                    role: action.payload.role,
                    email: action.payload.email,
                    auth_provider: action.payload.auth_provider,
                    full_name: action.payload.full_name,
                    image: action.payload.image
                }
            };
        default:
            return state;
    }
};

const store = createStore(rootReducer);

export default store;
