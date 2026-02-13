import { NextResponse } from 'next/server';
import db from '@/database/config';
import { clearTokenCookies } from '@/lib/jwt';

export async function POST(request) {
  try {
    const token = request.cookies.get('token')?.value;
    const refreshToken = request.cookies.get('refreshToken')?.value;

    if (token || refreshToken) {
      // Remove session from database
      await db.execute(
        'DELETE FROM sessions WHERE token = ? OR refresh_token = ?',
        [token, refreshToken]
      );
    }

    const response = NextResponse.json({ success: true });
    clearTokenCookies(response);
    
    return response;

  } catch (error) {
    console.error('Logout error:', error);
    const response = NextResponse.json({ success: true });
    clearTokenCookies(response);
    return response;
  }
}
