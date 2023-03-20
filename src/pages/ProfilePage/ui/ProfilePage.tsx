import {
    ProfileValidationErrors,
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadOnly,
    getProfileValidationErrors,
    profileActions,
    profileReducer,
} from 'entities/Profile';
import { ProfileCard } from 'entities/Profile/ui/ProfileCard';
import { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers:ReducersList = {
    profile: profileReducer,
};

const ProfilePage:FC = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadOnly);
    const validationErrors = useSelector(getProfileValidationErrors);

    const validateErrorTranslates = {
        [ProfileValidationErrors.SERVER_ERROR]: t('Server error'),
        [ProfileValidationErrors.INCORRECT_COUNTRY]: t('Incorrect country'),
        [ProfileValidationErrors.NO_DATA]: t('No data'),
        [ProfileValidationErrors.INCORRECT_NAME]: t('Incorrect name'),
        [ProfileValidationErrors.INCORRECT_AGE]: t('Incorrect age'),
    };

    const onChangeLastName = useCallback(
        (value:string) => {
            dispatch(profileActions.updateProfile({ lastName: value || '' }));
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value:string) => {
            if (!/[^\d]/g.test(value || '')) {
                dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
            }
        },
        [dispatch],
    );

    const onChangeCity = useCallback(
        (value:string) => {
            dispatch(profileActions.updateProfile({ city: value || '' }));
        },
        [dispatch],
    );

    const onChangeUsername = useCallback(
        (value:string) => {
            dispatch(profileActions.updateProfile({ username: value || '' }));
        },
        [dispatch],
    );
    const onChangeAvatar = useCallback(
        (value:string) => {
            dispatch(profileActions.updateProfile({ avatar: value || '' }));
        },
        [dispatch],
    );
    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    const onChangeFirstName = useCallback(
        (value:string) => {
            dispatch(profileActions.updateProfile({ first: value || '' }));
        },
        [dispatch],
    );

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') { dispatch(fetchProfileData()); }
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            {validationErrors?.length && validationErrors.map((err) => (
                <Text theme={TextTheme.ERROR} text={validateErrorTranslates[err]} key={err} />
            ))}
            <ProfilePageHeader />
            <ProfileCard
                error={error}
                isLoading={isLoading}
                data={formData}
                onChangeFirstName={onChangeFirstName}
                onChangeLastName={onChangeLastName}
                readonly={readonly}
                onChangeCity={onChangeCity}
                onChangeAge={onChangeAge}
                onChangeAvatar={onChangeAvatar}
                onChangeUsername={onChangeUsername}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
