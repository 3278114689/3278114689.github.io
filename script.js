document.getElementById('encouragement').addEventListener('click', function() {
    const encouragements = ['哈哈哈，好听！', '杀手皇后！', '月色和雪色之间，你是第三种牛马!','天地因你失色，因为你'];
    const randomIndex = Math.floor(Math.random() * encouragements.length);
    document.getElementById('message').innerText = encouragements[randomIndex];
});
