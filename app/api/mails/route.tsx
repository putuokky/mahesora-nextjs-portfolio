// app/api/socials/route.ts
import { NextResponse } from 'next/server';

const mails = [
    { id: 1, email: 'okkymahes@gmail.com' },
];

export async function GET() {
    return NextResponse.json(mails);
}
