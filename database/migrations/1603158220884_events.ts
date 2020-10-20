import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Events extends BaseSchema {
  protected tableName = 'events'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.date('date')
      table.string('start_time')
      table.string('end_time')
      table.integer('event_status_id')
      table.integer('event_type_id')
      table.integer('evaluation_id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
