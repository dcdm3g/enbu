import { Command } from 'commander'
import { init } from '@/commands/init'
import { create } from '@/commands/create'

process.on('SIGINT', () => process.exit(0))
process.on('SIGTERM', () => process.exit(0))

const program = new Command()

program
	.name('enbu')
	.description('CLI to manage and use your own developer tools')
	.version('1.0.0')

program.addCommand(init)
program.addCommand(create)

program.parse()
