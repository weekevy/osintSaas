
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json({
      message: 'API works fine',
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong', error: error.message },
      { status: 500 }
    );
  }
}

