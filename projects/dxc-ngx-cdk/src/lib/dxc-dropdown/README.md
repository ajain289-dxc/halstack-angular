# DXC Dropdown Component

## Overview

The DXC Dropdown Component is a collapsible menu where choices are listed.

## Usage

```html
<dxc-dropdown
  label="Default Dropdown"
  [options]="optionsWithoutIcon"
  size="medium"
  margin="small"
></dxc-dropdown>
```

Include the **DxcDropdownModule** into **app.module.ts** to use the dropdown component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcDropdownModule } from "@dxc-technology/halstack-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [DxcDropdownModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## API reference

The API properties are the following:

<table>
    <tr style="background-color: grey">
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>@Input<br>options: object[]</td>
        <td><code>[]</code></td>
        <td>An array of objects representing the selectable options. Each object has the following properties:
            <ul>
                <li><b>label</b>: Option display value</li>
                <li><b>value</b>: Option value</li>
                <li><b>iconSrc</b>: URL of the icon that will be placed next to the option label (Optional)</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>@Input<br>optionsIconPosition: 'before' | 'after'</td>
        <td><code>'before'</code></td>
        <td>In case options include icons, whether the icon should appear after or before the label.</td> 
    </tr>
    <tr>
        <td>@Input<br>iconSrc: string</td>
        <td></td>
        <td>URL of the icon that will be placed next to the dropdown label.</td> 
    </tr>
    <tr>
        <td>@Input<br>iconPosition: 'before' | 'after'</td>
        <td><code>'before'</code></td>
        <td>Whether the icon should appear after or before the label.</td> 
    </tr>
    <tr>
        <td>@Input<br>label: string</td>
        <td></td>
        <td>Text to be placed when the list of options is not displayed.</td>
    </tr>
    <tr>
        <td>@Input<br>name: string</td>
        <td></td>
        <td>Name attribute of the input element.</td>
    </tr>
    <tr>
        <td>@Input<br>caretHidden: boolean</td>
        <td><code>false</code></td>
        <td>Whether the arrow next to the label is displayed or not.</td>
    </tr>
    <tr>
        <td>@Input<br>onSelectOption: EventEmitter</td>
        <td></td>
        <td>This event will be triggered when the selection changes. The string with the key of the selected value will be passed as a parameter.</td>
    </tr>
    <tr>
        <td>@Input<br>margin: any (string | object)</td>
        <td></td>
        <td>Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 
            'xlarge' | 'xxlarge'). You can pass an object with 'top', 'bottom', 'left' and 'right' properties in 
            order to specify different margin sizes.</td>
    </tr>
    <tr>
        <td>@Input<br>size: any (string | object)</td>
        <td><code>'fitContent'	</code></td>
        <td>Size of the component ('large' | 'fillParent' | 'fitContent').</td>
    </tr>
    <tr>
      <td>@Input<br>tabIndexValue: number</td>
      <td><code>0</code></td>
      <td>
        Value of the tabindex.
      </td>
    </tr>
</table>

## Theming

<table>
    <tr style="background-color: grey">
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>backgroundColor</td>
        <td><code>#FFFFFF</code></td>
        <td>Applies to token backgroundColor.</td>
    </tr>
    <tr>
        <td>fontColor</td>
        <td><code>#000000</code></td>
        <td>Applies to token textColor.</td>
    </tr>
</table>
