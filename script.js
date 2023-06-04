document.getElementById('encouragement').addEventListener('click', function() {
    const encouragements = ['邓丽菲，你是最棒的！', '相信自己，你可以的！', '你已经做得很好了!', '你的努力一定会有回报的！','今日幸运色：海洋蓝'];
    const randomIndex = Math.floor(Math.random() * encouragements.length);
    document.getElementById('message').innerText = encouragements[randomIndex];
});
