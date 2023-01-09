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

  constructor(options?: {
    texts?: string;
    showCloseButton?: boolean;
    dismisOnClick?: boolean;
  }) {
    this.texts = options?.texts;
    this.dismisOnClick = options?.dismisOnClick ?? false;
    this.showCloseButton = options?.showCloseButton ?? false;
  }
}
