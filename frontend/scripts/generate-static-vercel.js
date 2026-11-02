import fs from 'fs';
import path from 'path';

const distPath = path.join(process.cwd(), 'dist');
if (fs.existsSync(distPath)) {
  const staticVercelConfig = {
    cleanUrls: true,
    rewrites: [
      {
        source: "/(.*)",
        destination: "/index.html"
      }
    ]
  };

  fs.writeFileSync(
    path.join(distPath, 'vercel.json'),
    JSON.stringify(staticVercelConfig, null, 2)
  );
  console.log("✓ Generated clean static vercel.json in dist/");
}

