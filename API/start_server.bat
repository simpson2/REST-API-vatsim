ECHO OFF
ECHO Starting VATSIM API Server...
cd %~dp0\API
node server.js
PAUSE