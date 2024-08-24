declare module 'launch-editor' {
	export default function launch(
		path: string,
		editor?: string,
		callback?: (file: string, error: string) => void,
	): void
}
