from server import Websocket, WebsocketServer

class wsEvents(Websocket):
    def onMessage(self, message):
        self.broadcast(message)

    def onConnect(self):
        print(len(self.connections))

    def onDisconnect(self):
        print('Close')


server = WebsocketServer(ws_cls=wsEvents)
server.run()
