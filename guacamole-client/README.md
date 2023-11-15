## About

guacamole-client is the superproject containing all Maven-based projects that
make Apache Guacamole, an HTML5 web application that provides access to your
desktop using remote desktop protocols.

guacamole-client is used to build the subprojects that make up Guacamole, and
to provide a common central repository. Each project contained here is
completely independent of guacamole-client and can be built separately, though
the others may have to be built first. If all projects are built using
guacamole-client, Maven will take care of the proper build order.

## Install

```shell
$ npm install guacamole-client
```

## Use

```javascript
import Guacamole from 'guacamole-client'

const tunnelUrl = 'wss://your/websocket-tunnel'
const token = 'your token'

const tunnel = new Guacamole.ChainedTunnel(
  new Guacamole.WebSocketTunnel(tunnelUrl)
)
const client = new Guacamole.Client(tunnel)
const connectArgs = `token=${token}`

const el = client.getDisplay().getElement()
document.getElementById('display').appendChild(el)
client.connect(connectArgs)
```

## More

http://guacamole.apache.org/
