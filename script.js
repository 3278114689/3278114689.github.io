document.getElementById('encouragement').addEventListener('click', function() {
    const encouragements = ['生日快乐，瑞连', '金风玉露一相逢，便胜却人间无数，此生此夕，愿你年华如诗，岁岁芳华如故。', '雲卷雲舒，岁月轻筝过指，今日为你，愿锦时光里，繁花似锦，璀璨如你','星汉灿烂，今朝尤为你闪烁；岁月如歌，愿你颂中寻找永恒的美好。'];
    const randomIndex = Math.floor(Math.random() * encouragements.length);
    const messageElement = document.getElementById('message');
    messageElement.innerText = encouragements[randomIndex];
    messageElement.classList.remove('fade-in'); // 先移除类，以确保每次点击都可以触发动画
    void messageElement.offsetWidth; // 强制浏览器重绘，这样可以确保动画每次都能触发
    messageElement.classList.add('fade-in');
    const flowersContainer = document.getElementById('flowers');
    flowersContainer.innerHTML = ''; // 清除之前的花瓣

    const startX = event.clientX - 10; // 减10是为了将花朵的中心点定位到鼠标点击的位置
    const startY = event.clientY - 10;

    for (let i = 0; i < 10; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.left = startX + (Math.random() - 0.5) * 100 + 'px'; // 在鼠标点击位置的周围创建花朵
        flower.style.top = startY + (Math.random() - 0.5) * 100 + 'px';
        flowersContainer.appendChild(flower); 
}});