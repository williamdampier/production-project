import { Profile, ProfileValidationErrors } from '../../types/profile';

export const validateProfileData = (profile?:Profile) => {
    if (!profile) {
        return [ProfileValidationErrors.NO_DATA];
    }
    const {
        first, lastName, age, country,
    } = profile;

    const errorsArr: ProfileValidationErrors[] = [];

    if (!first || !lastName) {
        errorsArr.push(ProfileValidationErrors.INCORRECT_NAME);
    }
    if (!age || !Number.isInteger(age)) {
        errorsArr.push(ProfileValidationErrors.INCORRECT_AGE);
    }

    if (!country) {
        errorsArr.push(ProfileValidationErrors.INCORRECT_COUNTRY);
    }
    return errorsArr;
};
