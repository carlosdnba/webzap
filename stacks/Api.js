import { Stack,WebSocketApi} from '@serverless-stack/resources';

export default class MyStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create the WebSocket API
    const api = new WebSocketApi(this, 'ws', {
      routes: {
        $connect: 'src/handlers/websocket.connect',
        $disconnect: 'src/handlers/websocket.disconnect',
        sendMessage: 'src/handlers/message.postMessage',
      },
    });

    // Show the API endpoint in the output
    this.addOutputs({
      ApiEndpoint: api.url,
    });
  }
}
