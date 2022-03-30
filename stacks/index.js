import Api from './Api';
import Storage from './Storage';

export default function main(app) {
  const { wsTable } = new Storage(app, 'storage');

  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: 'nodejs14.x',
    environment: {
      tableName: wsTable.tableName,
    },
  });
  app.addDefaultFunctionPermissions([wsTable]);
  // wsTable

  new Api(app, 'api');

  // Add more stacks
}
