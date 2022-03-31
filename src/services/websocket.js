import { putItem, deleteItem, query } from './dynamodb'

export const startConnection = async connectionId => {
  const params = {
    TableName: process.env.tableName,
    Item: {
      pk: 'connection',
      sk: connectionId,
      id: connectionId,
    }
  }

  const response = await putItem(params)
  return response
}

export const endConnection = async connectionId => {
  const params = {
    TableName: process.env.tableName,
    Key: {
      pk: 'connection',
      sk: connectionId,
      id: connectionId,
    }
  }

  const response = await deleteItem(params)
  return response
}

export const getConnections = async () => {
  const params = {
    TableName: process.env.tableName,
    KeyConditionExpression: 'pk = :pk',
    ExpressionAttributeValues: {
      ':pk': 'connection'
    }
  }

  const response = await query(params)
  return response.Items
}
