//import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Event from 'App/Models/Event'

export default class EventsController {
  public async index () {
    const eventos = await Event
                          .query()
                          .preload('status')
                          .preload('type')    
                          .preload('evaluation', (query) =>{ query.preload('subject', (query) => {query.preload('grade')})})   
                          .preload('subject', (query) => query.preload('grade'))                              
    return eventos;
    }

 
}
