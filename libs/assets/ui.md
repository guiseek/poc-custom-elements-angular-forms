# _**UI** Lib Group_

A ideia é usar componentes em diversas plataformas com o mínimo de impacto, tendo apenas uma fonte de verdade para design e comportamento.

## Conceitos

- Web components
- Custom elements
- Custom events
- Mono repositório
- Clean Architecture

## Frameworks & Tools

- TypeScript
- Angular
- StencilJS
- Nx tools

---

## Estrutura

### Diretórios

```
├── ui
│   ├── core
│   ├── form
│   │   ├── angular
│   │   ├── core
│   │   └── custom
│   └── styles
│       ├── core
│       ├── global.scss
│       ├── mixins
│       ├── partials
│       └── tokens
```

<table>
<tr><td>

![Gráfico de dependências](../assets/ui-dep-graph.svg)

</td><td style="vertical-align: top">

<div style="height: 40px">
<span style="font-size: 42.6px"> ☜ </span>
<span style="font-size: 32.6px">
Demo
</span>
</div>

<div style="height: 160px">

Tipo de projeto: `application`
Framework: `angular`

</div>

<div style="height: 40px">
<span style="font-size: 42.6px"> ☜ </span>
<span style="font-size: 32.6px">
UI Form Angular
</span>
</div>

<div style="height: 160px">

Tipo de projeto: `library`
Framework: `angular`

</div>

<div style="height: 40px">
<span style="font-size: 42.6px"> ☜ </span>
<span style="font-size: 32.6px">
UI Form Custom
</span>
</div>

<div style="height: 160px">

Tipo de projeto: `library`
Framework: `stenciljs`

</div>

<div style="height: 40px">
<span style="font-size: 42.6px"> ☜ </span>
<span style="font-size: 32.6px">
UI Form Core
</span>
</div>

<div style="height: 160px">

Tipo de projeto: `library`
Framework: `nx workspace`

</div>

<div style="height: 40px">
<span style="font-size: 42.6px"> ☜ </span>
<span style="font-size: 32.6px">
UI Core
</span>
</div>

<div>

Tipo de projeto: `library`
Framework: `nx workspace`

</div>
</td></tr>
</table>
