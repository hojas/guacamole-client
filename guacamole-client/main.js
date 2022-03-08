import Guacamole from 'guacamole-client'

const elm = document.getElementById('display')
const tunnelUrl = 'wss://hzvm.shiyanlou.com/websocket-tunnel'
const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJndWFjLmd1YWNkX2hvc3QiOiIxNzIuMTYuNTYuMjc6NDgyMiIsImd1YWMuaG9zdG5hbWUiOiIxOTIuMTY4LjQyLjYiLCJndWFjLnBhc3N3b3JkIjoiMTIzNDU2IiwiZ3VhYy5wb3J0IjoiNTkwMSIsImd1YWMucHJvdG9jb2wiOiJ2bmMiLCJndWFjLnVzZXJfaWQiOiIxNzM1ODE4In0.8qFzPbYahvOV32SPdp3WfR86TbOauZgZHJDQ92-R3_kNsoP51c9ZdPx6GV1MarMh676io3jkKfLmRU-C7ltLXQ'

const tunnel = new Guacamole.ChainedTunnel(new Guacamole.WebSocketTunnel(
  tunnelUrl))
const client = new Guacamole.Client(tunnel)
const optimalDpi = (window.devicePixelRatio || 1) * 96
const connectArgs = `token=${token}&GUAC_DPI=${optimalDpi}`

elm.appendChild(client.getDisplay().getElement())
client.connect(connectArgs)
