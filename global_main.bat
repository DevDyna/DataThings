@echo off

cd .\1.20.x\
node execute.mjs -await

cd ..\1.21.x\
node execute.mjs -await