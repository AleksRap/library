# Pagination
Плагин добавляющий пагинацию. Для работы требуется **ManagementEvents** и **DisplayElement**


## Использование
Создайте обертку для пагинации

Pug

    #pagination.pagination
    
HTML

    <div class="pagination" id="pagination"></div>
    

Инициализируйте плагин (*зачения ключей указаны в качестве примера*)

    const pagination = new Pagination({
      selectorPagination: '#pagination',
      quantityPage: 15,
      activePage: 1,
      customEvents: true
    });
    
где:

- ***selectorPagination*** - (*string*) - валидный css селектор обертки для пагинации

- ***quantityPage*** - (*number*) - общее число страниц

- ***activePage*** - (*number*) - активная страница

- ***customEvents*** - (*boolean*) - создавать или нет кастомные события, при нажатии на элементы пагинации. См. раздел *Отслеживание переключения страниц*


## Api
- **firstPage** - переключение на первую страницу

- **prevPage** - переключение на предыдущую страницу

- **numPage** - переключение на нумерованую страницу

- **nextPage** - переключение на следующую страницу

- **lastPage** - переключение на последнюю страницу

- **update** - обновление событий

- **destroy** - удаление событий и самой пагинации


## Отслеживание переключения страниц
Есть два способа отследить переключение страниц в пагинации и затем выполнить само переключение

##### Создать класс, который наследуется от Pagination и переопределить стандартные методы переключения страниц

    class BookPagination extends Pagination {
      constructor(data) {
        super(data);
        ...
      }
      ...
      prevPage() {
        super.prevPage();
        ... тут ваш код ...
      }
      ... прочие методы
    }
    
    const bookPagination = new BookPagination({
      selectorPagination: '#pagination',
      activePage: 1,
      quantityPage: 15,
      customEvents: false
    });
    
##### Активировать кастомные события и ловить их на предках элемента пагинации

Верстка (Pug):

    .page-wrap
      ...
        #pagination.pagination
        
JS

    const pagination = new Pagination({
      selectorPagination: '#pagination',
      activePage: 1,
      quantityPage: 15,
      customEvents: true
    });

    document.querySelector('.page-wrap').addEventListener('nextPage', () => {
      ... тут ваш код ...
    });
    
Полный перечень кастомных в разделе *Кастомные события*


## Кастомные события
- **firstPage** - переключение на первую страницу

- **prevPage** - переключение на предыдущую страницу

- **numPage** - переключение на нумерованую страницу

- **nextPage** - переключение на следующую страницу

- **lastPage** - переключение на последнюю страницу

Все события всплывают


## Внешний вид
Внешний вид полностью настраивается через css