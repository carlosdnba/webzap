import AWS from 'aws-sdk';
import { endConnection } from './websocket'

export const clientByEndpoint = endpoint => new AWS.ApiGatewayManagementApi({
  endpoint,
});

export const postToConnection = async ({ endpoint, body }) => {
  const client = clientByEndpoint(endpoint);
  console.log({ endpoint, body })
  try {
    const response = await client.postToConnection(body).promise();
    return response;
  } catch (e) {
    if (e.statusCode === 410) {
      await endConnection(body.ConnectionId)
    }
  }
}
