@ECHO OFF
ECHO Creating ZIP File
tar.exe -a -cf "ExtraBounties-universal.zip" data pack.png pack.mcmeta assets
ECHO ZIP Created!
TIMEOUT /NOBREAK /T 1 > nul
