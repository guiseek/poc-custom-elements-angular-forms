# Nxc

## Prova de conceito

A ideia é usar componentes em diversas plataformas com o mínimo de impacto, tendo apenas uma fonte de verdade para design e comportamento.

## Conceitos

- Web components
- Custom elements
- Custom events
- Mono repositório
- Clean Architecture

---

## Bibliotecas

- [UI](libs/ui/README.md)
  - [ui-angular](libs/ui/angular/README.md)
  - [ui-custom](libs/ui/custom/README.md)
  - [ui-styles](libs/ui/styles/README.md)
  - [ui-core](libs/ui/core/README.md)


---

## Frameworks & Tools

[Shoelace](https://github.com/shoelace-style/shoelace) como base para custom elements

```elixir
➜ nxc git:(master) ✗ nx list

> NX:  Installed plugins:

  @nrwl/jest (builders,schematics)
  @nrwl/angular (builders,schematics)
  @nrwl/cypress (builders,schematics)
  @nrwl/workspace (builders,schematics)
  @nxext/stencil (builders,schematics)


> NX:  Also available:

  @nrwl/bazel (schematics)
  @nrwl/express (builders,schematics)
  @nrwl/linter (builders)
  @nrwl/nest (builders,schematics)
  @nrwl/next (builders,schematics)
  @nrwl/node (builders,schematics)
  @nrwl/nx-plugin (builders,schematics)
  @nrwl/react (builders,schematics)
  @nrwl/storybook (builders,schematics)
  @nrwl/web (builders,schematics)


> NX:  Community plugins:

  @nxtend/ionic-react - An Nx plugin for developing Ionic React applications and libraries
  @nxtend/capacitor - An Nx plugin for developing cross-platform applications using Capacitor
  @angular-architects/ddd - Nx plugin for structuring a monorepo with domains and layers
  @offeringsolutions/nx-karma-to-jest - Nx plugin for replacing karma with jest in an Nx workspace
  @flowaccount/nx-serverless - Nx plugin for node/angular-universal schematics and deployment builders in an Nx workspace
  @dev-thought/nx-deploy-it - Nx plugin to deploy applications on your favorite cloud provider
  @offeringsolutions/nx-protractor-to-cypress - Nx plugin to replace protractor with cypress in an nx workspace
  @gperdomor/nx-docker - Nx plugin to build docker images of your affected apps
  @angular-custom-builders/lite-serve - Nx plugin to run the e2e test on an existing dist folder
  @nx-plus/vue - Nx plugin adding first class support for Vue in your Nx workspace.
  @nx-plus/docusaurus - Nx plugin adding first class support for Docusaurus in your Nx workspace.
  @twittwer/compodoc - Nx Plugin to integrate the generation of documentation with Compodoc in the Nx workflow
  @joelcode/gcp-function - Nx plugin to generate, test, lint, build, serve, & deploy Google Cloud Function
  @nx-go/nx-go - Nx plugin to use Go in a Nx workspace
```
