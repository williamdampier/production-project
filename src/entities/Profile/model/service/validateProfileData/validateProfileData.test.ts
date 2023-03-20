import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ProfileValidationErrors } from '../../types/profile';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Australia,
    city: 'Auckland',
    currency: Currency.AUD,
    first: 'FirstName',
    lastName: 'LastName',

};

describe('validateProfileData.test', () => {
    test('validation success', () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', () => {
        const result = validateProfileData({
            ...data,
            first: '',
            lastName: '',
        });
        expect(result).toEqual([ProfileValidationErrors.INCORRECT_NAME]);
    });

    test('incorrect age', () => {
        const result = validateProfileData({
            ...data,
            age: undefined,
        });
        expect(result).toEqual([ProfileValidationErrors.INCORRECT_AGE]);
    });

    test('incorrect country', () => {
        const result = validateProfileData({
            ...data,
            country: undefined,
        });
        expect(result).toEqual([ProfileValidationErrors.INCORRECT_COUNTRY]);
    });

    test('few validation errors', () => {
        const result = validateProfileData({});
        expect(result).not.toEqual([]);
    });
});
