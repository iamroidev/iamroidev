import base64
from pathlib import Path

image_path = Path(__file__).resolve().parents[1] / "img" / "portfolio-og.jpg"
out_path = Path(__file__).resolve().parents[1] / "api" / "og-image.js"
b64 = base64.b64encode(image_path.read_bytes()).decode("ascii")

template = """export const config = {
  runtime: 'edge',
};

const IMAGE_BASE64 = '__B64__';

function decodeBase64(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

export default function handler() {
  const bytes = decodeBase64(IMAGE_BASE64);
  return new Response(bytes, {
    status: 200,
    headers: {
      'Content-Type': 'image/jpeg',
      'Content-Length': String(bytes.byteLength),
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Accept-Ranges': 'none',
    },
  });
}
"""

out_path.write_text(template.replace("__B64__", b64), encoding="utf-8")
print(f"wrote {out_path} ({out_path.stat().st_size} bytes)")
