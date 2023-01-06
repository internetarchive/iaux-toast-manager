import { TemplateResult } from 'lit-html';

/**
 * Configuration to show a Toast
 *
 * @export
 * @class ToastConfig
 */
export class ToastConfig {
  /**
   * The title that shows in the header
   *
   * @type {undefined | null}
   * @memberof ToastConfig
   */
  texts?: string;

  /**
   * The background color of the body
   *
   * @memberof ToastConfig
   */
  bgColor: string;

  /**
   * Show the close button
   *
   * @memberof ToastConfig
   */
  showCloseButton: boolean;

  /**
   * Show or hide the processing indicator
   *
   * @memberof ToastConfig
   */
  dismisOnClick: boolean;

  /**
   * Close the Toast if the user taps on the background
   *
   * @memberof ToastConfig
   */
  closeOnBackdropClick: boolean;

  constructor(options?: {
    texts?: string;
    bgColor?: string;
    showCloseButton?: boolean;
    dismisOnClick?: boolean;
    closeOnBackdropClick?: boolean;
  }) {
    this.texts = options?.texts;
    this.bgColor = options?.bgColor ?? '';

    this.showCloseButton = options?.showCloseButton ?? true;
    this.dismisOnClick = options?.dismisOnClick ?? true;
    this.closeOnBackdropClick = options?.closeOnBackdropClick ?? true;
  }
}
