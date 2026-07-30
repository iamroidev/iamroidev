export const config = { runtime: 'edge' };

// 18×18 PNG icons (base64) — inline so Gmail can't strip them
const ICON_PHONE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAjUlEQVR42q3UXQ6AIAgAYGC95b3ySnmAulLdK5/tobmxhESWT47JN/APQRnHNhcpHlNGKY5WoAeSB5HWTh5kWa8nB0KplZEXqfOaSzAwONJstrUaCTn30O6RFeHJ6ql5kS5kRT6hEUSFRhEAAHpfdQ8SU0ay3hNTa9qLHnm8xAO8FUtbvIDfvhH862O7ARXGS7vopoASAAAAAElFTkSuQmCC";
const ICON_MAIL  = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAlUlEQVR42q2UQRLAEAxFJWOn9+JKHECvpPdirat2jCaI6V+ZTDx/kA+KUYqmUnUXClB1WAXMgLgDoXpxB0LtwV1ID9Nt0fosglzn8a415aZtoNQfmKKpSEFGzqzP5EHIWbY+f4AchAU9sNbdCDIE9e5m94bS12FB3OxI5EIBVH8rRVOlav8g7A5tnwC4kjUrMQJ/BdsNDoF+OzCqbJEAAAAASUVORK5CYII=";
const ICON_PIN   = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAhklEQVR42rVUQQ6AIAxzveq/5EvyAP2S/kvOesKYubERpCdYQuk6KA0K9nW8pHqIiaQ6eQksQrJI5uV81sc2qWTwkkj79xnUKtHIYHmRSXhbHLDMzQq4Eq4KngmVSD5mtwKWN956f0XS7aXJQfs7NQgx0b+tlVRZDzKfhRUP3gToEyMtwXYDUBJGuP10kO8AAAAASUVORK5CYII=";
const ICON_LI    = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAtUlEQVR42mNkgAKutEP/GcgA32bZMTIwMDAwUWIIsl5GSgxBBkwMVAK0M0hTiosh1V6SZIFY0AWuP/vGcP3ZN+p47fkESxR2Q4ACw84SPYaTtUYMfobCxLkIHbCyMDG8/fKbwb3nEoOiCAfDjhI9hk3n35Ie2EyMDAyLjr1kYGBgYLj/5gcDPycLebH2+89/ho/f/sD5////J8+gf///0zcdDecsAitPKAHfZtkxMiEXTpQUbADHGzvhP0quUAAAAABJRU5ErkJggg==";
const ICON_GH    = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAgUlEQVR42mNkgAIVTf3/DGSAO9cvMjIwMDAwUWIIsl5GSgxBBiz4JG9fu4AhpqplgFUtEymG4BPH6jVkxcguwCWO1UX4FOMyFK/XcIUFyWFEKqC9QaTGGhO+MEDXhC8icKZsXDbjCnCqxRrV8hr1Yg1WnlAC7ly/yMiEXDhRUrABAO1cOxh/nZCIAAAAAElFTkSuQmCC";
const ICON_GLOBE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAkUlEQVR42rVUyRGAIAxMGH7al7QEBUhL2pe89SNOjATU6P4IZGfZHAg7prFb4QVcSAgAYDQkNBc1JBS2djn45XSeY/+MKBPMsYfBLwcBjTeJaCIHJeRvDHwEc1cNV8b9sy2DpVjTI65IUsnJ//Go9HepPX6rmq1VpOSX1JDVWVOPyJ3Ei9l5n2jgQkJDl5NmsW0+OUh85iLkTQAAAABJRU5ErkJggg==";

