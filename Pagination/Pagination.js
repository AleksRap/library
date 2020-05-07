/**
 * Пагинация
 */
class Pagination {

  /** Массив событий */
  arrEvents = [];

  constructor(data) {
    this.pagination = document.querySelector(data.selectorPagination);
    this.customEvents = data.customEvents;

    this.activePage = data.activePage;
    this.quantityPage = data.quantityPage;

    /** Элементы управления */
    this.elements = this._getElements();

    /** Биндим события */
    this._bind();

    /** Рендерим пагинцаию */
    this._render();
  }

  firstPage() {
    this.activePage = 1;
    this._render();
  }
  prevPage() {
    this.activePage--;
    this._render();
  }
  numPage(el) {
    this.activePage = +el.textContent;
    this._render();
  }
  nextPage() {
    this.activePage++;
    this._render();
  }
  lastPage() {
    this.activePage = this.quantityPage;
    this._render();
  }

  update() {
    /** Удаляем старые события */
    ManagementEvents.removeEvents(this.arrEvents);

    /** Находим элементы заново */
    this.elements = this._getElements();

    /** Биндим события */
    this._bind();
  }
  destroy() {
    ManagementEvents.removeEvents(this.arrEvents);
    this.pagination.remove();
  }

  /**
   * @private
   */
  _bind() {
    /** Обработчик на всю пагинцию */
    ManagementEvents.addEventToArr({
      arr: this.arrEvents,
      el:  this.pagination,
      event: 'click',
      fn: event => this._actions(event)
    });

    /**
     * Если флаг кастомных событий true, то создаем эти события
     */
    if (this.customEvents) {

      /** Первая страница */
      if (this.elements.firstPage) {
        ManagementEvents.addEventToArr({
          arr: this.arrEvents,
          el:  this.elements.firstPage,
          event: 'click',
          fn: () => this._createEventFirstPage()
        });
      }

      /** Предыдущая страница */
      if (this.elements.prevPage) {
        ManagementEvents.addEventToArr({
          arr: this.arrEvents,
          el:  this.elements.prevPage,
          event: 'click',
          fn: () => this._createEventPrevPage()
        });
      }

      /** Следующая страница */
      if (this.elements.nextPage) {
        ManagementEvents.addEventToArr({
          arr: this.arrEvents,
          el:  this.elements.nextPage,
          event: 'click',
          fn: () => this._createEventNextPage()
        });
      }

      /** Последняя страница */
      if (this.elements.lastPage) {
        ManagementEvents.addEventToArr({
          arr: this.arrEvents,
          el:  this.elements.lastPage,
          event: 'click',
          fn: () => this._createEventLastPage()
        });
      }

      /** Номер страницы */
      if (this.elements.numPage.length) {
        this.elements.numPage.forEach(num => {
          ManagementEvents.addEventToArr({
            arr: this.arrEvents,
            el:  num,
            event: 'click',
            fn: () => this._createEventNumPage(num)
          });
        });
      }
    }
  }

  _getElements() {
    return {
      firstPage: this.pagination.querySelector('[data-pagination="first"]'),
      prevPage: this.pagination.querySelector('[data-pagination="prev"]'),
      nextPage: this.pagination.querySelector('[data-pagination="next"]'),
      lastPage: this.pagination.querySelector('[data-pagination="last"]'),
      numPage: this.pagination.querySelectorAll('[data-pagination="num"]')
    }
  }
  _render() {
    /**
     * Если число страниц больше одной - показываем пагинцию
     * если меньше - скрываем
     */
    if (this.quantityPage > 1) DisplayElement.show(this.pagination);
    else DisplayElement.hide(this.pagination);

    /** Шаблон стрелок влево */
    const arrowLeft = `
      <div class="pagination__arrow" data-pagination="first"><<</div>
      <div class="pagination__arrow" data-pagination="prev"><</div>
    `;

    /** Шаблон стрелок вправо */
    const arrowRight = `
      <div class="pagination__arrow" data-pagination="next">></div>
      <div class="pagination__arrow" data-pagination="last">>></div>
    `;

    /** Шаблон точек */
    const dots = '<div class="pagination__dots">...</div>';

    /** Шаблон последней страницы */
    const lastPage = `<div class="pagination__item" data-pagination="num">${this.quantityPage}</div>`;
    const lastPageActive = `<div class="pagination__item active">${this.quantityPage}</div>`;

    /** Шаблон остальных пяти страниц */
    let fivePages = '';
    const startPage = (this.quantityPage - this.activePage) > 5
      ? this.activePage
      : this.quantityPage > 5
        ? this.quantityPage - 5
        : 1;

    for (let i = startPage; i < startPage + 5 && i < this.quantityPage; i++) {
      if (i === this.activePage) {
        fivePages += `<div class="pagination__item active" data-pagination="num">${i}</div>`;
        continue;
      }
      fivePages += `<div class="pagination__item" data-pagination="num">${i}</div>`
    }

    /** Шаблон пагинации */
    const templatePagination = `
      ${this.activePage === 1 ? '' : arrowLeft}
      ${fivePages}
      ${(this.quantityPage - this.activePage) > 5 ? dots : ''}
      ${this.activePage === this.quantityPage ? lastPageActive : lastPage}
      ${this.activePage === this.quantityPage ? '' : arrowRight}
    `;

    this.pagination.innerHTML = templatePagination;

    /** Если включены кастомные события, то бновляем элемент */
    this.customEvents && this.update();
  }
  _actions(event) {
    const el = event.target.closest('[data-pagination]');
    if (!el) return;

    switch (el.dataset.pagination) {
      case 'first':
        this.firstPage();
        break;
      case 'prev':
        this.prevPage();
        break;
      case 'num':
        this.numPage(el);
        break;
      case 'next':
        this.nextPage();
        break;
      case 'last':
        this.lastPage();
        break;
    }
  }

  _createEventFirstPage() {
    const firstPage = new Event('firstPage', {bubbles: true});
    this.elements.firstPage.dispatchEvent(firstPage);
  }
  _createEventPrevPage() {
    const prevPage = new Event('prevPage', {bubbles: true});
    this.elements.prevPage.dispatchEvent(prevPage);
  }
  _createEventNumPage(elem) {
    const numPage = new Event('numPage', {bubbles: true});
    elem.dispatchEvent(numPage);
  }
  _createEventNextPage() {
    const nextPage = new Event('nextPage', {bubbles: true});
    this.elements.nextPage.dispatchEvent(nextPage);
  }
  _createEventLastPage() {
    const lastPage = new Event('lastPage', {bubbles: true});
    this.elements.lastPage.dispatchEvent(lastPage);
  }
}