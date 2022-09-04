import { createI18n } from 'vue-i18n';
import messages from './messages';


export default createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    fallbackLocale: "en",
    messages,
});