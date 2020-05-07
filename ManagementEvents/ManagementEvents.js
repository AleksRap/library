/** Управляем событиями */
class ManagementEvents {

  /**
   * На входе принимаем объект с параметрами
   * arr   - массив куда сохраняем события
   * el    - элемент, на который навешиваем обработчик
   * event - событие (str)
   * fn    - анонимная функция без вызова
   * @param data
   */
  static addEventToArr(data) {
    /** Добавляем событие в массив */
    data.arr.push({el: data.el, event: data.event, fn: data.fn});

    /** Вешаем слушатель */
    data.el.addEventListener(data.event, data.fn);

    return true
  }

  /**
   * На входе принимаем массив событий
   * @param arr
   */
  static removeEvents(arr) {
    /** Снимаем обработчики события */
    arr.forEach(item => {
      item.el.removeEventListener(item.event, item.fn)
    });

    /** Очищаем массив */
    arr.splice(0, arr.length);

    return true;
  }
}