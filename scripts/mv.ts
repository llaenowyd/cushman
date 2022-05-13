import { promises as fsp } from 'fs'
import { join as pathJoin } from 'path'

const { rename } = fsp

type IO = [string, string]

const rawIo: IO = [process.argv[2], process.argv[3]]

if (rawIo.some(p => !p)) {
  console.log('usage: ts-node mv.ts <source> <destination>')
  process.exit(1)
}

const io = rawIo.map((forwardSlashPath: string): string =>
  pathJoin(...forwardSlashPath.split('/'))
) as IO

rename(...io).catch((err: Error) => {
  console.error(err.message)
  process.exit(1)
})
