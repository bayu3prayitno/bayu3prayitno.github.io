@echo off
echo Building project...
call npm run build

echo Deploying to GitHub Pages...
cd dist

git init
git add -A
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/bayu3prayitno/portofolio.git
git push -f origin gh-pages

echo Deployment complete!
cd ..
