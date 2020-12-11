import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import { SidenavExampleComponent } from "../../components/examples/sidenav/sidenav-example/sidenav-example.component";
import { SidenavApiComponent } from "../../components/examples/sidenav/sidenav-api/sidenav-api.component";
import { SidenavThemeComponent } from "../../components/examples/sidenav/sidenav-theme/sidenav-theme.component";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
  headingMargin = {
    bottom: 'medium'
  }

  sections: Array<Section>;
  tagImg: string;

  constructor() {
    this.sections = new Array<Section>();
    this.tagImg = "./assets/img/ready.svg";
  }

  ngOnInit() {
    this.sections.push(
      {
        id: 0,
        label: "API",
        selector: "sidenav-api",
        component: SidenavApiComponent,
      },
      {
        id: 1,
        label: "THEMING",
        selector: "sidenav-theme",
        component: SidenavThemeComponent,
      },
      {
        id: 2,
        label: "EXAMPLES",
        selector: "sidenav-example",
        component: SidenavExampleComponent,
      }
    );
  }
}
