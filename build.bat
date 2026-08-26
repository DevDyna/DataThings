@ECHO OFF

ECHO ^> Creating JAR Files...

IF EXIST "_temp" RMDIR /S /Q "_temp"
IF EXIST ".build" RMDIR /S /Q ".build"

ECHO.
ECHO ^> Creating 20.1 JAR...

MKDIR "_temp"

XCOPY "common\*" "_temp\" /E /I /Y /Q

XCOPY "20.1\*" "_temp\" /E /I /Y /Q

PUSHD "_temp"

jar cf "..\.build\Numismatic-Reforged-Bounties-20.1.jar" *

POPD

RMDIR /S /Q "_temp"

ECHO - 20.1 JAR Created!

ECHO.

ECHO ^> Creating 21.1 JAR...

MKDIR "_temp"

XCOPY "common\*" "_temp\" /E /I /Y /Q

XCOPY "21.1\*" "_temp\" /E /I /Y /Q

PUSHD "_temp"

jar cf "..\.build\Numismatic-Reforged-Bounties-21.1.jar" *

POPD

RMDIR /S /Q "_temp"

ECHO - 21.1 JAR Created!

TIMEOUT /NOBREAK /T 1 > nul