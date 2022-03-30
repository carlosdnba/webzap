import { putItem, deleteItem } from './dynamodb'

export const startConnection = async connectionId => {
  const params = {
    TableName: process.env.tableName,
    Item: {
      id: connectionId
    }
  }

  const response = await putItem(params)
  return response
}

export const endConnection = async connectionId => {
  const params = {
    TableName: process.env.tableName,
    Item: {
      id: connectionId
    }
  }

  const response = await deleteItem(params)
  return response
}  
