import { startConnection, endConnection } from '../services/websocket'

export const connect = async ({ requestContext: { connectionId } }) => {
  await startConnection(connectionId);
  return { statusCode: 200, body: 'Connected' };
}

export const disconnect = async ({ requestContext: { connectionId } }) => {
  await endConnection(connectionId);
  return { statusCode: 200, body: 'Disconnected' };
}
