import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  website?: string;
  company?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    const { firstName, lastName, email, phone, website, company, message } = body;

    // Validation basique
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis.' },
        { status: 400 }
      );
    }

    // Email à l'équipe Slashr
    const { error } = await resend.emails.send({
      from: 'Slashr Contact <contact@slashr.fr>',
      to: ['hello@slashr.fr'],
      replyTo: email,
      subject: `Nouveau contact de ${firstName} ${lastName}${company ? ` - ${company}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316;">Nouveau message de contact</h2>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Informations du contact</h3>
            <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
            <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Téléphone :</strong> <a href="tel:${phone}">${phone}</a></p>
            ${company ? `<p><strong>Entreprise :</strong> ${company}</p>` : ''}
            ${website ? `<p><strong>Site web :</strong> <a href="${website}">${website}</a></p>` : ''}
          </div>

          <div style="background: #fff; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #333;">Message</h3>
            <p style="white-space: pre-wrap; color: #555;">${message}</p>
          </div>

          <p style="color: #888; font-size: 12px; margin-top: 20px;">
            Ce message a été envoyé depuis le formulaire de contact de slashr.fr
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi du message.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue.' },
      { status: 500 }
    );
  }
}
