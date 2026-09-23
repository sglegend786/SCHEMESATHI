@echo off
echo ========================================
echo    SchemeSathi - Auto Start Script
echo ========================================
echo.

:: Kill any existing node processes on port 5000
echo [1/3] Clearing port 5000...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :5000') do (
    taskkill /PID %%a /F >nul 2>&1
)
timeout /t 1 /nobreak >nul

:: Start Backend
echo [2/3] Starting Backend Server...
start "SchemeSathi Backend" cmd /k "cd /d %~dp0backend && npm start"
timeout /t 3 /nobreak >nul

:: Start Frontend
echo [3/3] Starting Frontend Server...
start "SchemeSathi Frontend" cmd /k "cd /d %~dp0frontend && npm run dev"
timeout /t 3 /nobreak >nul

echo.
echo ========================================
echo  Backend:  http://localhost:5000
echo  Frontend: http://localhost:5173
echo ========================================
echo.
echo Opening website in browser...
timeout /t 2 /nobreak >nul
start http://localhost:5173

echo.
echo Both servers are running! Press any key to exit this window.
pause >nul
