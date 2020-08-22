# ManagementEvents
Класс для управления событиями


## Api
***Важно:*** ManagementEvents требуется массив для хранения событий.

#### ManagementEvents.addEventToArr(data)
Принимает на входе объект со следующими ключами

    {
      arr: массив куда сохраняем события,
      el: Node элемент, на который навешиваем обработчик,
      event: событие (string),
      fn: функция без вызова. Возможна анонимная функция, так же без вызова
    }
    
***event*** - строковое значение события JS. Например: *'click'*, *'change'* ... и т.д

Вызов ***ManagementEvents.addEventToArr({...})*** помимо добавления события в массив добавляет обработчик указанному элементу


#### ManagementEvents.removeEvents(arr)
Принимает на входе ранее созданный массив с объектами, содержащими информацию о событиях, обработчиках, функциях и элементах.

Удаляет все обработчики и очищает массив

## Примеры
Как было сказано ранее - ManagementEvents требуется массив для хранения событий. Это может быть массив внутри вашего класса, в котором будут события относящиеся непосредственного к этому классу. Добавление событий можно реализовать в методе **bind()**:

    ManagementEvents.addEventToArr(тут объект с данными)

Такой подход удобен тем что при реализации метода **destroyed** вам нужно будет вызвать 

    ManagementEvents.removeEvents(тут ваш массив с событиями)
  
и все обработчики привязанные к классу будут удалены

Пример реализации:

    class GuestList {
            list = ...
            ...
        
            /** Массив событий */
            arrEvents = [];
            
            constructor(...) {
              ...
              this.btnDel = list.querySelector('.btn-del')
              
              bind();
            }
            
            bind() {
              ...
              
              /** Удалить персону */
              ManagementEvents.addEventToArr({
                arr: this.arrEvents,
                el:  this.btnDel,
                event: 'click',
                fn: this.delPerson  // или () => this.delPerson()
              });
            }
            
            destroyed() {
              ...
              
              ManagementEvents.removeEvents(arrEvents)
            }
            
            delPerson() {
              ...
            }
          }
          
        const guestList = new GuestList({...})

        
Так же ManagementEvents может быть использован вне какого либо класса. Главное создать массив для хранения информации о обработчиках и не добавлять в него ничего лишнего

Например добавим событие на кнопку **.btn**. При срабатывании которого в консоль выводится сообщение *Hello*

    const arrEvents = [];
    
    const button = document.queruSelector('.btn');
    const data = {
                   arr: arrEvents,
                   el:  button,
                   event: 'click',
                   fn: () => console.log('Hello')
                 };
    ManagementEvents.addEventToArr(data);
    
Так же добавим событие на кнопку **.btn2**. При срабатывании которого будут удалены все обработчики, информация о которых содержится в **arrEvents**
    
    const button2 = document.queruSelector('.btn2');
    const data = {
                   arr: arrEvents,
                   el:  button,
                   event: 'click',
                   fn: () => ManagementEvents.removeEvents(arrEvents)
                 };
    ManagementEvents.addEventToArr(data);
    
В итоге при нажатии на **.btn** получаем сообщение в консоль, при нажатии на **.btn2** удаляются все обработчики. И если мы снова нажмем **.btn** или **.btn2** то ничего не произойдет, т.к все события были удалены