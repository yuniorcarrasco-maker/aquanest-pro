#!/usr/bin/env node
/**
 * AquaNest Pro — Local Development Server
 * ============================================
 *
 * Este servidor permite servir los archivos locales correctamente
 * sin problemas de CORS que ocurren cuando abres index.html directamente
 *
 * Uso:
 *   node server.js
 *
 * Luego abre tu navegador en: http://localhost:8000
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 8000;
const HOST = 'localhost';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

const server = http.createServer((req, res) => {
  // Parsear la URL
  const parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;

  // Remover leading slash
  if (pathname !== '/') {
    pathname = pathname.slice(1);
  }

  // Si es raíz, servir index.html
  if (pathname === '' || pathname === '/') {
    pathname = 'index.html';
  }

  // Construcción de la ruta del archivo
  const filePath = path.join(__dirname, pathname);

  // Validar que la ruta está dentro de __dirname (seguridad)
  const realPath = path.resolve(filePath);
  const realDir = path.resolve(__dirname);

  if (!realPath.startsWith(realDir)) {
    res.statusCode = 403;
    res.end('Acceso denegado');
    return;
  }

  // Intentar leer el archivo
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.statusCode = 404;
        res.end(`Archivo no encontrado: ${pathname}`);
      } else {
        res.statusCode = 500;
        res.end(`Error del servidor: ${err.message}`);
      }
      return;
    }

    // Obtener la extensión del archivo
    const ext = path.extname(filePath).toLowerCase();
    const mimeType = MIME_TYPES[ext] || 'application/octet-stream';

    // Configurar headers de caché para desarrollo
    res.setHeader('Content-Type', mimeType);
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    res.statusCode = 200;
    res.end(data);
  });
});

server.listen(PORT, HOST, () => {
  console.log('');
  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log('║         🌊 AquaNest Pro — Local Server 🌊             ║');
  console.log('╠═══════════════════════════════════════════════════════╣');
  console.log(`║ Servidor iniciado en: http://${HOST}:${PORT}                      ║`);
  console.log('║                                                       ║');
  console.log('║ Abre tu navegador y ve a: http://localhost:8000      ║');
  console.log('║                                                       ║');
  console.log('║ Para detener el servidor: Ctrl+C                     ║');
  console.log('╚═══════════════════════════════════════════════════════╝');
  console.log('');
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Error: El puerto ${PORT} está en uso.`);
    console.error(`Prueba con otro puerto: node server.js 9000`);
  } else {
    console.error('❌ Error del servidor:', err.message);
  }
  process.exit(1);
});
