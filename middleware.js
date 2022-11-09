import { NextResponse } from 'next/server';

export const config = {
    matcher: [
        // '/about',
    ],
};

export function middleware(request) {
    return NextResponse.next();
}
