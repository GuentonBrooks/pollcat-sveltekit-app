import { pollCatColorTheme } from './src/lib/themes/colors';
import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			backgroundImage: {
				'full-texture': "url('/img/full-bg.png')",
				'side-texture': "url('/img/side-bg.png')",
				'top-texture': "url('/img/top-bg.png')"
			}
		}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'crimson',
						enhancements: true
					},
					{
						name: 'gold-nouveau',
						enhancements: true
					}
				],
				custom: [pollCatColorTheme]
			}
		})
	]
} satisfies Config;
