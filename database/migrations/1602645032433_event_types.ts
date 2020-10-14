import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class EventTypes extends BaseSchema {
  protected tableName = 'event_types'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary
      table.string('name')
      table.boolean('enabled')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
