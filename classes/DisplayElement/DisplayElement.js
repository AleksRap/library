/** Прячем/показываем элементы */
class DisplayElement {
  static show(...elements) {
    elements.forEach(el => el.classList.contains('d-none') && el.classList.remove('d-none'));
  }

  static hide(...elements) {
    elements.forEach(el => !el.classList.contains('d-none') && el.classList.add('d-none'));
  }

  static toggle(...elements) {
    elements.forEach(el => el.classList.toggle('d-none'));
  }
}
