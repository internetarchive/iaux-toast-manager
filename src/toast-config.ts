/**
 * Configuration to show a Toast
 *
 * @export
 * @class ToastConfig
 */
export class ToastConfig {
  /**
   * The texts display in toast
   *
   * @type {string}
   * @memberof ToastConfig
   */
  texts?: string;

  /**
   * Close toast on click or tap
   *
   * @memberof ToastConfig
   */
  dismissOnClick: boolean;

  /**
   * Close toast on outside click on document
   *
   * @memberof ToastConfig
   */
  dismissOnOutsideClick: boolean;

  /**
   * Show the close button
   *
   * @memberof ToastConfig
   */
  showCloseButton: boolean;

  constructor(options?: {
    texts?: string;
    dismissOnClick?: boolean;
    dismissOnOutsideClick?: boolean;
    showCloseButton?: boolean;
  }) {
    this.texts = options?.texts;
    this.dismissOnClick = options?.dismissOnClick ?? true;
    this.dismissOnOutsideClick = options?.dismissOnOutsideClick ?? true;
    this.showCloseButton = options?.showCloseButton ?? true;
  }
}
