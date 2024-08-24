import { Command } from 'commander'
import { conf } from '@/lib/conf'
import { prompts } from '@/lib/prompts'
import { useUtilsStarterDir } from '@/helpers/use-utils-starter-dir'
import os from 'node:os'
import path from 'node:path'
import fs from 'node:fs'
import chalk from 'chalk'
import launch from 'launch-editor'

export const init = new Command()
	.name('init')
	.description('Tell Haze where your utils are')
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

				const { shouldLaunch } = await prompts({
					type: 'toggle',
					name: 'shouldLaunch',
					message:
						'Utils starter created. Would you like to open it with your code editor?',
					active: 'Yes',
					inactive: 'No',
					initial: true,
				})

				if (shouldLaunch) {
					launch(utilsDir)
				}
			}

			console.log(
				chalk.green('Success! You may now run %s to use your templates.'),
				chalk.underline('haze create'),
			)
		} catch {
			console.log(chalk.red('Something went wrong. Please try again.'))
			process.exit(1)
		}
	})
