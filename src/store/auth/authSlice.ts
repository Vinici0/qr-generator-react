import { createSlice } from '@reduxjs/toolkit';

// Definir una interfaz para la estructura de los objetos de autenticación
interface AuthData {
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    errorMessage: string | null;
    state: string | null;
    role: string | null;
    google: boolean;

}

// Definir una interfaz que extienda la interfaz AuthData
interface AuthId extends AuthData {
    uid: string | null;
}

// Define un objeto para inicializar el estado
const initialAuthData: AuthId = {
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
    google: false,
    state: null,
    role: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
        ...initialAuthData, // Utiliza una instancia de la interfaz para la inicialización
    },
    reducers: {
        login: (state, { payload }: { payload: AuthData }) => {
            state.status = 'authenticated';
            // Asignar directamente el payload a las propiedades del estado
            Object.assign(state, payload);
            state.errorMessage = null;
        },
        logout: (state, { payload }: { payload: { errorMessage: string | null } }) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        },
    },
});

// Exporta la interfaz para que pueda ser utilizada en otros lugares
export interface AuthState extends AuthData {
    status: 'checking' | 'not-authenticated' | 'authenticated';
}

// Acciones generadas por Redux Toolkit
export const { login, logout, checkingCredentials } = authSlice.actions;

