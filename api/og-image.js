export const config = {
  runtime: 'edge',
};

const IMAGE_URL = 'https://iamroidev.vercel.app/img/portfolio-og.jpg';

export default async function handler() {
  const upstream = await fetch(IMAGE_URL, {
    headers: {
      'Accept-Encoding': 'identity',
    },
  });

  if (!upstream.ok) {
    return new Response('OG image unavailable', { status: 502 });
  }

  const buffer = await upstream.arrayBuffer();

  return new Response(buffer, {
    status: 200,
    headers: {
      'Content-Type': 'image/jpeg',
      'Content-Length': String(buffer.byteLength),
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Accept-Ranges': 'none',
    },
  });
}
