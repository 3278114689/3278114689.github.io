document.getElementById('encouragement').addEventListener('click', function() {
    const encouragements = ['熙熙宝贝，你是最棒的！', '你是最可爱的！', '月色和雪色之间，你是第三种绝色!','天地因你失色'];
    const randomIndex = Math.floor(Math.random() * encouragements.length);
    document.getElementById('message').innerText = encouragements[randomIndex];
});
