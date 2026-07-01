const { readFileSync } = require('fs');
const { join } = require('path');

module.exports = (req, res) => {
  const image = readFileSync(join(process.cwd(), 'img', 'portfolio-og.jpg'));

  res.setHeader('Content-Type', 'image/jpeg');
  res.setHeader('Content-Length', image.length);
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  res.setHeader('Accept-Ranges', 'none');

  if (req.method === 'HEAD') {
    res.status(200).end();
    return;
  }

  res.status(200).end(image);
};
