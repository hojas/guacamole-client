const { promises: fsPromises } = require('fs')

const composeFiles = async () => {
  const path = './guacamole-common-js/src/main/webapp/modules/'
  const files = await fsPromises.readdir(path)

  const readFiles = files.map(file => fsPromises.readFile(path + file))

  const res = await Promise.all(readFiles)
  let data = res.map(data => data.toString()).join('\n\n')
  data += '\nmodule.exports = Guacamole;\n\n'

  fsPromises.writeFile('./guacamole-client.js', data)
}

composeFiles()
