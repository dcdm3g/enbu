import { Command } from 'commander'
import { conf } from '@/lib/conf'
import { prompts } from '@/lib/prompts'
import { useUtilsStarterDir } from '@/helpers/use-utils-starter-dir'
import os from 'node:os'
import path from 'node:path'
import fs from 'node:fs'
import chalk from 'chalk'

export const init = new Command()
	.name('init')
	.description('Tell Kaminari where your utils are')
	.action(async () => {
		try {
			const { utils } = await prompts({
				type: 'text',
				name: 'utils',
				message: 'Where would you like to keep your utils?',
				initial: 'www/utils',
			})

			conf.set('utils', utils)

			const homeDir = os.homedir()
			const utilsDir = path.join(homeDir, utils)

			if (!fs.existsSync(utilsDir)) {
				const utilsStarterDir = useUtilsStarterDir()

				await fs.promises.cp(utilsStarterDir, utilsDir, {
					recursive: true,
				})

				console.log(
					chalk.green('Kaminari utils starter created at %s.'),
					chalk.underline(utils),
				)
			}

			console.log(
				chalk.green('Success! You may now run %s to use your templates.'),
				chalk.underline('kaminari create'),
			)
		} catch {
			console.log(chalk.red('Something went wrong. Please try again.'))
			process.exit(1)
		}
	})
