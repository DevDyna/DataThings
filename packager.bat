@ECHO OFF
echo compressing all recipes , keep on mind that require a few of seconds!
IF EXIST "ChippedExpress-universal.jar" DEL "ChippedExpress-universal.jar"
jar cf "ChippedExpress-universal.jar" data META-INF pack.mcmeta pack.png fabric.mod.json
