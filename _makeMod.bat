@ECHO OFF
ECHO Creating JAR File
jar cf "ExtraBounties-universal.jar" data pack.mcmeta pack.png META-INF fabric.mod.json assets
ECHO JAR Created!
TIMEOUT /NOBREAK /T 1 > nul
