@ECHO OFF
ECHO Creating JAR File
echo compressing all recipes , keep on mind that require a few of seconds!
jar cf "ChippedExpress-universal-forge.jar" data META-INF pack.mcmeta pack.png
ECHO JAR Created!
TIMEOUT /NOBREAK /T 1 > nul
