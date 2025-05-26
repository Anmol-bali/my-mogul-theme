import updateState from './core/updateState';

export default class Auth {
  constructor(context) {
    this.context = context;
    updateState(false, this.selectWrapCallback);
  }

  unload() {
    //remove all event handlers
  }
}
