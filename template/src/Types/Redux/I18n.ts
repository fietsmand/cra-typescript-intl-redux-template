import { SWITCH_USER_LOCALE } from '../../Redux/Constants/actionTypes';

export type UserLocale = 'en-GB';

export type I18nReduxState = {
    userLocale: UserLocale;
    localeMessages: LocaleMessages;
}

export type LocaleMessages = {
    [messageId: string]: string
}

export type I18nSwitchUserLocaleAction = {
    type: typeof SWITCH_USER_LOCALE;
    payload: {
        userLocale: UserLocale;
        localeMessages: LocaleMessages;
    };
}

export type I18nActionTypes = I18nSwitchUserLocaleAction