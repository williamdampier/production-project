import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import {
    getProfileData, getProfileReadOnly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
 className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadOnly);
    const profileData = useSelector(getProfileData);
    const authData = useSelector(getUserAuthData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(
        () => {
            dispatch(updateProfileData());
        },
        [dispatch],
    );

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>

            <Text title={t('Profile Page')} />
            {canEdit && (
                <div className={cls.btnsWrapper}>
                    { readonly ? (
                        <Button
                            className={cls.editBtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                        >
                            {t('Edit')}
                        </Button>
                    )
                        : (
                            <>
                                <Button
                                    className={cls.editBtn}
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                >
                                    {t('Cancel')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                >
                                    {t('Save')}
                                </Button>

                            </>

                        )}
                </div>
            )}
        </div>
    );
};
