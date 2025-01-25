@ECHO OFF
ECHO Creating JAR File
jar cf "NumismaticBounties-universal.jar" data pack.mcmeta pack.png META-INF fabric.mod.json
ECHO JAR Created!
TIMEOUT /NOBREAK /T 1 > nul
