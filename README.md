# Bee JS Documentation Website

Documentation for the [Swarm Bee-js javascript library](https://github.com/ethersphere/bee-js). View at [bee-js.ethswarm.org](https://bee-js.ethswarm.org).

### Node Version

You must use **node 14** or above. We recommend [nvm](https://github.com/nvm-sh/nvm).

### Prerequisites

This project requires the bee-js repository to be cloned as a git submodule.

You can fetch it by cloning the entire repository with the following command:

```
$ git clone --recurse-submodules https://github.com/ethersphere/bee-js.git
```

Or optionally fetch the submodule after cloning with the following command:

```
$ git submodule update --init
```

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

```sh
# Initialise the bee-js submodule
git submodule update --init --recursive

# Update to the latest master, you could also change directory in and retrieve specific tag or branch
git submodule update --remote --merge  

# For the generation we need to have all the dependencies
cd bee-js
npm ci
cd ..

# Generate new API
npm run build
```

## Maintainers

- [auhau](https://github.com/auhau)
- [vojtechsimetka](https://github.com/vojtechsimetka)

See what "Maintainer" means [here](https://github.com/ethersphere/repo-maintainer).
