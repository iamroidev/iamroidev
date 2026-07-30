export const config = {
  runtime: 'edge',
};

const SIGNATURE = `<table cellpadding="0" cellspacing="0" border="0"
       style="font-family:Arial,sans-serif;font-size:13px;color:#1a1a1a;line-height:1.5;max-width:480px;">
  <tr>
    <td style="vertical-align:middle;padding-right:12px;">
      <img src="https://richardkwakuopoku.site/img/roi.jpg"
           alt="Richard Kwaku Opoku"
           width="64" height="64"
           style="border-radius:50%;display:block;object-fit:cover;object-position:center top;" />
    </td>
    <td style="vertical-align:top;border-left:2px solid #b8963e;padding-right:12px;height:64px;">&nbsp;</td>
    <td style="vertical-align:middle;">
      <div style="font-size:14px;font-weight:bold;color:#1a1a1a;margin-bottom:2px;">Richard Kwaku Opoku</div>
      <div style="font-size:12px;color:#555555;margin-bottom:1px;">BSc Computer Science &amp; Engineering, Year 3 &nbsp;&bull;&nbsp; UMaT, Tarkwa</div>
      <div style="font-size:12px;color:#555555;margin-bottom:3px;">+233 55 150 0736 &nbsp;&bull;&nbsp; richardkwakuopoku06@gmail.com</div>
      <div style="font-size:12px;">
        <a href="https://linkedin.com/in/richardkwakuopoku982" style="color:#b8963e;text-decoration:none;font-weight:bold;">LinkedIn</a>
        &nbsp;&nbsp;
        <a href="https://github.com/iamroidev" style="color:#b8963e;text-decoration:none;font-weight:bold;">GitHub</a>
        &nbsp;&nbsp;
        <a href="https://richardkwakuopoku.site" style="color:#b8963e;text-decoration:none;font-weight:bold;">richardkwakuopoku.site</a>
      </div>
    </td>
  </tr>
</table>`;

const PAGE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Email Signature — Richard Kwaku Opoku</title>
<style>
  body{margin:40px;font-family:Arial,sans-serif;background:#f2f2f2;}
  h2{font-size:15px;color:#333;margin:0 0 12px;}
  .sig-wrap{background:#fff;display:inline-block;padding:20px 24px;border-radius:8px;
            box-shadow:0 1px 4px rgba(0,0,0,.12);cursor:pointer;user-select:all;}
  .sig-wrap:hover{box-shadow:0 2px 8px rgba(184,150,62,.3);}
  .hint{margin-top:10px;font-size:12px;color:#888;}
  .steps{margin-top:28px;font-size:13px;color:#444;max-width:520px;}
  .steps h3{font-size:14px;color:#222;margin:0 0 8px;}
  .steps ol{margin:0;padding-left:20px;line-height:2;}
  code{background:#efefef;padding:1px 5px;border-radius:3px;font-size:12px;}
</style>
</head>
<body>
<h2>Your Gmail Email Signature</h2>
<div class="sig-wrap" id="sig">SIGNATURE_PLACEHOLDER</div>
<p class="hint">Click the box to select it, then Ctrl+C to copy.</p>

<div class="steps">
  <h3>How to add to Gmail</h3>
  <ol>
    <li>Click the white box above &rarr; it selects automatically &rarr; <code>Ctrl+C</code></li>
    <li>Open Gmail &rarr; Settings &#9881; &rarr; <em>See all settings</em></li>
    <li>Scroll to <em>Signature</em> &rarr; click <em>+ Create new</em> &rarr; name it <code>Professional</code></li>
    <li>Click inside the signature text area &rarr; <code>Ctrl+V</code> to paste</li>
    <li>Scroll to the bottom &rarr; <em>Save Changes</em></li>
  </ol>
</div>

<script>
  document.getElementById('sig').addEventListener('click', function() {
    const r = document.createRange();
    r.selectNodeContents(this);
    const s = window.getSelection();
    s.removeAllRanges();
    s.addRange(r);
  });
</script>
</body>
</html>`;

export default function handler() {
  const html = PAGE.replace('SIGNATURE_PLACEHOLDER', SIGNATURE);
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
