/* eslint-disable no-unused-vars */
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum ProfileValidationErrors {
    NO_DATA = 'NO_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_NAME = 'INCORRECT_NAME',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    SERVER_ERROR = 'SERVER_ERROR'

}
export interface Profile {
    id?:string;
    first?: string;
    lastName?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?:Profile,
    form?:Profile,
    isLoading: boolean;
    error? : string;
    readonly:boolean;
    validateErrors?: ProfileValidationErrors[];

}
