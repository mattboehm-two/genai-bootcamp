
import express from 'express';
import { transform } from 'esbuild';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;

// Middleware to handle .tsx and .ts files
app.use(async (req, res, next) => {
  const filePath = path.join(__dirname, req.path);

  if (req.path.endsWith('.tsx') || req.path.endsWith('.ts')) {
    try {
      const source = await fs.readFile(filePath, 'utf-8');
      const { code } = await transform(source, {
        loader: req.path.endsWith('.tsx') ? 'tsx' : 'ts',
        format: 'esm',
        target: 'es2020',
      });
      res.set('Content-Type', 'application/javascript');
      res.send(code);
    } catch (error) {
      if (error.code === 'ENOENT') {
        res.status(404).send('File not found');
      } else {
        console.error(`Error transforming ${req.path}:`, error);
        res.status(500).send('Internal Server Error');
      }
    }
  } else {
    next();
  }
});

// Serve static files from the root directory
app.use(express.static(__dirname));

// SPA fallback: all other routes serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
