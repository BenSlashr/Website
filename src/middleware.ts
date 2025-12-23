import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Configuration - Activez la protection en mettant PREPROD_PASSWORD dans les variables d'environnement
const PREPROD_USER = process.env.PREPROD_USER || 'slashr';
const PREPROD_PASSWORD = process.env.PREPROD_PASSWORD;

export function middleware(request: NextRequest) {
  // Si pas de mot de passe configuré, on laisse passer (production)
  if (!PREPROD_PASSWORD) {
    return NextResponse.next();
  }

  // Vérifier l'authentification basique
  const authHeader = request.headers.get('authorization');

  if (authHeader) {
    const authValue = authHeader.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    if (user === PREPROD_USER && pwd === PREPROD_PASSWORD) {
      return NextResponse.next();
    }
  }

  // Demander l'authentification
  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Slashr Preprod"',
    },
  });
}

// Appliquer à toutes les routes sauf les assets statiques
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};
