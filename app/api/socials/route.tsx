// app/api/socials/route.ts
import { NextResponse } from 'next/server';

const socials = [
    { id: 1, nama: 'facebook', link: 'https://www.facebook.com/okkymahesora' },
    // { id: 2, nama: 'twitter', link: 'https://twitter.com' },
    { id: 3, nama: 'instagram', link: 'https://instagram.com/okkymahesora' },
    { id: 4, nama: 'linkedin', link: 'https://instagram.com/okkymahesora' },
    { id: 5, nama: 'tiktok', link: 'https://www.tiktok.com/@vannemplo' },
    { id: 6, nama: 'github', link: 'https://github.com/putuokky' },
    // { id: 7, nama: 'youtube', link: 'https://www.youtube.com/' },
];

export async function GET() {
    return NextResponse.json(socials);
}
