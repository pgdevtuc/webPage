import nodemailer from 'nodemailer';

export default async function sendMail(req, res) {
    if (req.method === 'POST') {
        const { name, email, phone, subject, message } = req.body;

        if (!name || !email || !phone || !subject || !message) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const emailMartin=process.env.EMAIL_MARTIN;
        const emailMatias=process.env.EMAIL_MATIAS;

        try {
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASS,
                },
            });

            const mailOptionsForAdmin = {
                from: `"${name}" ${email}`,
                to: process.env.EMAIL,
                subject: `${subject}`,
                html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
              <h2 style="color: #4CAF50;">${name}!</h2>
              <p>
               Se comunica con nosotros para:
              </p>
              <blockquote style="background-color: #f9f9f9; padding: 10px; border-left: 4px solid #4CAF50;">
                ${message}
              </blockquote>
              <p>Datos del usuario: email:${email}. Telefono:${phone}</p>
              <hr>
              <p style="font-size: 12px; color: #999;">
                Este correo fue generado automáticamente.
              </p>
            </div>
          `,
            };

            const mailOptionsForMartin = {
                from: `"${name}" ${email}`,
                to: emailMartin,
                subject: `${subject}`,
                html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
              <h2 style="color: #4CAF50;">${name}!</h2>
              <p>
               Se comunica con nosotros para:
              </p>
              <blockquote style="background-color: #f9f9f9; padding: 10px; border-left: 4px solid #4CAF50;">
                ${message}
              </blockquote>
              <p>Datos del usuario: email:${email}. Telefono:${phone}</p>
              <hr>
              <p style="font-size: 12px; color: #999;">
                Este correo fue generado automáticamente.
              </p>
            </div>
          `,
            };

            const mailOptionsForMatias = {
                from: `"${name}" ${email}`,
                to: emailMatias,
                subject: `${subject}`,
                html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
              <h2 style="color: #4CAF50;">${name}!</h2>
              <p>
               Se comunica con nosotros para:
              </p>
              <blockquote style="background-color: #f9f9f9; padding: 10px; border-left: 4px solid #4CAF50;">
                ${message}
              </blockquote>
              <p>Datos del usuario: email:${email}. Telefono:${phone}</p>
              <hr>
              <p style="font-size: 12px; color: #999;">
                Este correo fue generado automáticamente.
              </p>
            </div>
          `,
            };

            await transporter.sendMail(mailOptionsForMartin);
            await transporter.sendMail(mailOptionsForMatias);
            await transporter.sendMail(mailOptionsForAdmin);

            res.status(200).json({ message: 'Correos enviados exitosamente' });
        } catch (error) {
            console.error('Error al enviar los correos:', error);
            res.status(500).json({ message: 'Error al enviar los correos' });
        }

    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}

