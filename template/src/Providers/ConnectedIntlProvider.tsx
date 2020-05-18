import React from 'react';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { RootState } from '../Types/Redux/index';
import { PropsWithChildren } from 'react';

const ConnectedIntlProvider = ({children}: PropsWithChildren<any>) => {
  const locale = useSelector((state: RootState) => state.i18nState.userLocale.substring(0, 2))
  const messages = useSelector((state: RootState) => state.i18nState.localeMessages)

  return (
    <IntlProvider
      locale={locale}
      messages={messages}
    >
      {children}
    </IntlProvider>
  )
}

export default ConnectedIntlProvider;
