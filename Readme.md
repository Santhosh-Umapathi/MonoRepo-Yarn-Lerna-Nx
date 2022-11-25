# Monorepo - Yarn Workspaces, Lerna, Nx

Monorepo created for React, React Native, Common Module, Modular React Native packages.

- React Project
- React Native Project
- Common Module shared between React and React Native
- React Native Modules shared with Core React Native App (Modular Approach)

## Create Yarn Workspaces

First step is to create Yarn Workspaces for the Core Applications and Modules used between them.

## Setup Lerna

Once the Workspace setup is complete, setup the Lerna config, to make build process easier for all the modules.

## Setup Nx

Once the Lerna setup is complete, setup Nx to enable caching of the build process and Distributed caching via Nx Cloud.

```bash

npx add-nx-to-monorepo

```
