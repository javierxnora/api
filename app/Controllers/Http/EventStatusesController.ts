import EventStatus from "App/Models/EventStatus"

export default class EventStatusesController {
  public async index () {
    return await EventStatus.all()
  }
}
