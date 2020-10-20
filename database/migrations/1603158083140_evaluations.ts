import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Evaluations extends BaseSchema {
  protected tableName = 'evaluations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary
      table.string('name')
      table.integer('subject_id')
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
