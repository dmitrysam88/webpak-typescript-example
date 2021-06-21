// создание свойства класса без конструктора
class Game {
  private name = 'Violin Charades';
  
  public getName() : string {
    return this.name;
  }
  
}
const myGame = new Game()

// создаем параграф
const p = document.createElement('p')
p.textContent = `I like ${myGame.getName()}.`

// создаем элемент заголовка
const heading = document.createElement('h1')
heading.textContent = 'Как интересно!!!'

// добавляем параграф и заголовок в DOM
const root = document.querySelector('#root')
root.append(heading, p)