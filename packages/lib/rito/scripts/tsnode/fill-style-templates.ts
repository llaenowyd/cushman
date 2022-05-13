import { promises as fsp } from 'fs'
import { join as pathJoin } from 'path'
import * as colors from 'tailwindcss/colors'

const { mkdir, readdir, readFile, writeFile } = fsp

const inputPath = process.argv[2]
const outputPath = process.argv[3]

if (!inputPath || !outputPath) {
  console.log('usage: ts-node fill-style-templates <input path> <output path>')
  process.exit(1)
}

const makeOutputFilename = (inputFilename: string): string => {
  const templatePart = '.template'
  const pos = inputFilename.indexOf(templatePart)

  const outFname =
    0 <= pos
      ? inputFilename.substring(0, pos) +
        inputFilename.substring(pos + templatePart.length)
      : inputFilename

  return pathJoin(outputPath, outFname)
}

const isKeyChar: (charCode: number) => boolean = (() => {
  const capA = 65
  const capZ = 90
  const underscore = 95
  const lowA = 97
  const lowZ = 122
  const zero = 48
  const nine = 57

  return (charCode: number): boolean => {
    if (charCode >= capA) {
      return (
        charCode <= capZ ||
        (charCode >= lowA && charCode <= lowZ) ||
        charCode === underscore
      )
    }
    return charCode >= zero && charCode <= nine
  }
})()

const lookup = (key: string): string => {
  const [kind, color, tone] = key.split('_')

  const twColor = colors[color]

  if (!twColor) {
    throw new Error(`color '${color}' not found`)
  }

  if ('string' === typeof twColor) {
    if (tone) {
      throw new Error(`color '${color}:${tone}' not found`)
    }

    return twColor
  }

  const twColorTone = twColor[tone]

  if (!twColorTone) {
    throw new Error(`color '${color}:${tone}' not found`)
  }

  return twColorTone
}

const substitute = (content: string): string => {
  const anchor = 'TW_'
  const anchorLen = 3

  let result = ''

  let off1 = 0
  let off2 = content.indexOf(anchor)

  while (0 <= off2) {
    result = result.concat(content.substring(off1, off2))

    off1 = off2
    off2 += anchorLen

    for (let c = content.charCodeAt(off2); isKeyChar(c); ) {
      c = content.charCodeAt(++off2)
    }

    const key = content.substring(off1, off2)

    const value = lookup(key)
    result = result.concat(value)

    off1 = off2
    off2 = content.indexOf(anchor, off1)
  }

  result = result.concat(content.substring(off1))

  return result
}

const processFile = (filename: string): Promise<any> =>
  readFile(pathJoin(inputPath, filename), {
    encoding: 'utf8',
  })
    .then(substitute)
    .then(substitutedContent =>
      writeFile(makeOutputFilename(filename), substitutedContent)
    )

mkdir(outputPath, { recursive: true })
  .then(() => readdir(inputPath, { encoding: 'utf8' }))
  .then((files: string[]): Promise<void>[] => files.map(processFile))
  .then((fileJobs: Promise<void>[]): Promise<void[]> => Promise.all(fileJobs))
  .catch((err: Error) => {
    console.error(err.message)
    process.exit(1)
  })
