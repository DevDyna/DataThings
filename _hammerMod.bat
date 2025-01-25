@ECHO OFF
ECHO Creating JAR File
jar cf "NumismaticBounties-universal-forge.jar" data pack.mcmeta pack.png META-INF
ECHO JAR Created!
TIMEOUT /NOBREAK /T 1 > nul
