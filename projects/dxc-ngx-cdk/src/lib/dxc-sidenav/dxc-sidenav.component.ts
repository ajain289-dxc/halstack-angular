import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  HostListener,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import { CssUtils } from "../utils";
import { responsiveSizes } from "../variables";
import { coerceBooleanProperty } from "@angular/cdk/coercion";

@Component({
  selector: "dxc-sidenav",
  templateUrl: "./dxc-sidenav.component.html",
  styleUrls: ["./dxc-sidenav.component.scss"],
  providers: [CssUtils],
})
export class DxcSidenavComponent implements OnInit {
  className;
  @Input() arrowDistance: string;
  @Input() mode: string = "overlay";
  @Input() padding: any;
  @Input()
  get displayArrow(): boolean {
    return this._displayArrow;
  }
  set displayArrow(value: boolean) {
    this._displayArrow = coerceBooleanProperty(value);
  }
  private _displayArrow = true;

  isClicked: boolean = false;
  innerWidth;
  isResponsive;
  isShown: boolean;

  defaultInputs = new BehaviorSubject<any>({
    arrowDistance: "",
    padding: null,
    displayArrow: true,
  });

  @ViewChild("sidenavContainer", { static: false }) sidenav: ElementRef;
  sidenavArrow: any;

  constructor(private utils: CssUtils, private cdr: ChangeDetectorRef) {}

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (this.isResponsive === false && this.displayArrow === false) {
      this.isShown = true;
    }
    this.updateCss();
  }

  ngOnInit() {
    this.className = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      mode: this.mode,
      innerWidth: this.innerWidth,
      isResponsive: this.isResponsive,
      isShown: this.isShown,
    })}`;
  }

  public arrowClicked() {
    this.isShown = !this.isShown;
    this.isClicked = true;
    this.updateCss();
  }

  public arrowKey($event) {
    if ($event.keyCode && $event.keyCode === 32) {
      $event.preventDefault();
      this.isShown = !this.isShown;
      this.updateCss();
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    if (this.sidenav) {
      this.updateCss();
    }
  }

  ngAfterViewInit() {
    this.updateCss();
    this.cdr.detectChanges();
  }

  updateCss() {
    this.innerWidth = this.sidenav.nativeElement.clientWidth;
    if (this.innerWidth <= responsiveSizes.tablet) {
      this.isResponsive = true;
    } else {
      this.isResponsive = false;
      if (!this.displayArrow && !this.isShown) {
        this.isShown = true;
      }
    }
    this.isShown =
      this.isShown !== undefined
        ? this.isShown
        : this.innerWidth <= responsiveSizes.tablet
        ? false
        : true;
    this.className = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      mode: this.mode,
      innerWidth: this.innerWidth,
      isResponsive: this.isResponsive,
      isShown: this.isShown,
    })}`;
  }

  getDynamicStyle(inputs) {
    return css`
      .sidenavContainerClass {
        display: flex;
        position: relative;

        .sidenavArrow {
          width: 42px;
          height: 42px;
          background-color: var(--sidenav-arrowContainerColor);
          opacity: var(--sidenav-arrowContainerOpacity);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          left: ${inputs.innerWidth <= responsiveSizes.tablet
            ? "calc(60% - 21px)"
            : "279px"};
          top: ${inputs.arrowDistance
            ? inputs.arrowDistance
            : "calc(50% - 21px)"};
          transform: ${inputs.isShown
            ? "translateX(0)"
            : !inputs.isShown
            ? inputs.innerWidth <= responsiveSizes.tablet
              ? "translateX(-" + inputs.innerWidth * 0.6 + "px) !important"
              : "translateX(-297px) !important"
            : ""};
          transition: ${this.isClicked ? "transform 0.4s ease-in-out;" : ""};
          cursor: pointer;
          z-index: ${inputs.mode === "overlay" || this.isResponsive
            ? "401"
            : "auto"};
          &:focus {
            outline: -webkit-focus-ring-color auto 1px;
            outline-color: var(--sidenav-focusColor);
          }
          .sidenavArrowImage {
            height: 18px;
            width: 18px;
            display: flex;
            align-items: center;
            margin-left: ${inputs.isShown ? "0px" : "10px"};
            transform: ${inputs.isShown
              ? "rotate(-180deg)"
              : "rotate(0deg) !important"};
            transition: ${this.isClicked
              ? "margin 0.4s ease-in, transform 0.4s ease-in-out; "
              : ""};
            fill: var(--sidenav-arrowColor);
          }
        }

        dxc-sidenav-menu {
          display: flex;
          flex-direction: column;
          background-color: var(--sidenav-backgroundColor);
          width: ${inputs.innerWidth <= responsiveSizes.tablet
            ? "60%"
            : "300px"};
          box-sizing: border-box;
          ${this.utils.getPaddings(inputs.padding)}
          z-index: ${inputs.mode === "overlay" || inputs.isResponsive
            ? "400"
            : "auto"};
          transform: ${inputs.isShown
            ? "translateX(0)"
            : !inputs.isShown
            ? "translateX(-100%) !important"
            : ""};
          opacity: ${inputs.isShown ? "1" : "0"};
          visibility: ${inputs.isShown ? "visible" : "hidden"};
          transition: ${this.isClicked
            ? "transform 0.4s ease-in-out, opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;"
            : ""};
        }

        dxc-sidenav-content {
          box-sizing: border-box;
          flex-grow: 1;
          height: 100%;
          ${this.utils.getPaddings(inputs.padding)}
          margin-left: ${inputs.isShown &&
          inputs.mode === "push" &&
          !inputs.isResponsive
            ? ""
            : !inputs.isResponsive
            ? "-300px"
            : "-60%"};
          transition: ${this.isClicked ? "margin 0.4s ease-in-out;" : ""};
          width: ${inputs.isShown &&
          inputs.mode === "push" &&
          !inputs.isResponsive
            ? "calc(100% - 300px)"
            : "calc(100%)"};
        }
      }
    `;
  }
}
