@ECHO OFF
ECHO Creating JAR File
echo compressing all recipes , keep on mind that require a few of seconds!
jar cf "ChippedExpress-universal.jar" data pack.mcmeta pack.png fabric.mod.json
ECHO JAR Created!
TIMEOUT /NOBREAK /T 1 > nul
