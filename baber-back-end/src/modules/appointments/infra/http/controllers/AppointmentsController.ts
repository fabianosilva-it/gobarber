import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

export default class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { provider_id, date } = request.body;

    // const parsedDate = parseISO(date);

    const createAppointment = container.resolve(CreateAppointmentService);

    const appointments = await createAppointment.execute({
      // date: parsedDate,
      date,
      provider_id,
      user_id,
    });

    return response.json(classToClass(appointments));
  }
}