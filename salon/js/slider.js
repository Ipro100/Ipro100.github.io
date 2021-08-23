const $text = document.getElementById('slider__text')
const $buttonLeft = document.getElementsByClassName('slider__button--left')[0]
const $buttonRight = document.getElementsByClassName('slider__button--right')[0]
const $currentPage = document.getElementsByClassName('slider__current_page')[0]
const $pagesCount = document.getElementsByClassName('slider__pages_count')[0]
let currentIndex = 0

const pages = [{
  text: 'Ваш бизнес должен существовать от 1 года на рынке и иметь положительные отзывы',
  currentPageText: '01',
},{
  text: 'В каждом городе мы заключаем соглашение только с одним партнером на районе',
  currentPageText: '02',
},{
  text: 'Резерв Места на сайте United Market — дополнительный источник дохода за счет онлайн заказов с нашего сайта',
  currentPageText: '03',
},{
  text: 'Комиссия обсуждается индивидуально с каждым партнером, составляет от 15%',
  currentPageText: '04',
}]

$pagesCount.innerText = pages.length < 10 ? `0${pages.length}` : pages.length

function setPage(index) {
  currentIndex = index
  const page = pages[currentIndex]
  $currentPage.innerText = page.currentPageText;
  $text.innerText = page.text
}

function prevPage() {
  currentIndex > 0
    ? setPage(currentIndex - 1)
    : '';
}

function nextPage() {
   currentIndex < pages.length - 1
    ? setPage(currentIndex + 1)  : '';
}

$buttonLeft.addEventListener('click', prevPage)
$buttonRight.addEventListener('click', nextPage)

