/* eslint-disable no-unused-vars */
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState, Dispatch } from 'redux';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { To } from 'history';
import { NavigateOptions } from 'react-router';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailPage';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage/model/types/articlesPageSchema';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // async reducers
    loginForm?: LoginSchema;
    profile?:ProfileSchema;
    articleDetails?:ArticleDetailsSchema;
    articleDetailsComments?:ArticleDetailsCommentsSchema;
    addCommentForm?:AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state:StateSchema, action:AnyAction) => CombinedState<StateSchema>;
    add: (key:StateSchemaKey, reducer:Reducer) => void;
    remove: (key:StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    disptach?: Dispatch;
    state: StateSchema;
}
