import url from 'node:url'
import path from 'node:path'

export function useUtilsStarterDir() {
	const __filename = url.fileURLToPath(import.meta.url)
	const __dirname = path.dirname(__filename)

	return path.join(__dirname, '../utils-starter')
}
