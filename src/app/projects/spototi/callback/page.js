'use server'
import { NextRequest, NextResponse } from 'next/server';

export function GET(request) {
    const search = request.nextUrl.search;
    return new NextResponse(null, {
        status: 302,
        headers: { Location: `spototi://callback${qs ? '?' + qs : ''}` },
    });
}