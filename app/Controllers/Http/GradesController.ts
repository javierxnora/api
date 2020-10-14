//import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Grade from "App/Models/Grade";

export default class GradesController {
  public async index (){//tx: HttpContextContract) {
    return await Grade.all()
  }

}
