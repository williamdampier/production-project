import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StateSchema } from 'app/providers/StoreProvider';
import { ProfileSchema, ProfileValidationErrors } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../service/updateProfileData/updateProfileData';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Australia,
    city: 'Auckland',
    currency: Currency.AUD,
    first: 'FirstName',
    lastName: 'LastName',

};

describe('profileSlice.test', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('set cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            form: data,
            data,
            validateErrors: undefined,
        });
    });

    test('update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ username: '123456' }),
        )).toEqual({
            form: { username: '123456' },
        });
    });

    test('update profile pending', () => {
        const state:DeepPartial<ProfileSchema> = { isLoading: false, validateErrors: [ProfileValidationErrors.SERVER_ERROR] };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({ isLoading: true, validateErrors: undefined });
    });

    test('update profile fulfilled', () => {
        const state:DeepPartial<ProfileSchema> = { isLoading: true };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            data,
            form: data,

        });
    });
});
