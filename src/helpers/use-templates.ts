import fs from 'node:fs'
import path from 'node:path'

export function useTemplates(templatesDir: string) {
	return fs.readdirSync(templatesDir).filter((item) => {
		const itemPath = path.join(templatesDir, item)
		return fs.statSync(itemPath).isDirectory()
	})
}
