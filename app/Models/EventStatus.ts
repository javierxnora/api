import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class EventStatus extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ isPrimary: true })
  public name: string


}
