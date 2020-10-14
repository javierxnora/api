
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Grade from './Grade'

export default class Subject extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public gradeId: number
  
   //Foreign Keys
   @belongsTo(() => Grade)  public grade: BelongsTo<typeof Grade>
  
}
