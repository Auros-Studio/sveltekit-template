import i18n from 'sveltekit-i18n';
import lang from './lang.json';

const locale_keys = Object.keys(lang);
const loaders = locale_keys.map((locale) => ({
	locale,
	key: 'common',
	loader: async () => (await import(`./${locale}/common.json` /* @vite-ignore */)).default
}));

/** @type {import('sveltekit-i18n').Config} */
export const config = {
	translations: {
		en: { lang },
		cs: { lang }
	},
	loaders
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);
