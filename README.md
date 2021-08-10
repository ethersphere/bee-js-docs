# Bee JS Documentation Website

Documentation for the [Swarm Bee-js javascript library](https://github.com/ethersphere/bee-js). View at [bee-js.ethswarm.org](https://bee-js.ethswarm.org).

### Node Version

You must use **node 14** or above. We recommend [nvm](https://github.com/nvm-sh/nvm).

### Installation

```
$ npm i
```

### Local Development

```
$ npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Bumping Version

Don't forget to find and replace the version number for the whole of the docs folder. 

## How to generate / include the API reference html

1. Preparation phase - pull bee-js submodule and update it to the necessary commit
```sh
# Initialise the bee-js submodule
git submodule update --init --recursive

# Update to the latest master, you could also change directory in and retrieve specific tag or branch
git submodule update --remote --merge  

# For the generation we need to have all the dependencies
cd bee-js
npm ci
cd ..
```

2. Generating the docs - in the `docusaurus.config.js` and uncomment the line 9 with `'docusaurus-plugin-typedoc'` in the plugins array.

Build the api docs now with `npm run build`. This will probably throw some syntax errors like:

```
./docs/api/functions/utils.bytes.isbytes.md
SyntaxError: ./bee-js-docs/docs/api/functions/utils.bytes.isbytes.md: Expected corresponding JSX closing tag for <T> (11:39)

   9 | <p><a parentName="p" {...{"href":"/docs/api/modules/utils"}}>{`Utils`}</a>{`.`}<a parentName="p" {...{"href":"/docs/api/modules/utils.bytes"}}>{`Bytes`}</a>{`.isBytes`}</p>
  10 | <p>{`▸ `}<strong parentName="p">{`isBytes`}</strong>{`<Length`}{`>`}{`(`}<inlineCode parentName="p">{`length`}</inlineCode>{`: Length, `}<inlineCode parentName="p">{`b`}</inlineCode>{`: Uint8Array): b is Bytes<Length`}{`>`}</p>
> 11 | <p>{`Type guard for Bytes`}<T>{` type`}</p>
     |                                        ^
  12 | <h4 {...{"id":"type-parameters"}}>{`Type parameters:`}</h4>
  13 | <table>
  14 | <thead parentName="table">
 @ ./.docusaurus/registry.js 1:11691-11761 1:11547-11638
 @ ./node_modules/@docusaurus/core/lib/client/exports/ComponentCreator.js
 @ ./.docusaurus/routes.js
 @ ./node_modules/@docusaurus/core/lib/client/clientEntry.js
 @ multi ./node_modules/@docusaurus/core/lib/client/clientEntry.js
Client bundle compiled with errors therefore further build is impossible.
```

3. Fix the issues - run the `escape-chars.bash` script
   
4. In the `docusaurus.config.js` and comment the line 9 with `'docusaurus-plugin-typedoc'` in the plugins array so that the building no longer runs typedoc on `bee-js`. Test the page with `npm run start` or `npm run build` and create PR with this updated API reference.

## Maintainers

- [auhau](https://github.com/auhau)
- [vojtechsimetka](https://github.com/vojtechsimetka)

See what "Maintainer" means [here](https://github.com/ethersphere/repo-maintainer).
