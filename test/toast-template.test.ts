import { html, fixture, expect } from '@open-wc/testing';

import { stub } from 'sinon';
import type { ToastTemplate } from '../src/toast-template';
import { ToastConfig } from '../src/toast-config';
import '../src/toast-template';

describe('ToastTemplate', () => {
  it('has correct default configuration', async () => {
    const config = new ToastConfig();
    config.texts = 'Thank you for your support!';

    const el = await fixture<ToastTemplate>(
      html`<toast-template .config=${config}></toast-template>`
    );

    expect(config.dismissOnClick).to.equal(true);
    expect(config.dismissOnOutsideClick).to.equal(true);
    expect(config.showCloseButton).to.equal(true);

    const message = el.shadowRoot?.querySelector('.toast-message');
    expect(message).to.exist;
    expect(message?.textContent).to.equal('Thank you for your support!');
    expect(message?.getAttribute('title')).to.equal('Click/tap to close');
  });

  it('if message texts is not provided', async () => {
    const config = new ToastConfig();
    config.texts = undefined;

    const el = await fixture<ToastTemplate>(
      html`<toast-template .config=${config}></toast-template>`
    );

    const message = el.shadowRoot?.querySelector('.toast-message');
    expect(message).to.not.exist;
  });

  it('close toast message on click or tap', async () => {
    const config = new ToastConfig();
    config.texts = 'Thank you for your support!';
    config.dismissOnClick = true;
    config.dismissOnOutsideClick = true;

    const el = await fixture<ToastTemplate>(
      html`<toast-template .config=${config}></toast-template>`
    );

    const toastMsg = el.shadowRoot?.querySelector(
      '.toast-message'
    ) as HTMLElement;

    const closeToastStub = stub(el, 'closeToast');
    await toastMsg.click();
    expect(closeToastStub).to.have.callCount(1);
  });
});
