import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import EventStatus from './EventStatus'
import EventType from './EventType'
import Evaluation from './Evaluation'
import Subject from './Subject'

export default class Event extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public  name: string

  @column()
  public  date: Date

  @column()
  public  startTime: string

  @column()
  public  endTime: string

  @column()
  public eventStatusId: number
  @belongsTo(() => EventStatus)  public status: BelongsTo<typeof EventStatus>

  @column()
  public eventTypeId: number
  @belongsTo(() => EventType)  public type: BelongsTo<typeof EventType>

  @column()
  public evaluationId: number
  @belongsTo(() => Evaluation)  public evaluation: BelongsTo<typeof Evaluation>

  @column()
  public subjectId: number
  @belongsTo(() => Subject)  public subject: BelongsTo<typeof Subject>


}
