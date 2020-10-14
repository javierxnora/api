import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class EventType extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public enabled: boolean
}
