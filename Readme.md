# Mono Repo with NX

Mono Repo project with [NX](https://nx.dev/), Configured for:

- React
- React-Native
- Common Modules
- React-Native Modules

### Pre-configured Framework Workspace

Run the following command and answer the wizard to create a monorepo pre-configured

```bash
npx create-nx-workspace@latest <MonorepoName>
```

### Generate New React/React Native App into workspace

Run the following command from the root of the monorepo

#### React

```bash
npx nx generate @nrwl/react:app <Web AppName>
```

#### React Native

```bash
npx nx generate @nrwl/react-native:app <Mobile AppName>

```

### Generate React/React Native Libraries

Run the following command from the root of the monorepo.

#### React

```bash
npx nx generate @nrwl/react:lib <Web Library Name>
```

#### React Native

```bash
npx nx generate @nrwl/react-native:lib <Mobile Library Name>
```

#### TS

```bash
npx nx generate @nrwl/js:library <Ts Library Name> --importPath @<Monorepo Name>/<Ts Library Name>
```
