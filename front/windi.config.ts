import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
    darkMode: 'class',
    safelist: 'p-3 p-4 p-5',
    theme: {
        fontFamily: {
            'body': "Roboto"
        },
        extend: {
            colors: {

                primary: {
                    dark: '#274C77',
                    DEFAULT: '#6096BA',
                    light: '#A3CEF1',
                    lightest: '#E7ECEF',
                    "50": "#e1f4f7",
                    "100": "#b4e4eb",
                    "200": "#87d2df",
                    "300": "#5fbfd4",
                    "400": "#44b2ce",
                    "500": "#2da6c9",
                    "600": "#2398bc",
                    "700": "#1686ab",
                    "800": "#157598",
                    "900": "#095678"
                    // 135E70
                },
                secondary: {
                    "50": "#e2f6fc",
                    "100": "#b5e9f9",
                    "200": "#85daf6",
                    "300": "#56cbf2",
                    "400": "#32bff1",
                    "500": "#00b4f1",
                    "600": "#00a6e3",
                    "700": "#0093d0",
                    "800": "#0081bd",
                    "900": "#00619d"
                    // 005C9a
                },

                gray: {
                    DEFAULT: '#484848',
                    light: '#595858',
                    "50": "#fbfbfb",
                    "100": "#f6f6f6",
                    "200": "#f1f1f1",
                    "300": "#e6e6e6",
                    "400": "#c4c4c4",
                    "500": "#a6a6a6",
                    "600": "#7c7c7c",
                    "700": "#686868",
                    "800": "#484848",
                    "900": "#272727"
                },
            },

            screens: {
                'print': { 'raw': 'print' },
                // => @media print { ... }
            },
            gridTemplateColumns: {
                'app': 'min-content 1fr',
                '1fr-max': '1fr max-content',
                'max-1fr': 'max-content 1fr',
                'skill': 'max-content 1fr max-content 1fr'
            },
            gridTemplateRows: {
                'app': 'max-content 1fr',
                'silde': 'max-content max-content max-content max-content max-content max-content 1fr max-content'
            },
        },
    },
    plugins: [formsPlugin],
})