import { NextResponse } from 'next/server';

export function middleware(request) {
    console.log('invoke middleware');

    return NextResponse.next();
}
