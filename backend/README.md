# Password recovery

**RF**

- The user should be able to recover his password providing his e-mail address.
- The user should receive a e-mail with instructions to recover his password.
- The user should be able to reset his password.

**RNF**

- Use Mailtrap to test e-mail delivering during development.
- Use Amazon SES to deliver e-mail in production environment.
- E-mail delivering should be sent on background

**RN**

- The link sent by e-mail to reset the passwors must expire in two hours.
- The user should confirm his password before reseting it.

# Update profile

**RF**

- The user should be able to update his name, e-mail and password.

**RN**

- The user should not be able to update his e-mail to an existing e-mail.
- To update his password, the user needs to type the old password.
- To update his password, the user needs to confirm the new password.

# Provider dashboard

**RF**

- The provider should be able to list his appointments of a specific day.
- The provider should be able to receive a notification when a new booking is scheduled.
- The provider should be able to view unread notifications.

**RNF**

- The provider's appointments should be cached.
- The provider's notifications should be stored on MongoDB.
- The provider's notification should be sent in real-time using Socket.io.

**RN**

- The notifications needs to have the status of "read" or "unread".

# Appointment scheduling

**RF**

- The user should be able to list all the registered providers.
- The user should be able to list days with at least one spot available of a specific provider.
- The user should be able to list available spots in a specific day of a provider's agenda.
- The user should be able to schedule an appointment.

**RNF**

- The providers list should be cached.

**RN**

- Every appointment should last exactly one hour.
- The appointments should be available between 8AM and 6PM (First one at 8AM and last one at 5PM).
- The user should not be able to book in a taken time window.
- The user should not be able to book in dates in the past.
- The user should not be able to book a an appointment with himself.
