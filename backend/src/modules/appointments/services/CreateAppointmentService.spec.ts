import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('Should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();

    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '154334356753456',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('154334356753456');
  });

  it('Should NOT be able to create two appointments on the same datetime', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();

    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointmentDate = new Date(2020, 4, 10, 11);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '154334356753456',
    });

    await expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '154334356753456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
