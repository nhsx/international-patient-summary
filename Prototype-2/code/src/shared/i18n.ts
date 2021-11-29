const enUsStrings = {
  vaccinationsHeader: 'Vaccinations',
  allergiesHeader: 'Allergies',
};

const esSpStrings: typeof enUsStrings = {
  vaccinationsHeader: 'Vacunación',
  allergiesHeader: 'Alergias',
};

const stringsMap = {
  en_us: enUsStrings,
  en_gb: enUsStrings,
  es_es: esSpStrings,
};

type AllowedKeys = keyof typeof enUsStrings;

export const i18n = (locale: keyof typeof stringsMap) => (str: AllowedKeys) => {
  if (!locale) {
    return enUsStrings[str];
  }
  return stringsMap[locale][str];
};

export type LocaleTypes = keyof typeof stringsMap;
