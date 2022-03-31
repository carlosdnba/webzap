import { Stack, Table, TableFieldType } from "@serverless-stack/resources";

export default class Storage extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create the table
    this.table = new Table(this, "table", {
      fields: {
        id: TableFieldType.STRING,
      },
      primaryIndex: { partitionKey: 'pk', sortKey: 'sk' },
    });
  }
}
