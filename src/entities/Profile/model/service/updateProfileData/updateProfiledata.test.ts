import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { updateProfileData } from './updateProfileData';
import { ProfileValidationErrors } from '../../types/profile';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Australia,
    city: 'Auckland',
    currency: Currency.AUD,
    first: 'FirstName',
    lastName: 'LastName',
    id: '1',

};

describe('updateProfileData.test', () => {
    test('update Profile success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('update Profile error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ProfileValidationErrors.SERVER_ERROR]);
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: { ...data, first: '' } } });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ProfileValidationErrors.INCORRECT_NAME]);
    });
});
