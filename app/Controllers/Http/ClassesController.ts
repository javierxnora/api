import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import Database from '@ioc:Adonis/Lucid/Database';

import Class from "App/Models/Class";

export default class ClassesController {
  public async index (){//ctx: HttpContextContract) {
    //retorno todas las clases
    return await Class
                  .query()               
                  .preload('grade')
                  .orderBy('grade_id')
                  
  }

  public async show (ctx: HttpContextContract) {
    //Con este código estoy filtrando por nivel, es decir, solo muestro las clases que pertenecen al nivel ingresado
    const clase = await Class
                        .query()
                        .preload('grade')
                        .where('grade_id', ctx.params.idNivel)


    return clase
 
   }


}
