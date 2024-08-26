import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/program.ts'],
	format: 'esm',
	outDir: 'build',
	target: 'es2022',
	splitting: false,
	sourcemap: true,
	clean: true,
	dts: true,
})
