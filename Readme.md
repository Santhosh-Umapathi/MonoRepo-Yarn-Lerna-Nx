![](https://i.imgur.com/YDNZ5Bp.png)

# Monorepo - Yarn Workspaces, Lerna, Nx

Monorepo created for React, React Native, Common Module, Modular React Native packages.

- React Project
- React Native Project
- Common Module shared between React and React Native
- React Native Modules shared with Core React Native App (Modular Approach)

## Create Yarn Workspaces

First step is to create [Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) for the Core Applications and Modules used between them.

```bash
npm init -y
```

On the `package.json` file,

- Set the Monorepo name
- Setup the Workspace: (_React, React-Native should be set as no hoist as the dependencies may vary_)

```bash
  "workspaces": {
    "packages": [
      "packages/*"
    ],
    "nohoist": [
      "**/react",
      "**/react/**",
      "**/react-dom",
      "**/react-dom/**",
      "**/react-native",
      "**/react-native/**"
    ]
  }
```

#### Packages

Create the Core Apps and modules under the packages folder. Each module should contain its own build script.

- Describe the package name in the `package.json`. Ex: `"@monorepo/common"`
- Declare `main, typings, build scripts`.
- On the other module or Core app to consume the packages, declare the package name in `package.json` under the dependencies. Ex: `"@monorepo/common": "*",`
- Add the `peerDependencies` as required by the modules, which can exist in the Core App.
- _Note_: React Native requires additional settings for Monorepo setup, can make use of `react-native-monorepo-tools`

## Setup Lerna

Once the Workspace setup is complete, setup the [Lerna](https://lerna.js.org/), to make build process easier for all the modules.

_Note_: All modules should contain a build script in its own `package.json`

```bash
npx lerna@latest init
```

Add the following line to `lerna.json`

```bash
"useNx": true,
```

Add the following line to the project root, `package.json`

```bash
"build:modules": "npx lerna run build"
```

## Setup Nx

Once the Lerna setup is complete, setup [Nx](https://nx.dev/) to enable caching of the build process and Distributed caching via Nx Cloud.

```bash
npx add-nx-to-monorepo
```

Select the caching steps, and enter `dist` as the output folder.

Add the following line to the project root, `package.json`

```bash
"graph": "npx nx graph"
```
