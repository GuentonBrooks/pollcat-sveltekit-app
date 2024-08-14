import dotenv from 'dotenv';
dotenv.config();

import adapterStatic from '@sveltejs/adapter-static';
import adapterNode from '@sveltejs/adapter-node';
import adapterAuto from '@sveltejs/adapter-auto';

/** Returns the appropriate SvelteKit adapter based on the value of the SVELTE_KIT_ADAPTER environment variable. */
const getSvelteKitAdapter = () => {
	switch (process.env.SVELTE_KIT_ADAPTER) {
		case 'STATIC':
			return adapterStatic();
		case 'NODE':
			return adapterNode();

		default:
			return adapterAuto();
	}
};

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess()],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: getSvelteKitAdapter(),
	},
};
export default config;
