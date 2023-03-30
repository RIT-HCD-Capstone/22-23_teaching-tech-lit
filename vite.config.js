import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	build: {
		rollupOptions: {
			external: './node_modules/svelte-modals'
		}
	},
	plugins: [sveltekit()]
};

export default config;
