import React from 'react';
import { Dropdown } from 'semantic-ui-react';

import { LanguageContext } from './LanguageContext';

const countryOptions = [
  { key: 'en_us', value: 'en_us', flag: 'us', text: 'English (United States)' },
  { key: 'en_gb', value: 'en_gb', flag: 'uk', text: 'English (United Kingdom)' },
  { key: 'es_es', value: 'es_es', flag: 'es', text: 'Español (España)' },
];

export const LanguageSelector = () => {
  const { setLanguage } = React.useContext(LanguageContext);

  return (
    <Dropdown
      placeholder="Select Language"
      fluid
      search
      selection
      options={countryOptions}
      onChange={(_e, target) => {
        setLanguage(target.value);
      }}
    />
  );
};
