import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Subject from 'App/Models/Subject'

export default class SubjectsController {
  public async index () {
    const asignaturas = await Subject
                            .query()
                            .preload('grade')                           
    return asignaturas;
    }

  public async show (ctx: HttpContextContract) {
    const asignatura = await Subject
                            .query()
                            .preload('grade')
                            .where('grade_id', ctx.params.idNivel)
    return asignatura;
    }

}
