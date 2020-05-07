/** Прячем/показываем элементы */
class DisplayElement {
  static show(...arrEl) {
    arrEl.forEach(el => el.classList.contains('d-none') ? el.classList.remove('d-none') : null);
  }

  static hide(...arrEl) {
    arrEl.forEach(el => el.classList.contains('d-none') ? null : el.classList.add('d-none'));
  }

  static toggle(...arrEl) {
    arrEl.forEach(el => el.classList.toggle('d-none'));
  }
}