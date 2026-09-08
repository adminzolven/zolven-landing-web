import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const productos = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/productos' }),
	schema: ({ image }) =>
		z.object({
			nombre: z.string(),
			categoria: z.enum([
				'Núcleos Laminados',
				'Acero Eléctrico',
				'Núcleos tipo C',
				'Núcleos Amorfos',
				'Núcleos tipo E',
				'Uni-core',
				'Núcleos Toroidales',
			]),
			descripcion: z.string(),
			imagen: image(),
			imagenAlt: z.string().optional(),
			destacado: z.boolean().default(false),
			// Ficha técnica: pares libres clave/valor (p. ej. "Material del núcleo": "Acero al silicio 3%")
			specs: z.record(z.string(), z.string()).default({}),
		}),
});

export const collections = { productos };
