import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = { _inited: false };

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action:PayloadAction<User>) => {
            state.authdata = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.authdata = JSON.parse(user);
            }
            state._inited = true;
        },
        logout: (state) => {
            state.authdata = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },

});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
