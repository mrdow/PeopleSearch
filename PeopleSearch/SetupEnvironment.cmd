echo off

echo Installing the Angular CLI
call npm install -g @angular/cli

echo
echo Installing node packages
call npm install

echo
echo Ensuring node-sass binding is up-to-date
call npm rebuild node-sass

echo
echo Building Angular app
call ng build --aot
