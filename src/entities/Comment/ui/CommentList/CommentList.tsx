import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
   className?: string;
   comments?: Comment[];
   isLoading?:boolean;
}

export const CommentList: FC<CommentListProps> = (props) => {
    const { className, comments = [], isLoading } = props;
    const { t } = useTranslation('article');
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }
    return (
        <div className={classNames(cls.commentList, {}, [className])}>
            {
                comments.length ? comments?.map(
                    (comment) => (
                        <CommentCard
                            isLoading={isLoading}
                            className={cls.comment}
                            key={comment.text}
                            comment={comment}
                        />
                    ),
                )
                    : <Text text={t('No comments')} />
            }
        </div>
    );
};
