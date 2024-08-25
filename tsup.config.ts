import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/program.ts'],
	format: ['cjs', 'esm'],
	outDir: 'build',
	target: 'es2019',
	splitting: false,
	sourcemap: true,
	clean: true,
	dts: true,
})
