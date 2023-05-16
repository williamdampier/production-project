import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/ui/Input';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { getCommentFormError, getCommentFormText } from 'features/AddCommentForm/model/selectors/addCommentFormSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
   className?: string;
}

const reducers:ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm: FC<AddCommentFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('main');
    const dispatch = useAppDispatch();
    const text = useSelector(getCommentFormText);
    const error = useSelector(getCommentFormError);

    const onCommentTextChange = useCallback((value:string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>

            <div className={classNames(cls.addCommentForm, {}, [className])}>
                <Input placeholder={t('Comment...')} value={text} onChange={onCommentTextChange} />
                <Button theme={ButtonTheme.OUTLINE}>{t('Send')}</Button>
            </div>
        </DynamicModuleLoader>

    );
};

export default AddCommentForm;
