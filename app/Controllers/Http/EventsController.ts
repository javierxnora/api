import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Event from 'App/Models/Event'

export default class EventsController {
  public async index (ctx: HttpContextContract) {
    const eventos = await Event
                          .query()
                          .preload('status')
                          .preload('type')    
                          .preload('evaluation', (query) =>{ query.preload('subject', (query) => {query.preload('grade')})})   
                          .preload('subject', (query) => query.preload('grade')) 
                          .where('events.date', ctx.request.get().eventDate)                             
    return eventos;
    }

 
}
