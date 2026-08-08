@echo off
REM ============================================
REM AquaNest Pro — Local Server for Windows
REM ============================================
REM This script starts a local web server so the website loads correctly on Windows

echo.
echo Starting AquaNest Pro Web Server...
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo Using Python to serve files...
    python -m http.server 8000
    goto end
)

REM Check if Python3 is installed
python3 --version >nul 2>&1
if %errorlevel% == 0 (
    echo Using Python3 to serve files...
    python3 -m http.server 8000
    goto end
)

REM If Python not found, try Node.js
node --version >nul 2>&1
if %errorlevel% == 0 (
    echo Using Node.js to serve files...
    npx http-server
    goto end
)

REM If nothing found, show error
echo.
echo ERROR: Neither Python nor Node.js found!
echo.
echo Please install one of the following:
echo   - Python: https://www.python.org/downloads/
echo   - Node.js: https://nodejs.org/
echo.
pause
exit /b 1

:end
echo.
echo Server started! Open your browser and go to: http://localhost:8000
echo.
pause
