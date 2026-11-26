// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',

  vite: {
    plugins: [tailwindcss()]
  },

  fonts: [
		{
			provider: fontProviders.local(),
			name: 'Inconsolata',
			cssVariable: '--font-inconsolata',
			fallbacks: ['courier'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/Inconsolata-Regular.ttf'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/Inconsolata-Bold.ttf'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	]
});