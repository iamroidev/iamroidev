export const config = {
  runtime: 'edge',
};

// The actual signature — pure table HTML, safe to paste into Gmail
const SIGNATURE = `<table cellpadding="0" cellspacing="0" border="0" style="font-family:'Segoe UI',Arial,sans-serif;font-size:13px;color:#1a1a1a;border-collapse:collapse;max-width:520px;">
  <!-- Top accent bar -->
  <tr>
    <td colspan="3" style="padding:0;height:3px;background:linear-gradient(90deg,#b8860b,#e0a800 60%,#b8860b);border-radius:2px;"></td>
  </tr>
  <tr><td colspan="3" style="height:14px;"></td></tr>

  <!-- Photo + divider + details -->
  <tr>
    <!-- Photo -->
    <td style="vertical-align:top;padding-right:18px;">
      <img src="https://richardkwakuopoku.site/img/roi.jpg"
           alt="Richard Kwaku Opoku"
           width="80" height="80"
           style="border-radius:50%;display:block;width:80px;height:80px;object-fit:cover;object-position:70% 10%;border:2px solid #b8860b;" />
    </td>

    <!-- Divider -->
    <td style="width:1px;background:#d4aa50;padding:0;"></td>

    <!-- Details -->
    <td style="vertical-align:top;padding-left:18px;">
      <!-- Name -->
      <p style="margin:0 0 2px 0;font-size:17px;font-weight:700;color:#111111;letter-spacing:-0.3px;line-height:1.2;">Richard Kwaku Opoku</p>
      <!-- Role in gold -->
      <p style="margin:0 0 8px 0;font-size:12px;font-weight:600;color:#b8860b;text-transform:uppercase;letter-spacing:0.8px;">Cloud &amp; Full-Stack Engineer</p>

      <!-- Contact lines -->
      <table cellpadding="0" cellspacing="0" border="0" style="font-size:12px;color:#444444;">
        <tr>
          <td style="padding-right:6px;padding-bottom:3px;">
            <!-- Phone icon -->
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#b8860b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;display:inline-block;">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </td>
          <td style="padding-bottom:3px;color:#444444;">+233 55 150 0736</td>
        </tr>
        <tr>
          <td style="padding-right:6px;padding-bottom:3px;">
            <!-- Email icon -->
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#b8860b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;display:inline-block;">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
          </td>
          <td style="padding-bottom:3px;">
            <a href="mailto:richardkwakuopoku06@gmail.com" style="color:#444444;text-decoration:none;">richardkwakuopoku06@gmail.com</a>
          </td>
        </tr>
        <tr>
          <td style="padding-right:6px;">
            <!-- Location icon -->
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#b8860b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;display:inline-block;">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
          </td>
          <td style="color:#444444;">UMaT, Tarkwa — Ghana</td>
        </tr>
      </table>

      <!-- Social links -->
      <p style="margin:10px 0 0 0;">
        <a href="https://linkedin.com/in/richardkwakuopoku982" style="display:inline-block;margin-right:8px;text-decoration:none;">
          <table cellpadding="0" cellspacing="0" border="0" style="display:inline-table;">
            <tr>
              <td style="background:#b8860b;border-radius:4px;padding:4px 8px;">
                <span style="color:#ffffff;font-size:11px;font-weight:600;letter-spacing:0.3px;font-family:'Segoe UI',Arial,sans-serif;">in LinkedIn</span>
              </td>
            </tr>
          </table>
        </a>
        <a href="https://github.com/iamroidev" style="display:inline-block;margin-right:8px;text-decoration:none;">
          <table cellpadding="0" cellspacing="0" border="0" style="display:inline-table;">
            <tr>
              <td style="background:#1a1a1a;border-radius:4px;padding:4px 8px;">
                <span style="color:#ffffff;font-size:11px;font-weight:600;letter-spacing:0.3px;font-family:'Segoe UI',Arial,sans-serif;">&#9632; GitHub</span>
              </td>
            </tr>
          </table>
        </a>
        <a href="https://richardkwakuopoku.site" style="display:inline-block;text-decoration:none;">
          <table cellpadding="0" cellspacing="0" border="0" style="display:inline-table;">
            <tr>
              <td style="border:1px solid #b8860b;border-radius:4px;padding:3px 8px;">
                <span style="color:#b8860b;font-size:11px;font-weight:600;letter-spacing:0.3px;font-family:'Segoe UI',Arial,sans-serif;">&#127758; Portfolio</span>
              </td>
            </tr>
          </table>
        </a>
      </p>
    </td>
  </tr>

  <tr><td colspan="3" style="height:12px;"></td></tr>
  <!-- Bottom rule -->
  <tr>
    <td colspan="3" style="padding:0;height:1px;background:#e8e0d0;"></td>
  </tr>
  <tr>
    <td colspan="3" style="padding:5px 0 0;font-size:10px;color:#aaaaaa;">
      BSc Computer Science &amp; Engineering, Year 3 &nbsp;&middot;&nbsp; University of Mines and Technology
    </td>
  </tr>
</table>`;

