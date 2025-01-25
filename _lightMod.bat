@ECHO OFF
ECHO Creating JAR File
jar cf "ExtraBounties-universal-fabric.jar" data pack.mcmeta pack.png assets fabric.mod.json
ECHO JAR Created!
TIMEOUT /NOBREAK /T 1 > nul
