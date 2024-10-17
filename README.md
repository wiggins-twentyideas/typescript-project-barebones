# Barebones Typescript CLI project

## Running
```
% nvm use
% npm install
% npm run start
```

## Debugging in Intellij

run `npm run watch` in the background and then debug `node bin/index.js`


## Notes

commands used to initialize:
```
npm init
# edit package.json
npm install typescript
tsc --init
# edit tsconfig.json
touch index.ts
```

building: `tsc --project .`   # if you specify a .ts file it doesnt pick up tsconfig.json automatically
