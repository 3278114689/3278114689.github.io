// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants
const urls = [
  'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/rh.gif',
  'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/eag.gif',
  'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/sirong.gif',
  'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/newBTS.gif',
  'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/GREEN.gif',
  'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/her.gif',
  'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/r8.gif',
  'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/dabao.gif',
  'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/muse.gif',
  'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Steven.gif',
  'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/luysi.gif',
  'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/cowboy.gif'
];

// variables
let cardCount = 0;

// functions
function appendNewCard() {
  const card = new Card({
    imageUrl: urls[cardCount % 12],
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
    }
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll('.card:not(.dismissing)');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });
}

// first 5 cards
for (let i = 0; i < 6; i++) {
  appendNewCard();
}
        // 按钮点击事件
        document.getElementById('jumpButton').addEventListener('click', function() {
          window.location.href = '../index.html';
      });

