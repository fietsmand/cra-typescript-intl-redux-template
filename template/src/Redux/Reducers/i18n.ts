import { config } from '../../Config';
import { SWITCH_USER_LOCALE } from '../Constants/actionTypes';
import { messages } from '../../Translation/locales';
import { UserLocale } from '../../Types/Redux/I18n';
import { I18nActionTypes } from '../../Types/Redux/I18n';

const { localeDict } = config;

const defaultLang = (): UserLocale => {
    const lang = window.navigator.language.replace("US", "GB");
    let langIndex = Object.keys(localeDict).indexOf(lang);
    if (langIndex < 0) {
        langIndex = 0;
    }
    return Object.keys(localeDict)[langIndex] as UserLocale;
};

const initialState = {
    userLocale: defaultLang(),
    localeMessages: messages[defaultLang()],
};

export default (state = initialState, action: I18nActionTypes) => {
    switch (action.type) {
        case SWITCH_USER_LOCALE:
            return {
                ...state,
                userLocale: action.payload.userLocale,
                localeMessages: { ...action.payload.localeMessages },
            };

        default:
            return state;
    }
};