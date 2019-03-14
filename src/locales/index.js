import i18next from 'i18next';

import ptBR from './pt-BR';

i18next
  .init({
    debug: true,
    lng: 'pt_BR',
    resources: {
      pt_BR: {
        translation: ptBR
      }
    }
  })
  .then();

export default i18next;
