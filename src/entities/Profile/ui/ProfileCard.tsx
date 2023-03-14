import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/ui/Input';
import cls from './ProfileCard.module.scss';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';

interface ProfileCardProps {
 className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { className } = props;
    const data = useSelector(getProfileData);
    // to use later:
    // const isLoading = useSelector(getProfileIsLoading);
    // const error = useSelector(getProfileError);
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile Page')} />
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Edit')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Your name')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastName}
                    placeholder={t('Your last name')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
