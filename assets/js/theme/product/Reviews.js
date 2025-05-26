import Modal from 'bc-modal';
import FormValidator from '../utils/FormValidator';

export default class ProductReviews {
  constructor(context) {
    this.context = context;
    this.url = location.href;

    this.Validator = new FormValidator(this.context);

    this.reviewModal = new Modal({
      el: $('#modal-review-form'),
      modalClass: 'modal-leave-review',
      afterShow: () => {
        const $form = $('#form-leave-a-review');
        this.Validator.initSingle($form);
      },
    });

    this._productReviewHandler();
    this._bindEvents();
  }

  _bindEvents() {
    $('[data-review-link]').click((event) => {
      event.preventDefault();
      this.reviewModal.open();
    });
  }

  _productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.reviewModal.open();
    }
  }

  unload() {
    //remove all event handlers
  }
}
