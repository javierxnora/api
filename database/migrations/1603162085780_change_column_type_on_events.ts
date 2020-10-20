import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Events extends BaseSchema {
  protected tableName = 'events'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('event_status_id')
      table.dropColumn('event_type_id')
      table.dropColumn('evaluation_id')
    })
  }

  public async down () {
    
  }
}
