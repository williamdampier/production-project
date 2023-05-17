import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/ui/Input';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { getAddCommentFormError, getAddCommentFormText } from 'features/AddCommentForm/model/selectors/addCommentFormSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
   className?: string;
   onSendComment:(text:string)=>void;
}

const reducers:ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm: FC<AddCommentFormProps> = (props) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation('main');
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const onCommentTextChange = useCallback((value:string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>

            <div className={classNames(cls.addCommentForm, {}, [className])}>
                <Input placeholder={t('Comment...')} value={text} onChange={onCommentTextChange} className={cls.input} />
                <Button theme={ButtonTheme.OUTLINE} onClick={onSendHandler}>{t('Send')}</Button>
            </div>
        </DynamicModuleLoader>

    );
};

export default AddCommentForm;
