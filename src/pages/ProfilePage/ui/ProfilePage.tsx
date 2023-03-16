import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
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
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers:ReducersList = {
    profile: profileReducer,
};

const ProfilePage:FC = () => {
    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);

    useEffect(() => { dispatch(fetchProfileData()); }, [dispatch]);
    const onChangeFirstName = useCallback(
        (value:string) => {
            dispatch(profileActions.updateProfile({ first: value || '' }));
        },
        [dispatch],
    );
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
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
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
