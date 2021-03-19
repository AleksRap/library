# Library

Список пополняется по мере добавления элементов

### Classes
    1. DisplayElement - управление отображением элементов
    2. ManagementEvents - управление обработчиками событий
    3. Fetch - удобное использование fetch api, включающее генерацию ошибок при статусе ответа сервера !== 'success'


### Components
    JS:
    
    1. Modal - модальное окно с встроенной анимацией (требуется ManagementEvents)
    2. Pagination - пагинация (требуются ManagementEvents и DisplayElement)

---
    React:
    
    1. Button
    2. Checkbox
    3. Copyable - скопировать что-либо в буфер обмена
    4. Datepicker - двойной датапикер с календарем
    5. Icon - для вставки иконок из fontello
    6. Input
    7. Modals - включает в себя Modal и ModalAsk
    8. Preloader
    9. Radio
    10. Select
    11. Switcher
    12. Table
    13. Typography - вклюает в себя Text и заголовки H1...H5
  
    
### Utils
    1. shortenPhrase - сокращает строки с добавлением троеточия
    2. cloneObject - глубокое клонирование объекта
    3. removeEmptyFields - удаление пустых полей объекта (требуется cloneObject)
    4. removeSpace - удаление всех пробелов у строки
    5. formatObjectFields - форматирование полей объекта. Включает в себя две функции camelCaseToSnakeCase и snakeCaseToCamelCase
