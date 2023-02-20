import { promises as fsPromises } from 'fs'

const composeFiles = async () => {
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
    console.log('compose done')
  })
  .catch(() => {
    console.error('compose failed')
  })
