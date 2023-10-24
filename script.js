document.getElementById('encouragement').addEventListener('click', function() {
    const encouragements = ['生日快乐，瑞连', '金风玉露一相逢，便胜却人间无数，此生此夕，愿你年华如诗，岁岁芳华如故。', '雲卷雲舒，岁月轻筝过指，今日为你，愿锦时光里，繁花似锦，璀璨如你','星汉灿烂，今朝尤为你闪烁；岁月如歌，愿你颂中寻找永恒的美好。'];
    const randomIndex = Math.floor(Math.random() * encouragements.length);
    document.getElementById('message').innerText = encouragements[randomIndex];
});