const SIGNATURE = `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;max-width:500px;">
<tr>
  <td style="padding:0 0 10px 0;" colspan="3">
    <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
      <tr><td style="height:3px;background-color:#b8860b;border-radius:2px;font-size:0;line-height:0;">&nbsp;</td></tr>
    </table>
  </td>
</tr>
<tr>
  <td style="vertical-align:top;padding-right:16px;width:88px;">
    <img src="https://richardkwakuopoku.site/img/roi.jpg" width="80" height="80" alt="Richard Kwaku Opoku" style="display:block;border-radius:50%;width:80px;height:80px;object-fit:cover;border:2px solid #b8860b;" />
  </td>
  <td style="width:1px;background-color:#e0c96e;padding:0;font-size:0;">&nbsp;</td>
  <td style="vertical-align:top;padding-left:16px;">
    <p style="margin:0 0 1px 0;font-size:17px;font-weight:700;color:#111111;font-family:Arial,Helvetica,sans-serif;line-height:1.2;">Richard Kwaku Opoku</p>
    <p style="margin:0 0 10px 0;font-size:11px;font-weight:600;color:#b8860b;text-transform:uppercase;letter-spacing:1px;font-family:Arial,Helvetica,sans-serif;">Cloud &amp; Full-Stack Engineer</p>
    <table cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="padding:0 6px 4px 0;vertical-align:middle;"><img src="${ICON_PHONE}" width="16" height="16" alt="" style="display:block;" /></td>
        <td style="font-size:12px;color:#444444;padding-bottom:4px;font-family:Arial,Helvetica,sans-serif;">+233 55 150 0736</td>
      </tr>
      <tr>
        <td style="padding:0 6px 4px 0;vertical-align:middle;"><img src="${ICON_MAIL}" width="16" height="16" alt="" style="display:block;" /></td>
        <td style="font-size:12px;padding-bottom:4px;font-family:Arial,Helvetica,sans-serif;"><a href="mailto:richardkwakuopoku06@gmail.com" style="color:#444444;text-decoration:none;">richardkwakuopoku06@gmail.com</a></td>
      </tr>
      <tr>
        <td style="padding:0 6px 0 0;vertical-align:middle;"><img src="${ICON_PIN}" width="16" height="16" alt="" style="display:block;" /></td>
        <td style="font-size:12px;color:#444444;font-family:Arial,Helvetica,sans-serif;">UMaT, Tarkwa &mdash; Ghana</td>
      </tr>
    </table>
    <table cellpadding="0" cellspacing="0" border="0" style="margin-top:10px;">
      <tr>
        <td style="padding-right:6px;"><a href="https://linkedin.com/in/richardkwakuopoku982" style="text-decoration:none;"><img src="${ICON_LI}" width="22" height="22" alt="LinkedIn" style="display:block;border-radius:4px;" /></a></td>
        <td style="padding-right:6px;"><a href="https://github.com/iamroidev" style="text-decoration:none;"><img src="${ICON_GH}" width="22" height="22" alt="GitHub" style="display:block;border-radius:4px;" /></a></td>
        <td><a href="https://richardkwakuopoku.site" style="text-decoration:none;"><img src="${ICON_GLOBE}" width="22" height="22" alt="Portfolio" style="display:block;border-radius:4px;" /></a></td>
      </tr>
    </table>
  </td>
</tr>
<tr>
  <td colspan="3" style="padding-top:10px;">
    <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
      <tr><td style="height:1px;background-color:#e8e0cc;font-size:0;line-height:0;">&nbsp;</td></tr>
    </table>
    <p style="margin:5px 0 0 0;font-size:10px;color:#aaaaaa;font-family:Arial,Helvetica,sans-serif;">BSc Computer Science &amp; Engineering, Year 3 &nbsp;&middot;&nbsp; University of Mines and Technology</p>
  </td>
</tr>
</table>`;

const PAGE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Email Signature</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0;}
:root{
  --bg:#0d0d0d;
  --card:#161616;
  --border:#2a2a2a;
  --fg:#e8e4df;
  --muted:#7a7672;
  --accent:#b8860b;
}
body{background:var(--bg);color:var(--fg);font-family:'Inter',sans-serif;min-height:100vh;display:flex;align-items:flex-start;justify-content:center;padding:60px 20px 80px;}
.wrap{width:100%;max-width:600px;}