const PAGE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Email Signature — Richard Kwaku Opoku</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  *{box-sizing:border-box;margin:0;padding:0;}
  body{background:#f0ece4;font-family:'Inter',sans-serif;min-height:100vh;display:flex;align-items:flex-start;justify-content:center;padding:48px 24px;}
  .page{width:100%;max-width:640px;}
  .label{font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:#b8860b;margin-bottom:10px;}
  .preview-wrap{background:#ffffff;border-radius:12px;padding:32px;box-shadow:0 2px 16px rgba(0,0,0,.08);margin-bottom:24px;}
  .copy-btn{display:block;width:100%;padding:12px;background:#b8860b;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;letter-spacing:0.3px;transition:background .15s;}
  .copy-btn:hover{background:#9a7009;}
  .copy-btn.copied{background:#2d7a2d;}
  .steps{background:#fff;border-radius:12px;padding:24px 28px;box-shadow:0 2px 16px rgba(0,0,0,.06);}
  .steps h3{font-size:13px;font-weight:600;color:#333;margin-bottom:12px;}
  .steps ol{padding-left:18px;font-size:13px;color:#555;line-height:2.2;}
  code{background:#f5f0e8;color:#b8860b;padding:1px 6px;border-radius:4px;font-size:12px;font-family:monospace;}
  .note{font-size:12px;color:#999;margin-top:12px;line-height:1.6;}
</style>
</head>
<body>
<div class="page">
  <div class="label">Email Signature Preview</div>

  <div class="preview-wrap">
    <div id="sig">%%SIGNATURE%%</div>
  </div>

  <button class="copy-btn" id="copyBtn" onclick="copySig()">Copy Signature</button>

  <div style="height:24px;"></div>

  <div class="steps">
    <h3>How to add to Gmail</h3>
    <ol>
      <li>Click <strong>Copy Signature</strong> above</li>
      <li>Open Gmail &rarr; Settings &#9881; &rarr; <em>See all settings</em></li>
      <li>Scroll to <strong>Signature</strong> &rarr; click <em>+ Create new</em> &rarr; name it <code>Professional</code></li>
      <li>Click inside the signature text box &rarr; <code>Ctrl+V</code> to paste</li>
      <li>Set it as default for <em>New emails</em> and <em>On reply</em></li>
      <li>Scroll down &rarr; <em>Save Changes</em></li>
    </ol>
    <p class="note">The photo loads from <code>richardkwakuopoku.site/img/roi.jpg</code> — make sure <code>img/roi.jpg</code> is pushed to your repo so Vercel serves it.</p>
  </div>
</div>

<script>
function copySig() {
  const sig = document.getElementById('sig');
  const range = document.createRange();
  range.selectNodeContents(sig);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);

  try {
    // Try clipboard API first
    const html = sig.innerHTML;
    const blob = new Blob([html], { type: 'text/html' });
    const item = new ClipboardItem({ 'text/html': blob });
    navigator.clipboard.write([item]).then(() => {
      showCopied();
    }).catch(() => {
      // Fallback: execCommand
      document.execCommand('copy');
      showCopied();
    });
  } catch(e) {
    document.execCommand('copy');
    showCopied();
  }
}

function showCopied() {
  const btn = document.getElementById('copyBtn');
  btn.textContent = '✓ Copied — paste into Gmail';
  btn.classList.add('copied');
  setTimeout(() => {
    btn.textContent = 'Copy Signature';
    btn.classList.remove('copied');
  }, 3000);
}
</script>
</body>
</html>`;

export default function handler() {
  const html = PAGE.replace('%%SIGNATURE%%', SIGNATURE);
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
