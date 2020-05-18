import { I18nReduxState } from './I18n';
import { RouterState } from 'react-router-redux';

export interface RootState {
    routingState: RouterState;
    i18nState: I18nReduxState
} 