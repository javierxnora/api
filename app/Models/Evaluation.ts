
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Subject from './Subject'

export default class Evaluation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public subjectId: number
  @belongsTo(() => Subject)  public subject: BelongsTo<typeof Subject>
}
