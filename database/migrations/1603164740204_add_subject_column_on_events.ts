import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Events extends BaseSchema {
  protected tableName = 'events'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('subject_id')
    })
  }

  public async down () {
    
  }
}
