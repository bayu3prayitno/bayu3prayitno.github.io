@echo off
echo Building project...
call npm run build

echo Deploying to GitHub Pages...
cd dist

git init
git add -A
git commit -m "Deploy to GitHub Pages"
git branch -M main
git remote add origin https://github.com/bayu3prayitno/bayu3prayitno.github.io.git
git push -f origin main

echo Deployment complete!
cd ..
