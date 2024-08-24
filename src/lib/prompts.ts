import defaultPrompts, {
	type InitialReturnValue,
	type PromptObject,
	type Answers,
} from 'prompts'

function onPromptState(state: {
	value: InitialReturnValue
	aborted: boolean
	exited: boolean
}) {
	if (state.aborted) {
		process.stdout.write('\x1B[?25h')
		process.stdout.write('\n')
		process.exit(1)
	}
}

export function prompts<T extends string = string>(
	questions: PromptObject<T> | PromptObject<T>[],
): Promise<Answers<T>> {
	return defaultPrompts(
		Array.isArray(questions)
			? questions.map((question) => ({ onState: onPromptState, ...question }))
			: { onState: onPromptState, ...questions },
	)
}
