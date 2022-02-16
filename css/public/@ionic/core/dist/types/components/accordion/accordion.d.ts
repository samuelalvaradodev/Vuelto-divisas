import { ComponentInterface } from '../../stencil-public-runtime';
declare const enum AccordionState {
  Collapsed = 1,
  Collapsing = 2,
  Expanded = 4,
  Expanding = 8
}
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @slot header - Content is placed at the top and is used to
 * expand or collapse the accordion item.
 * @slot content - Content is placed below the header and is
 * shown or hidden based on expanded state.
 *
 * @part header - The wrapper element for the header slot.
 * @part content - The wrapper element for the content slot.
 * @part expanded - The expanded element. Can be used in combination
 * with the `header` and `content` parts (i.e. `::part(header expanded)`).
 */
export declare class Accordion implements ComponentInterface {
  private accordionGroupEl?;
  private updateListener;
  private contentEl;
  private contentElWrapper;
  private headerEl;
  private currentRaf;
  el?: HTMLElement;
  state: AccordionState;
  isNext: boolean;
  isPrevious: boolean;
  /**
   * The value of the accordion. Defaults to an autogenerated
   * value.
   */
  value: string;
  /**
   * If `true`, the accordion cannot be interacted with.
   */
  disabled: boolean;
  /**
   * If `true`, the accordion cannot be interacted with,
   * but does not alter the opacity.
   */
  readonly: boolean;
  /**
   * The toggle icon to use. This icon will be
   * rotated when the accordion is expanded
   * or collapsed.
   */
  toggleIcon: string;
  /**
   * The slot inside of `ion-item` to
   * place the toggle icon. Defaults to `'end'`.
   */
  toggleIconSlot: 'start' | 'end';
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidLoad(): void;
  private setItemDefaults;
  private getSlottedHeaderIonItem;
  private setAria;
  private slotToggleIcon;
  private expandAccordion;
  private collapseAccordion;
  /**
   * Helper function to determine if
   * something should animate.
   * If prefers-reduced-motion is set
   * then we should not animate, regardless
   * of what is set in the config.
   */
  private shouldAnimate;
  private updateState;
  private getNextSibling;
  private getPreviousSibling;
  private toggleExpanded;
  render(): any;
}
export {};
