# DXC Paginator Component

## Overview

The DXC Paginator Component allows the user to navegate through pages.

## Usage

```html
<dxc-paginator 
    [totalItems]="totalItems"
    [itemsPerPage]="itemsPerPage"
    [currentPage]="page"
    (nextFunction)="navigate($event, 'next')"
    (prevFunction)="navigate($event, 'prev')"
    (firstFunction)="navigate($event, 'first')"
    (lastFunction)="navigate($event, 'last')"
    [paginationActions]="paginationActions">
</dxc-paginator>
```

Include the **DxcPaginatorModule** into **app.module.ts** to use the paginator component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcPaginatorModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [DxcPaginatorModule],
  providers: [],
  bootstrap: [AppComponent]
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
        <td>@Input<br>currentPage: number</td>
        <td><code>1</code></td>
        <td>Number of the current selected page.</td>
    </tr>
    <tr>
        <td>@Input<br>itemsPerPage: number</td>
        <td><code>5</code></td>
        <td>Number of items per page.</td>
    </tr>
    <tr>
        <td>@Input<br>totalItems: number</td>
        <td><code>1</code></td>
        <td>Total number of items in the pages.</td>
    </tr>
    <tr>
        <td>@Input<br>paginationActions: string[]</td>
        <td></td>
        <td>
            Pagination actions to be rendered ['prev', 'next', 'first','last']. 
            In case the property is not defined all actions will be rendered.
        </td>
    </tr>
    <tr>
      <td>@Input<br>tabIndexValue: number</td>
      <td><code>0</code></td>
      <td>
        Value of the tabindex.
      </td>
    </tr>
    <tr>
        <td>@Output<br>nextFunction: EventEmitter</td>
        <td></td>
        <td>This function will be called when the user clicks the button to go to the next page.</td>
    </tr>
    <tr>
        <td>@Output<br>prevFunction: EventEmitter</td>
        <td></td>
        <td>This function will be called when the user clicks the button to go to the previous page.</td>
    </tr>
    <tr>
        <td>@Output<br>firstFunction: EventEmitter</td>
        <td></td>
        <td>This function will be called when the user clicks the button to go to the first page.</td>
    </tr>
    <tr>
        <td>@Output<br>lastFunction: EventEmitter</td>
        <td></td>
        <td>This function will be called when the user clicks the button to go to the last page.</td>
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
        <td>paginatorBackgroundColor</td>
        <td><code>#EEEEEE</code></td>
        <td>Applies to token paginatorBackgroundColor.</td>
    </tr>
    <tr>
        <td>paginatorFontColor</td>
        <td><code>#000000</code></td>
        <td>Applies to token paginatorTextColor.</td>
    </tr>
</table>