#!/usr/bin/env node
/**
 * AquaNest Pro — Enviar ZIP de Tarjetas a la Imprenta
 * =====================================================
 *
 * Este script:
 * 1. Genera un ZIP con todos los archivos print-ready
 * 2. Lo envía por email a la imprenta como adjunto
 *
 * Uso:
 *   GMAIL_PASSWORD=tu_contraseña node enviar-zip-imprenta.js
 *
 * O con .env:
 *   npm install dotenv nodemailer archiver
 *   node enviar-zip-imprenta.js
 */

const nodemailer = require('nodemailer');
const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

// Configuración
const CONFIG = {
  from: process.env.GMAIL_USER || 'tu_email@gmail.com',
  to: process.env.PRINTER_EMAIL || 'imprenta@email.com',
  subject: 'AquaNest Pro - Tarjetas de Negocio Print-Ready',
  printDir: path.join(__dirname, 'print'),
  zipName: 'AquaNest_Pro_Tarjetas_PrintReady.zip',
  message: `Hola,

Adjunto está el ZIP con todos los archivos print-ready para las tarjetas de negocio AquaNest Pro.

Contenido:
- PDF print-ready (3 páginas): Frente + Reversos Yunior & Yndira
- Especificaciones de impresión incluidas

Detalles:
- Tamaño: 3.5" x 2.25" (incluye 0.125" Bleed)
- Resolución: 300 DPI
- Acabado: Mate/Brillante (según disponibilidad)

Por favor confirmar recepción y tiempo estimado de entrega.

Saludos,
Yunior Carrasco
AquaNest Pro
www.aquanest-pro.com
(929) 259-2538`
};

async function generarYEnviarZIP() {
  try {
    console.log('📦 Preparando ZIP para envío...\n');

    // Crear ZIP en memoria
    const zipPath = path.join(CONFIG.printDir, CONFIG.zipName);
    const output = fs.createWriteStream(zipPath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    // Listar archivos en print/
    const archivos = fs.readdirSync(CONFIG.printDir);
    let archivosAgregados = 0;

    // Agregar archivos al ZIP
    for (const archivo of archivos) {
      if (archivo === CONFIG.zipName) continue; // No incluir el ZIP mismo

      const filePath = path.join(CONFIG.printDir, archivo);
      const stat = fs.statSync(filePath);

      if (stat.isFile()) {
        archive.file(filePath, { name: archivo });
        console.log(`  ✓ ${archivo}`);
        archivosAgregados++;
      }
    }

    if (archivosAgregados === 0) {
      console.error('❌ Error: No hay archivos en la carpeta print/');
      process.exit(1);
    }

    await new Promise((resolve, reject) => {
      output.on('close', resolve);
      archive.on('error', reject);
      archive.pipe(output);
      archive.finalize();
    });

    console.log(`\n✅ ZIP creado: ${CONFIG.zipName} (${archivosAgregados} archivos)\n`);

    // Enviar por email
    console.log('📧 Enviando email...');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: CONFIG.from,
        pass: process.env.GMAIL_PASSWORD
      }
    });

    await transporter.verify();
    console.log('   ✓ Conectado a Gmail');

    const info = await transporter.sendMail({
      from: CONFIG.from,
      to: CONFIG.to,
      subject: CONFIG.subject,
      text: CONFIG.message,
      attachments: [
        {
          filename: CONFIG.zipName,
          path: zipPath,
          contentType: 'application/zip'
        }
      ]
    });

    console.log('\n✅ ¡Email enviado exitosamente!');
    console.log(`   📮 Para: ${CONFIG.to}`);
    console.log(`   📎 Adjunto: ${CONFIG.zipName}`);
    console.log(`   📊 Tamaño: ${(fs.statSync(zipPath).size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   ID: ${info.messageId}`);
    console.log('\n🎉 La imprenta recibirá el ZIP como archivo adjunto real (no como link)');

  } catch (error) {
    console.error('❌ Error:');

    if (error.message.includes('Invalid login')) {
      console.error('\n⚠️  Problema de autenticación Gmail.');
      console.error('Soluciones:');
      console.error('1. Si usas 2FA, genera "Contraseña de Aplicación"');
      console.error('2. Ve a: https://myaccount.google.com/apppasswords');
      console.error('3. Ejecuta: GMAIL_PASSWORD=tu_contraseña node enviar-zip-imprenta.js');
    } else {
      console.error(error.message);
    }

    process.exit(1);
  }
}

// Validar que GMAIL_PASSWORD está configurado
if (!process.env.GMAIL_PASSWORD) {
  console.log('⚠️  Se necesita la contraseña de Gmail\n');
  console.log('Ejecuta así:');
  console.log('  GMAIL_PASSWORD=tu_contraseña node enviar-zip-imprenta.js\n');
  console.log('O crea un archivo .env con:');
  console.log('  GMAIL_PASSWORD=tu_contraseña\n');
  process.exit(1);
}

generarYEnviarZIP();
