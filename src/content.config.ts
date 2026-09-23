import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const productos = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/productos' }),
	schema: ({ image }) =>
		z.object({
			nombre: z.string(),
			categoria: z.enum([
				'Acero al Silicio',
				'Núcleos Enrollados',
				'Uni-Core',
				'Laminaciones y Apilados',
				'Núcleos Toroidales',
			]),
			descripcion: z.string(),
			imagen: image(),
			imagenAlt: z.string().optional(),
			// Fotos adicionales opcionales para la galería de miniaturas del detalle
			galeria: z.array(image()).optional(),
			destacado: z.boolean().default(false),
			// Ficha técnica completa: pares libres clave/valor, usada para SEO/datos estructurados
			specs: z.record(z.string(), z.string()).default({}),
			// Subconjunto curado para la página de detalle (abrebocas, no ficha técnica)
			datosClave: z
				.array(z.object({ label: z.string(), valor: z.string() }))
				.min(3)
				.max(4),
			ventajas: z
				.array(z.object({ icono: z.string(), texto: z.string() }))
				.min(1)
				.max(3),
			aplicaciones: z.array(z.string()).min(1).max(5),
		}),
});

export const collections = { productos };
