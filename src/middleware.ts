import { NextRequest, NextResponse } from 'next/server';

import { apiMiddleware } from '~/middlewares';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/api')) {
    return apiMiddleware(req);
  }

  return NextResponse.next();
}
