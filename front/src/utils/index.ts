export function useDesign(scope: string) {
    const prefixCls = 'amirmaghami'
    return {
        prefixCls: `${prefixCls}-${scope}`,
        prefixVar: prefixCls,
    };
}


import { useI18n } from 'vue-i18n'
export const useMyLocale = function (lang: string) {
    const { locale, availableLocales } = useI18n()
    locale.value = lang
    return {}
}

// features/utils.js

//import { useI18n } from 'vue-i18n'
//const { t } = useI18n() // Uncaught SyntaxError: Must be called at the top of a `setup` function

import i18n from '../i18n'

const { t } = i18n.global


export const getToken = () => {
    return localStorage.getItem('token')
}