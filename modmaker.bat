@ECHO OFF
ECHO Creating JAR File
jar cf "ExtraBounties-universal.jar" data META-INF pack.mcmeta pack.png assets
ECHO JAR Created!
TIMEOUT /NOBREAK /T 1 > nul
