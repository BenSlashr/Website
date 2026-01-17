import { NextResponse } from 'next/server';

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
const MAILCHIMP_API_SERVER = process.env.MAILCHIMP_API_SERVER;

export async function POST(request: Request) {
  try {
    // Vérifier la configuration
    if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID || !MAILCHIMP_API_SERVER) {
      console.error('Mailchimp configuration missing');
      return NextResponse.json(
        { error: 'Configuration serveur manquante.' },
        { status: 500 }
      );
    }

    const { email } = await request.json();

    // Validation basique
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 }
      );
    }

    // Appel API Mailchimp
    const response = await fetch(
      `https://${MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed', // ou 'pending' pour double opt-in
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      // Gérer le cas où l'email existe déjà
      if (data.title === 'Member Exists') {
        return NextResponse.json(
          { error: 'Cette adresse email est déjà inscrite.' },
          { status: 400 }
        );
      }

      console.error('Mailchimp error:', data);
      return NextResponse.json(
        { error: data.detail || 'Erreur lors de l\'inscription.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue.' },
      { status: 500 }
    );
  }
}
