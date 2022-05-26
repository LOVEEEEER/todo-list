const input = document.body.querySelector('.input');
const button = document.body.querySelector('.btn');
const container = document.body.querySelector('.container');
const form = document.body.querySelector('.form');

document.addEventListener('submit', (event) => {
  event.preventDefault()
  const paragraph = document.createElement('p');
  const deleteButton = document.createElement('button');
  const itemWrap = document.createElement('div');
  itemWrap.className = 'wrapper'
  deleteButton.textContent = 'Удалить';
  deleteButton.className = 'delete-button btn btn-primary';
  deleteButton.style.marginLeft = '30px';
  paragraph.className = 'content'
  paragraph.textContent = input.value;

  const contentValues = document.querySelectorAll('.content');
  const valuesBag = [];
  contentValues.forEach(key => {
    valuesBag.push(key.textContent.toLowerCase());
  })


  if (input.value && !valuesBag.includes(input.value.toLowerCase())) {
    itemWrap.append(paragraph);
    itemWrap.append(deleteButton);
    container.prepend(itemWrap)
  } else {
    alert('Ошибка');
  }
  
  input.value = '';
})

container.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-button')) {
    const parent = event.target.closest('.wrapper');
    const yesOrNo = confirm('Вы точно хотите удалить элемент?');
    if (yesOrNo) {
      parent.remove();
    } 
  }
})

document.addEventListener('keydown', (event) => {
  const { key } = event;
  if (key === 'Delete') {
    const itemWrap = document.body.querySelectorAll('.wrapper');
    const suggestion = confirm('Вы уверены?');
    if (suggestion) {
      itemWrap[itemWrap.length - 1].remove();
    }
  }
})

let backgroundThemeNum = 0;

setInterval(() => {
    if (!backgroundThemeNum) {
      document.body.style.backgroundColor = 'skyblue';
      backgroundThemeNum = 1;
    } else {
      document.body.style.backgroundColor = 'palegoldenrod';
      backgroundThemeNum = 0;
    }
}, 1000)
