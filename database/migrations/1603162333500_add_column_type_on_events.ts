import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Events extends BaseSchema {
  protected tableName = 'events'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('event_status_id')
      table.integer('event_type_id')
      table.integer('evaluation_id')
    })
  }

  public async down () {
    
  }
}
