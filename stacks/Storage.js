import { Stack, Table, TableFieldType } from "@serverless-stack/resources";

export default class Storage extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create the table
    this.wsTable = new Table(this, "Connections", {
      fields: {
        id: TableFieldType.STRING,
      },
      primaryIndex: { partitionKey: "id" },
    });
  }
}
