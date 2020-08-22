# DisplayElement
Класс для управления видимостью элемента


## Api
Управление отображением осуществляется с помощью css класса ***.d-none***. Добавьте в свои стили:

    .d-none {
      display: none
    }
    
-
    
####  DisplayElement.show(...args)

    сonst elOne = document.querySelector('.el__one');
    сonst elTwo = document.querySelector('.el__two');
    
    DisplayElement.show(elOne, elTwo)
  
Показывает элемент. На входе принимает один или несколько Node элементов. Если у элемента отсутствует класс ***.d-none*** то ничего не делает

####  DisplayElement.hide(...args)

    сonst elOne = document.querySelector('.el__one');
    сonst elTwo = document.querySelector('.el__two');
    
    DisplayElement.hide(elOne, elTwo)
  
Скрывает элемент. На входе принимает один или несколько Node элементов. Если элемент уже содержит класс ***.d-none*** то ничего не делает

####  DisplayElement.toggle(...args)

    сonst elOne = document.querySelector('.el__one');
    сonst elTwo = document.querySelector('.el__two');
    
    DisplayElement.toggle(elOne, elTwo)
  
Переключает видимость элемента. На входе принимает один или несколько Node элементов