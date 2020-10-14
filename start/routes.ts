import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import Route from '@ioc:Adonis/Core/Route'

Route.get('/estados-evento', 'EventStatusesController.index')
Route.get('/tipos-evento', 'EventTypesController.index')
Route.get('/niveles', 'GradesController.index')
Route.get('/clases', 'ClassesController.index')
Route.get('/clases/:idNivel', 'ClassesController.show')
Route.get('/asignaturas/', 'SubjectsController.index')
Route.get('/asignaturas/:idNivel', 'SubjectsController.show')

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()
  
  return report.healthy
    ? response.ok(report)
    : response.badRequest(report)
})
