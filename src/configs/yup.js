import { setLocale } from 'yup';
import i18next from '../locales';

setLocale({
  mixed: {
    default: vars => i18next.t('mixed.default', vars),
    required: vars => i18next.t('mixed.required', vars),
    oneOf: vars => i18next.t('mixed.oneOf', vars),
    notOneOf: vars => i18next.t('mixed.  notOneOf', vars)
  },
  string: {
    length: vars => i18next.t('string.length', vars),
    min: vars => i18next.t('string.min', vars),
    max: vars => i18next.t('string.max', vars),
    matches: vars => i18next.t('string.matches', vars),
    email: vars => i18next.t('string.email', vars),
    url: vars => i18next.t('string.url', vars),
    trim: vars => i18next.t('string.trim', vars),
    lowercase: vars => i18next.t('string.lowercase', vars),
    uppercase: vars => i18next.t('string.uppercase', vars)
  }
});
