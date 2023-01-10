import { NextRequest, NextResponse } from 'next/server';

import { validateToken } from '~/services/proxy/auth/validateToken';

const EXCLUDE_PATHS = ['/api/preview', '/api/exit-preview'];

export const apiMiddleware = (req: NextRequest) => {
  if (EXCLUDE_PATHS.includes(String(req?.nextUrl?.pathname))) {
    return NextResponse.next();
  }

  if (validateToken(req.headers.get('authorization'))) {
    return NextResponse.next();
  }

  return new Response(JSON.stringify({ message: 'Forbidden' }), {
    status: 403,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
