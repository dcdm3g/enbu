import { Command } from 'commander'
import { conf } from '@/lib/conf'
import { prompts } from '@/lib/prompts'
import { useTemplates } from '@/helpers/use-templates'
import os from 'node:os'
import path from 'node:path'
import fs from 'node:fs'
import chalk from 'chalk'

export const create = new Command()
	.name('create')
	.description('Use one of your templates')
	.action(async () => {
		try {
			const utils = conf.get('utils')

			if (typeof utils !== 'string') {
				console.log(
					chalk.red('Your configurations are invaid. Please run %s and retry.'),
					chalk.underline('kaminari init'),
				)

				process.exit(1)
			}

			const homeDir = os.homedir()
			const templatesDir = path.join(homeDir, utils, 'templates')

			if (!fs.existsSync(templatesDir)) {
				console.log(
					chalk.red('Your templates folder %s does not exist.'),
					chalk.underline(path.join(utils, 'templates')),
				)

				process.exit(1)
			}

			const templates = useTemplates(templatesDir)

			if (!templates.length) {
				console.log(
					chalk.red('Your templates folder %s does not have templates.'),
					chalk.underline(path.join(utils, 'templates')),
				)

				process.exit(1)
			}

			const cwd = process.cwd()

			const { template, app } = await prompts([
				{
					type: 'autocomplete',
					name: 'template',
					message: 'Which template would you like to use today?',
					choices: templates.map((template) => ({
						title: template,
						value: template,
					})),
				},
				{
					type: 'text',
					name: 'app',
					message: 'What would you like to call your new app?',
					validate: (app) =>
						fs.existsSync(path.join(cwd, app))
							? 'This folder already exists. Please retry.'
							: true,
					initial: (template) => template,
				},
			])

			const templateDir = path.join(templatesDir, template)
			const appDir = path.join(cwd, app)

			await fs.promises.cp(templateDir, appDir, { recursive: true })
		} catch {
			console.log(chalk.red('Something went wrong. Please try again.'))
			process.exit(1)
		}
	})
