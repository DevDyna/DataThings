@ECHO OFF
ECHO Creating JAR File
jar cf "ExtraBounties-universal-forge.jar" data pack.mcmeta pack.png assets META-INF
ECHO JAR Created!
TIMEOUT /NOBREAK /T 1 > nul
