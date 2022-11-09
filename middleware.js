import { NextResponse } from 'next/server';

export const config = {
    matcher: ['/((?!api|_next/static|favicon.ico).*)'],
};

export function middleware(request) {
    return NextResponse.next();
}
