import AmpProductUtils from './core/amp/AmpProductUtils';
import AmpQuantityWidget from './core/amp/AmpQuantityWidget';
import initFormSwatchFields from './core/formSelectedValue';

export default class AmpProduct {
  constructor(context) {
    this.el = '[data-product-container]';

    initFormSwatchFields();

    // Qty Control
    new AmpQuantityWidget({scope: '[data-cart-item-add]'});

    this.ProductUtils = new AmpProductUtils(this.el, {
      callbacks: {},
    }).init(context);
  }
}
