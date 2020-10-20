import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Grades extends BaseSchema {
  protected tableName = 'grades'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary
      table.string('name').unique
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
