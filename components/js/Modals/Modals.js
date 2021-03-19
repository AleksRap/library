class Modal {
  arrEvents = [];

  constructor(data) {
    this._modal = document.getElementById(data.idModal);
    this._modalWindow = this._modal.querySelector('[data-modal="window"]');

    this._btnOpen = document.querySelector(data.selectorBtnOpen);
    this._btnClose = this._modal.querySelector('[data-modal="close"]');

    this.bind();
  }

  open() {
    this._modal.classList.add('modal_open');
    this._modalWindow.classList.add('modal__window_open');
  }
  close() {
    this._modal.classList.remove('modal_open');
    this._modalWindow.classList.remove('modal__window_open');
  }

  bind() {
    /**
     * Открытие модалки по клику на кнопку
     */
    ManagementEvents.addEventToArr({
      arr: this.arrEvents,
      el: this._btnOpen,
      event: 'click',
      fn: () => this.open()
    });

    /**
     * Закрытие модалки по клику вне нее
     */
    ManagementEvents.addEventToArr({
      arr: this.arrEvents,
      el: this._modal,
      event: 'click',
      fn: event => !event.target.closest('[data-modal=window]') && this.close()
    });

    /**
     * Закрытие модалки по клику на крестик
     */
    ManagementEvents.addEventToArr({
      arr: this.arrEvents,
      el: this._btnClose,
      event: 'click',
      fn: () => this.close()
    });
  }

  destroy() {
    ManagementEvents.removeEvents(this.arrEvents);
    this._modal.remove();
  }
}