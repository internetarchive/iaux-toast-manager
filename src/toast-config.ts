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
   * @type {string}
   * @memberof ToastConfig
   */
  texts?: string;

  /**
   * Show or hide the processing indicator
   *
   * @memberof ToastConfig
   */
  dismisOnClick: boolean;

  /**
   * Show the close button
   *
   * @memberof ToastConfig
   */
  showCloseButton: boolean;

  constructor(options?: {
    texts?: string;
    dismisOnClick?: boolean;
    showCloseButton?: boolean;
  }) {
    this.texts = options?.texts;
    this.dismisOnClick = options?.dismisOnClick ?? true;
    this.showCloseButton = options?.showCloseButton ?? true;
  }
}
