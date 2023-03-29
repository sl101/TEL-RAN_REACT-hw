## steps for deploy projects:

1.  create project
2.  terminal => cd project
3.  terminal => npm install --save-dev gh-pages
4.  change package.json in project

        "homepage": "https://sl101.github.io/<project>",

        "scripts": {
        "start": "react-scripts start",
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
        		},

5.  in .gitignore comment # /build
6.  terminal => cd ..
7.  terminal => git add . / git commit -m "..." / git push
8.  terminal => cd project
9.  npm run deploy
10. created links for projects