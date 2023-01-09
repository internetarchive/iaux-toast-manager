import { LitElement, html, css, CSSResult, TemplateResult, nothing } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { ToastConfig } from './toast-config';
import { ToastManagerInterface } from './toast-manager-interface';

@customElement('toast-template')
export class ToastTemplate extends LitElement implements ToastManagerInterface {
  /**
   * The ToastConfig that displayed the template
   *
   * @type {ToastConfig}
   * @memberof ToastTemplate
   */
  @property({ type: Object }) config: ToastConfig = new ToastConfig();

  /** @inheritdoc */
  render() {
    return this.config.texts
      ? html`
          <span
            class="toast-message fade-in"
            title="Click/tap to close"
            @click=${this.closeToast}
            >${this.config.texts}</span
          >
        `
      : nothing;
  }

  /** @inheritdoc */
  closeToast() {
    console.log('toast clicked!');
    // early return if not allow to close
    if (this.config.dismisOnClick === false) return nothing;

    this.config.texts = '';
    document.querySelector('toast-template')?.remove();
  }

  /** @inheritdoc */
  async showToast(options: { config: ToastConfig }): Promise<void> {
    this.config = options.config;

    await this.updateComplete;
    this.focus();
  }

  /** @inheritdoc */
  static get styles(): CSSResult {
    const toastTopMargin = css`var(--toastTopMargin, 80px)`;
    const toastBGColor = css`var(--toastBGColor, #333333)`;
    const toastFontColor = css`var(--toastFontColor, #ffffff)`;

    return css`
      :host {
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        z-index: 2;
        width: fit-content;
        user-select: none;
        top: ${toastTopMargin};
        display: inline-grid;
      }

      .container {
        width: 100%;
        height: 100%;
      }

      .toast-message {
        font-size: 1.4rem;
        font-family: 'Helvetica Neue';
        color: ${toastFontColor};
        background: ${toastBGColor};
        border: 1px solid #fff;
        border-radius: 5px;
        box-shadow: 1px 1px 2px;
        padding: 10px;
        cursor: pointer;
        animation: fadeIn 0.5s;
        transition: 0.5s all;
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      }

      .hidden {
        display: none;
      }
      .visible {
        display: inline-block;
      }
    `;
  }
}
