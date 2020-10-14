import { BaseModel, BelongsTo, belongsTo, column} from '@ioc:Adonis/Lucid/Orm'
import Grade from './Grade'

export default class Class extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public gradeId: number
  
  @column()
  public letter: string

   //Foreign Keys
   @belongsTo(() => Grade)  public grade: BelongsTo<typeof Grade>
}
