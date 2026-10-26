import { promises as fsPromises } from 'node:fs'

async function composeFiles() {
  const path = '../guacamole-common-js/src/main/webapp/modules/'
  const files = await fsPromises.readdir(path)

  const readFiles = files.map(file => fsPromises.readFile(path + file))

  const res = await Promise.all(readFiles)
  let data = res.map(data => data.toString()).join('\n\n')
  data += '\nexport default Guacamole;\n\n'

  await fsPromises.writeFile('./guacamole-client.js', data)
}

composeFiles()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('compose done')
  })
  .catch(() => {
    console.error('compose failed')
  })
