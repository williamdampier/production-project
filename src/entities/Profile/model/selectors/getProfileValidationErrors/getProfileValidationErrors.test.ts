import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidationErrors } from './getProfileValidationErrors';
import { ProfileValidationErrors } from '../../types/profile';

describe('getProfileValidationErrors.test', () => {
    test('should return readonly value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ProfileValidationErrors.INCORRECT_AGE,
                    ProfileValidationErrors.SERVER_ERROR,

                ],
            },
        };
        expect(getProfileValidationErrors(state as StateSchema)).toEqual([
            ProfileValidationErrors.INCORRECT_AGE,
            ProfileValidationErrors.SERVER_ERROR,

        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidationErrors(state as StateSchema)).toEqual(undefined);
    });
});
