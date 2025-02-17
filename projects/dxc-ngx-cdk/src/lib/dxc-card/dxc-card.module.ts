import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { DxcCardComponent } from "./dxc-card.component";
import { CommonModule } from "@angular/common";
import { BackgroundProviderModule } from "../background-provider/background-provider.module";

@NgModule({
  declarations: [DxcCardComponent],
  imports: [CommonModule, MatCardModule, BackgroundProviderModule],
  exports: [DxcCardComponent]
})
export class DxcCardModule {}
