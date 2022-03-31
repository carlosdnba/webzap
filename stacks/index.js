import Api from './Api';
import Storage from './Storage';

export default function main(app) {
  const { table } = new Storage(app, 'storage');

  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: 'nodejs14.x',
    environment: {
      tableName: table.tableName,
    },
  });
  app.addDefaultFunctionPermissions([table]);

  new Api(app, 'api');

  // Add more stacks
}
