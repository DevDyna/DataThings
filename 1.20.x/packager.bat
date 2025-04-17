@ECHO OFF
IF EXIST "Ez-ae2-universal.jar" DEL "Ez-ae2-universal.jar"
jar cf "Ez-ae2-universal.jar" data META-INF pack.mcmeta pack.png fabric.mod.json
