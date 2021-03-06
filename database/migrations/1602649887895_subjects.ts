import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Subjects extends BaseSchema {
  protected tableName = 'subjects'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary
      table.string('name')
      table.integer('grade_id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
