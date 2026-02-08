import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    if (username === 'admin' && password === 'admin') {
      const cookie = serialize('auth', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 1 day
        path: '/',
      });

      const response = NextResponse.json({ message: 'Login successful' });
      response.headers.set('Set-Cookie', cookie);
      return response;
    } else {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong', error: error.message },
      { status: 500 }
    );
  }
}
