# ¿Por Qué la App No Se Abre Bien en Windows?

## El Problema
Cuando haces doble clic en `index.html`, la página se abre en blanco o gris porque los navegadores modernos **no permiten cargar archivos locales** (CSS, imágenes) cuando abres archivos directamente con el protocolo `file://`. Esto es una medida de seguridad.

## La Solución: Usar un Servidor Local

Tienes 3 opciones (ordenadas de más fácil a más difícil):

---

### ✅ **Opción 1: Usar el Script (MÁS FÁCIL)**

1. Busca el archivo **`serve.bat`** en la carpeta principal
2. **Haz doble clic** en él
3. Se abrirá una ventana negra con el mensaje:
   ```
   Server started! Open your browser and go to: http://localhost:8000
   ```
4. **Abre tu navegador** y ve a: **http://localhost:8000**
5. ¡Listo! La app debería funcionar perfectamente

**Para detener el servidor:** Cierra la ventana negra

---

### ✅ **Opción 2: Usar Python (si tienes instalado)**

1. Abre **PowerShell** o **CMD** en la carpeta del proyecto
2. Ejecuta:
   ```bash
   python -m http.server 8000
   ```
   O si usas Python 3:
   ```bash
   python3 -m http.server 8000
   ```
3. Abre tu navegador en: **http://localhost:8000**

**Para detener el servidor:** Presiona `Ctrl+C` en PowerShell

---

### ✅ **Opción 3: Usar Node.js (si tienes instalado)**

1. Abre **PowerShell** en la carpeta del proyecto
2. Ejecuta:
   ```bash
   npx http-server
   ```
3. Abre tu navegador en: **http://localhost:8080** (o el puerto que muestre)

---

## ¿Cuál Opción Elegir?

| Opción | Dificultad | Requisitos |
|--------|-----------|-----------|
| Script `serve.bat` | ⭐ Muy Fácil | Python o Node.js instalados |
| Python | ⭐⭐ Fácil | Python instalado |
| Node.js | ⭐⭐ Fácil | Node.js instalado |

---

## Verificar Requisitos

### ¿Tienes Python?
Abre PowerShell y ejecuta:
```bash
python --version
```
Si funciona, ¡tienes Python instalado!

### ¿Tienes Node.js?
Abre PowerShell y ejecuta:
```bash
node --version
```
Si funciona, ¡tienes Node.js instalado!

---

## Si No Tienes Ninguno Instalado

### Instalar Python (recomendado)
1. Ve a: https://www.python.org/downloads/
2. Descarga la última versión de Python
3. **Importante:** Marca la opción ✅ "Add Python to PATH" durante la instalación
4. Reinicia tu computadora
5. Prueba nuevamente con el `script serve.bat`

### Instalar Node.js
1. Ve a: https://nodejs.org/
2. Descarga la versión LTS
3. Instala normalmente
4. Reinicia tu computadora
5. Prueba nuevamente

---

## Resumen Rápido
```
1. Haz doble clic en serve.bat
2. Abre http://localhost:8000 en tu navegador
3. ¡Disfruta! 🎉
```

---

## Problemas Comunes

### El navegador dice "No se puede acceder a este sitio"
- Asegúrate de que `serve.bat` está ejecutándose (ventana negra abierta)
- Intenta con un navegador diferente (Chrome, Firefox, Edge)

### El archivo serve.bat no funciona
- Abre PowerShell en la carpeta
- Ejecuta: `python -m http.server 8000` directamente

### El puerto 8000 está en uso
- Cambia el puerto: `python -m http.server 9000`
- Luego abre: `http://localhost:9000`

---

**¿Preguntas?** Contacta al equipo de desarrollo.
