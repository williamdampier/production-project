import { StateSchema } from 'app/providers/StoreProvider';

export const getUserAuthInited = (state: StateSchema) => state.user._inited;
