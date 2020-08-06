# nxc-alert



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                                                        | Default     |
| ---------- | ---------- | ----------- | ----------------------------------------------------------- | ----------- |
| `closable` | `closable` |             | `boolean`                                                   | `false`     |
| `open`     | `open`     |             | `boolean`                                                   | `false`     |
| `type`     | `type`     |             | `"danger" \| "info" \| "primary" \| "success" \| "warning"` | `'primary'` |


## Events

| Event          | Description | Type               |
| -------------- | ----------- | ------------------ |
| `nxcAfterHide` |             | `CustomEvent<any>` |
| `nxcAfterShow` |             | `CustomEvent<any>` |
| `nxcHide`      |             | `CustomEvent<any>` |
| `nxcShow`      |             | `CustomEvent<any>` |


## Methods

### `hide() => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`



### `show() => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`




## Shadow Parts

| Part             | Description |
| ---------------- | ----------- |
| `"base"`         |             |
| `"close-button"` |             |
| `"icon"`         |             |
| `"message"`      |             |


## Dependencies

### Depends on

- [nxc-icon-button](../nxc-icon-button)

### Graph
```mermaid
graph TD;
  nxc-alert --> nxc-icon-button
  nxc-icon-button --> nxc-icon
  style nxc-alert fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
