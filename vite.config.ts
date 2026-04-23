import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';

const base64ImagePlugin = () => ({
  name: 'base64-image-plugin',
  
  // Dev server middleware to decode on the fly
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url?.includes('.png')) {
        // Strip query params
        const urlPath = req.url.split('?')[0];
        const publicPath = path.join(process.cwd(), 'public', urlPath);
        const txtPath = publicPath + '.txt';
        
        if (fs.existsSync(txtPath)) {
          const b64 = fs.readFileSync(txtPath, 'utf8');
          const buffer = Buffer.from(b64.trim(), 'base64');
          res.setHeader('Content-Type', 'image/png');
          res.setHeader('Cache-Control', 'public, max-age=31536000');
          res.end(buffer);
          return;
        }
      }
      next();
    });
  },

  // Post-build processing to convert .txt to .png in dist
  async closeBundle() {
    const distDir = path.resolve(process.cwd(), 'dist');
    if (!fs.existsSync(distDir)) return;
    
    // Recursively handle conversion
    const processDir = (dir) => {
      const files = fs.readdirSync(dir, { withFileTypes: true });
      for (const file of files) {
        const fullPath = path.join(dir, file.name);
        if (file.isDirectory()) {
          processDir(fullPath);
        } else if (file.name.endsWith('.png.txt')) {
          const b64 = fs.readFileSync(fullPath, 'utf8');
          const buffer = Buffer.from(b64.trim(), 'base64');
          const finalPath = fullPath.replace(/\.png\.txt$/, '.png');
          fs.writeFileSync(finalPath, buffer);
          fs.unlinkSync(fullPath);
        }
      }
    };
    processDir(distDir);
  }
});

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), base64ImagePlugin()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
