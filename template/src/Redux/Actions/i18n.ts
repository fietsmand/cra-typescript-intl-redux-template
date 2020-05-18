import { messages } from '../../Translation/locales';
import { SWITCH_USER_LOCALE } from '../Constants/actionTypes';
import { UserLocale } from '../../Types/Redux/I18n';

export const doSwitchUserLocale = (userLocale: UserLocale) => ({
    type: SWITCH_USER_LOCALE,
    payload: {
        userLocale: userLocale,
        localeMessages: messages[userLocale],
    },
});
