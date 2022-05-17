import fsp from 'fs/promises'
import { dirname } from 'path'

import defaultPalettes from '../../templates/default-palettes'

const outputPath = process.argv[2]

if (!outputPath) {
  console.log('usage: ts-node translate-themes <output path>')
  process.exit(1)
}

fsp
  .mkdir(dirname(outputPath), { recursive: true })
  .then(() => fsp.open(outputPath, 'w'))
  .then(outf => ({
    outf,
    writes: Object.entries(defaultPalettes).map(([className, variables]) =>
      fsp.writeFile(
        outf,
        [
          `.${className} {`,
          ...Object.entries(variables).map(
            ([varName, value]) => `  ${varName}: ${value};`
          ),
          '}',
        ].join('\n') + '\n\n'
      )
    ),
  }))
  .then(({ outf, writes }) => Promise.all(writes).then(() => outf))
  .then(outf => outf.close())
  .catch((err: Error) => {
    console.error(err.message, err.stack)
    process.exit(1)
  })
