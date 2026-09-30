export default function handler(req, res) {
  const imageUrl =
    "https://pub-9106393a3bc14926b10613a0c98b892a.r2.dev/fol4/motorola14.gif";

  const adUrl =
    "https://escalatorquitdisguises.com/w9c4ikxt?key=7e2c97d899018ae0e47998b3dc46c846";

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Preview</title>
  <meta property="og:title" content="Preview">
  <meta property="og:description" content="Click to continue">
  <meta property="og:image" content="https://pub-9106393a3bc14926b10613a0c98b892a.r2.dev/fol4/motorola14.gif">
  <meta property="og:type" content="newslive.com">
</head>
<body style="margin:0">
  <a href="${adUrl}" rel="nofollow noopener noreferrer">
    <img
      src="${imageUrl}"
      alt="Preview"
      style="display:block;width:100%;height:auto;border:0"
    >
  </a>
</body>
</html>`;

  res.setHeader("Content-Type", "text/html; charset=UTF-8" );
  res.setHeader("Cache-Control", "no-store");

  return res.status(200).send(html);
}
