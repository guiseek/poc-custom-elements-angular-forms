# nxc-menu



<!-- Auto Generated Below -->


## Events

| Event       | Description                           | Type               |
| ----------- | ------------------------------------- | ------------------ |
| `nxcBlur`   | Emitted when the menu loses focus.    | `CustomEvent<any>` |
| `nxcFocus`  | Emitted when the menu gains focus.    | `CustomEvent<any>` |
| `nxcSelect` | Emitted when a menu item is selected. | `CustomEvent<any>` |


## Methods

### `removeFocus() => Promise<void>`

Removes focus from the menu.

#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`

Sets focus on the menu.

#### Returns

Type: `Promise<void>`



### `typeToSelect(key: string) => Promise<void>`

Initiates type-to-select logic, which automatically selects an option based on what the user is currently typing.
The key passed will be appended to the internal query and the selection will be updated. After a brief period, the
internal query is cleared automatically. This method is intended to be used with the keydown event. Useful for
enabling type-to-select when the menu doesn't have focus.

#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part     | Description |
| -------- | ----------- |
| `"base"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
