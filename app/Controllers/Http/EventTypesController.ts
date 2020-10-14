//import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import EventType from "App/Models/EventType";

export default class EventTypesController {
  public async index () {
    return await EventType.all()
  }

}
