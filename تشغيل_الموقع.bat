@echo off
title تشغيل موقع Creator Print
echo جاري تشغيل خادم الموقع وفتح المتصفح...
cd /d "%~dp0"
call npm run dev
pause

