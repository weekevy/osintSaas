import { NextResponse } from 'next/server';
import { verifyToken } from './lib/jwt';

export function proxy(request) {  // <-- Renamed from middleware to proxy
  const { pathname } = request.nextUrl;

  // Handle preflight OPTIONS requests
  if (request.method === 'OPTIONS') {
    const response = new NextResponse(null, { status: 200 });
    response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5173');
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return response;
  }

  // Public paths that don't require authentication
  const publicPaths = [
    '/api/login',
    '/api/register',
    '/api/check-auth',
    '/_next',
    '/favicon.ico'
  ];

  if (publicPaths.some(path => pathname.startsWith(path))) {
    const response = NextResponse.next();
    response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5173');
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    return response;
  }

  // Check authentication for protected routes
  const token = request.cookies.get('token')?.value;

  if (!token) {
    if (pathname.startsWith('/api/')) {
      const response = NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
      response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5173');
      response.headers.set('Access-Control-Allow-Credentials', 'true');
      return response;
    }
    return NextResponse.redirect(new URL('/', request.url));
  }

  const decoded = verifyToken(token);
  
  if (!decoded) {
    if (pathname.startsWith('/api/')) {
      const response = NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
      response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5173');
      response.headers.set('Access-Control-Allow-Credentials', 'true');
      return response;
    }
    return NextResponse.redirect(new URL('/', request.url));
  }

  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5173');
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  
  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
