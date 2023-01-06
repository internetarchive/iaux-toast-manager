import { LitElement, TemplateResult } from 'lit';
import { ToastConfig } from './toast-config';

export interface ToastManagerInterface extends LitElement {
  /**
   * Show a toast from a given ToastConfig
   *
   * @param config ToastConfig
   * @param customToastContent TemplateResult | undefined
   * @param userClosedToastCallback () => void | undefined an optional callback when the toast is closed
   */
  showToast(options: {
    config: ToastConfig;
    customToastContent?: TemplateResult;
    userClosedToastCallback?: () => void;
  }): Promise<void>;

  /**
   * Close the currently open toast
   */
  closeToast(): void;
}
