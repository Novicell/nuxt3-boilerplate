
export default function (translations: Record<string, any>) {
  const mapTranslations = (obj, parentKey = null) => {
    const mappedTranslations = Object.entries(obj).reduce((translations, [key, value]) => {
      let newKey = key;

      if (parentKey) {
        newKey = [parentKey, key].join('.');
      }

      if (value && typeof value === 'string') {
        const obj = {};
        obj[newKey] = value;
        translations.push(obj);
      }

      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        return translations.concat(mapTranslations(value, newKey));
      } else {
        return translations;
      }
    }, []);

    return Object.assign({}, ...mappedTranslations);
  };

  const dictionaries = mapTranslations(translations);

  const getTranslation = (key: string, replacements?: Record<string, string | number>) => {
    let translation = dictionaries[key];
    if (!translation) {
      console.warn(`Translation not found for: ${key}`);
      return '';
    }
    // If no replacements are defined, just skip the next step and return it right away
    if (!replacements) {
      return translation;
    }

    Object.keys(replacements).forEach((key: string) => {
      translation = translation.replace(`{${key}}`, replacements[key]);
    });
    return translation;
  };

  return {
    $t: getTranslation
  };
}
