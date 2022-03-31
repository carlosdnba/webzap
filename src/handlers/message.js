import { getConnections } from '../services/websocket'
import { postToConnection } from '../services/api-gateway'

export const postMessage = async (event) => {
  const messageData = JSON.parse(event.body).data;
  const { stage, domainName } = event.requestContext;
  const apigEndpoint = `${domainName}/${stage}`

  const connections = await getConnections()

  const promises = connections.map(({ id }) => postToConnection({
    endpoint: apigEndpoint,
    body: {
      ConnectionId: id,
      Data: messageData
    }
  }));
  await Promise.all(promises);

  return { statusCode: 200, body: 'Message sent' };
}
