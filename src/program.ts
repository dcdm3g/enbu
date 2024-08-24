import { Command } from 'commander'
import { init } from '@/commands/init'
import { create } from '@/commands/create'

process.on('SIGINT', () => process.exit(0))
process.on('SIGTERM', () => process.exit(0))

const program = new Command()

program
	.name('haze')
	.alias('hz')
	.description('CLI to clone your own templates from GitHub')
	.version('1.0.0')

program.addCommand(init)
program.addCommand(create)

program.parse()
