import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0d0d0d',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '72px 80px',
          borderTop: '6px solid #b8860b',
        }}
      >
        <div
          style={{
            fontSize: 72,
            color: '#e8e4df',
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
          }}
        >
          Richard Kwaku Opoku
        </div>
        <div
          style={{
            fontSize: 26,
            color: '#7a7672',
            marginTop: 28,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          Cloud & Cybersecurity · CS @ UMaT
        </div>
        <div
          style={{
            fontSize: 22,
            color: '#b8860b',
            marginTop: 'auto',
            alignSelf: 'flex-end',
          }}
        >
          iamroidev.vercel.app
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 627,
    },
  );
}
