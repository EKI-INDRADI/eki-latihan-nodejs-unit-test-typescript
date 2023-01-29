#  JEST NODEJS UNIT TEST (Javascript Module)


```code
npm init
```


package.json edit/tambahkan :
```json
"type" : "commonjs"  ->  "type" : "module"


"scripts": {
    "test":  "jest"    or   "./node_modules/.bin/jest"
  }
```

depedency :
```code
npm install jest --save-dev,
npm install @types/jest --save-dev 
npm install ts-jest --save-dev
npm install @babel/preset-env --save-dev
npm install @babel/preset-typescript --save-dev 
npm install @babel/plugin-transform-runtime --save-dev

or 

npm i

```

run windows :
```code
node_modules/.bin/jest
```

run unix (linux/mac) :
```code
./node_modules/.bin/jest
```

run :
```code
npm run test
```

easy run (using npx , for auto detect node_modules/.bin/) :
```codejs
npx jest
```



Note : 

-  Command Line untuk run test spesific file

./node_modules/.bin/jest --runTestsByPath test/sum.test.ts
or
npx jest --runTestsByPath test/sum.test.ts
or
npx jest test/sum.test.ts


-  Command Line untuk run test spesific file by function test name


```code
npx jest --testNamePattern "test sum function 2"
```

or

```code
npx jest --t "test sum function 2"
```


or


(optional) visual studio code , install extention "Jest"  supaya bs test speisifc file test atau kelik kanan function 

(supaya bs running speisifc by function name) , dll
```code
"run test at cursor" 
```

(test 1 file)
```code
"run test at current file"
```
## EKI INDRADI

"TIME > KNOWLEDGE > MONEY". #2023_3_DIGIT_MOTIVATION

## Reference : 

:link: https://babeljs.io/repl (javascript module to javascript commonjs)

:link: https://www.javainuse.com/js2ts (javascript to typescrypt)

:link: https://jestjs.io/docs/getting-started#using-typescript

:link: https://github.com/EKI-INDRADI/eki-latihan-nodejs-unit-test-javascript-module

:link: https://www.youtube.com/watch?v=UNaYui-EG_8&ab_channel=ProgrammerZamanNow

:link: https://docs.google.com/presentation/d/1f3yg05_bX0HFybD9qBCqPq64l8Tiu-f4iWhCQBMG_eM/edit

:link: https://github.com/ProgrammerZamanNow/belajar-nodejs-unit-test