.eyebrow{font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--accent);margin-bottom:8px;}
h1{font-family:'Cormorant Garamond',serif;font-size:28px;font-weight:400;color:var(--fg);margin-bottom:4px;line-height:1.2;}
.sub{font-size:13px;color:var(--muted);margin-bottom:32px;}

.preview-card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:32px;margin-bottom:16px;}
.preview-label{font-size:11px;color:var(--muted);letter-spacing:1px;text-transform:uppercase;margin-bottom:16px;}
.sig-preview{background:#ffffff;border-radius:8px;padding:24px;display:inline-block;}

.copy-btn{width:100%;padding:14px;background:var(--accent);color:#fff;border:none;border-radius:8px;font-family:'Inter',sans-serif;font-size:14px;font-weight:600;cursor:pointer;letter-spacing:0.3px;transition:background .15s,transform .1s;}
.copy-btn:hover{background:#9a7009;}
.copy-btn:active{transform:scale(0.99);}
.copy-btn.ok{background:#2d6a2d;}

.steps-card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:28px;margin-top:16px;}
.steps-card h2{font-size:14px;font-weight:600;color:var(--fg);margin-bottom:16px;}
.steps-card ol{padding-left:20px;color:var(--muted);font-size:13px;line-height:2.4;}
.steps-card li span{color:var(--fg);}
code{background:#1e1e1e;color:var(--accent);padding:2px 7px;border-radius:4px;font-size:12px;font-family:monospace;}
.tip{margin-top:16px;padding:12px 16px;background:#1a1600;border:1px solid #3a2d00;border-radius:8px;font-size:12px;color:#c8a832;line-height:1.6;}
</style>
</head>
<body>
<div class="wrap">
  <p class="eyebrow">richardkwakuopoku.site</p>
  <h1>Email Signature</h1>
  <p class="sub">Copy once, paste into Gmail. Takes 30 seconds.</p>

  <div class="preview-card">
    <p class="preview-label">Preview</p>
    <div class="sig-preview" id="sig">%%SIG%%</div>
  </div>

  <button class="copy-btn" id="btn" onclick="copySig()">Copy Signature</button>

  <div class="steps-card">
    <h2>Setup in Gmail</h2>
    <ol>
      <li>Click <span>Copy Signature</span> above</li>
      <li>Open Gmail &rarr; <span>Settings &#9881;</span> &rarr; <span>See all settings</span></li>
      <li>Scroll to <span>Signature</span> &rarr; <span>+ Create new</span> &rarr; name it <code>Professional</code></li>
      <li>Click inside the signature box &rarr; <code>Ctrl+V</code></li>
      <li>Set as default for <span>New emails</span> and <span>On reply/forward</span></li>
      <li>Scroll down &rarr; <span>Save Changes</span></li>
    </ol>
    <div class="tip">
      Photo loads from <code>richardkwakuopoku.site/img/roi.jpg</code>. Make sure <code>img/roi.jpg</code> is in your repo and deployed on Vercel.
    </div>
  </div>
</div>

<script>
async function copySig() {
  const sig = document.getElementById('sig');
  const btn = document.getElementById('btn');
  const html = sig.innerHTML;

  // Select visually
  const range = document.createRange();
  range.selectNodeContents(sig);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  try {
    await navigator.clipboard.write([
      new ClipboardItem({ 'text/html': new Blob([html], { type: 'text/html' }) })
    ]);
  } catch {
    document.execCommand('copy');
  }

  btn.textContent = '✓ Copied — now paste into Gmail';
  btn.classList.add('ok');
  setTimeout(() => {
    btn.textContent = 'Copy Signature';
    btn.classList.remove('ok');
    window.getSelection().removeAllRanges();
  }, 3500);
}
</script>
</body>
</html>`;

export default function handler() {
  const html = PAGE.replace('%%SIG%%', SIGNATURE);
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
