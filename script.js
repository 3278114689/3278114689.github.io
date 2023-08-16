document.getElementById('encouragement').addEventListener('click', function() {
    const encouragements = ['哈哈哈，你是最棒的！', '你是叉叉的！', '月色和雪色之间，你是第三种牛马!','天地因你失色，因为你'];
    const randomIndex = Math.floor(Math.random() * encouragements.length);
    document.getElementById('message').innerText = encouragements[randomIndex];
});
