#!/usr/bin/env node
/**
 * AquaNest Pro — Enviar PDF a la Imprenta
 * ========================================
 *
 * Este script envía el PDF de tarjetas de negocio por email
 * con el archivo adjunto real (no como link)
 *
 * Uso:
 *   node enviar-pdf-imprenta.js
 *
 * Requisitos:
 *   - Tener npm instalado
 *   - Ejecutar: npm install nodemailer
 *   - Configurar credenciales de Gmail
 */

const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Configuración (usa variables de entorno o .env)
const CONFIG = {
  from: process.env.GMAIL_USER || 'tu_email@gmail.com',
  to: process.env.PRINTER_EMAIL || 'imprenta@email.com',
  subject: process.env.EMAIL_SUBJECT || 'Tarjetas de Negocio AquaNest Pro - PDF para Imprimir',
  pdfPath: path.join(__dirname, 'print', 'AquaNest-Pro-Business-Cards-Print.pdf'),
  message: process.env.EMAIL_BODY || `Hola,

Adjunto está el PDF listo para imprimir.

Especificaciones:
- Tamaño: 3.5" x 2"
- Resolución: 300 DPI
- Acabado: Mate/Brillante

Saludos`
};

async function enviarPDF() {
  try {
    // Validar que el PDF existe
    if (!fs.existsSync(CONFIG.pdfPath)) {
      console.error('❌ Error: No se encontró el archivo PDF en:', CONFIG.pdfPath);
      process.exit(1);
    }

    console.log('📧 Preparando envío del PDF a la imprenta...\n');

    // Crear transporte (necesitas contraseña de aplicación de Google)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || CONFIG.from,
        pass: process.env.GMAIL_PASSWORD // Usar variable de entorno o solicitarla
      }
    });

    // Verificar conexión
    await transporter.verify();
    console.log('✅ Conectado a Gmail\n');

    // Enviar email con PDF adjunto
    const info = await transporter.sendMail({
      from: CONFIG.from,
      to: CONFIG.to,
      subject: CONFIG.subject,
      text: CONFIG.message,
      attachments: [
        {
          filename: 'AquaNest-Pro-Business-Cards-Print.pdf',
          path: CONFIG.pdfPath,
          contentType: 'application/pdf'
        }
      ]
    });

    console.log('✅ ¡Email enviado exitosamente!');
    console.log('📨 ID:', info.messageId);
    console.log('📮 Para:', CONFIG.to);
    console.log('📎 Archivo:', 'AquaNest-Pro-Business-Cards-Print.pdf');
    console.log('\n🎉 La imprenta recibirá el PDF como archivo adjunto real (no como link)');

  } catch (error) {
    console.error('❌ Error al enviar el email:');

    if (error.message.includes('Invalid login')) {
      console.error('\n⚠️  Problema de autenticación. Soluciones:');
      console.error('1. Si usas 2FA en Gmail, necesitas una "Contraseña de Aplicación"');
      console.error('2. Ve a: https://myaccount.google.com/apppasswords');
      console.error('3. Genera una contraseña para "Correo" y "Windows"');
      console.error('4. Copia esa contraseña en el archivo .env');
    } else {
      console.error(error.message);
    }

    process.exit(1);
  }
}

// Si no tiene variable de entorno, solicitar contraseña
if (!process.env.GMAIL_PASSWORD) {
  console.log('⚠️  Se necesita la contraseña de Gmail\n');
  console.log('Opciones:');
  console.log('1. Crea un archivo .env con: GMAIL_PASSWORD=tu_contraseña');
  console.log('2. O ejecuta: GMAIL_PASSWORD=tu_contraseña node enviar-pdf-imprenta.js');
  console.log('\nℹ️  Si usas 2FA, usa "Contraseña de Aplicación" de Google');
  console.log('   https://myaccount.google.com/apppasswords\n');
  process.exit(1);
}

enviarPDF();
