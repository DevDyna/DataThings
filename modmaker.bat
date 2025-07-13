@ECHO OFF
ECHO Creating JAR File
jar cf "wildcaves-1.2.1.jar" data META-INF pack.mcmeta pack.png
ECHO JAR Created!
TIMEOUT /NOBREAK /T 1 > nul
