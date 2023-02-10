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
  dismisOnClick: boolean;

  /**
   * Close toast on outside click on document
   *
   * @memberof ToastConfig
   */
  dismisOnOutsideClick: boolean;

  /**
   * Show the close button
   *
   * @memberof ToastConfig
   */
  showCloseButton: boolean;

  constructor(options?: {
    texts?: string;
    dismisOnClick?: boolean;
    dismisOnOutsideClick?: boolean;
    showCloseButton?: boolean;
  }) {
    this.texts = options?.texts;
    this.dismisOnClick = options?.dismisOnClick ?? true;
    this.dismisOnOutsideClick = options?.dismisOnOutsideClick ?? true;
    this.showCloseButton = options?.showCloseButton ?? true;
  }
}
