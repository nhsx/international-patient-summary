import React from 'react';
import { i18n } from './i18n';

export const LanguageContext = React.createContext({
  language: 'en_us',
  setLanguage: (() => {}) as any,
  i18n: i18n('en_us'),
});
