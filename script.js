document.getElementById('encouragement').addEventListener('click', function() {
    const encouragements = ['哈哈哈，好听！', '杀手皇后！', '老实听完','只要活得精彩,我不在乎活多久'];
    const randomIndex = Math.floor(Math.random() * encouragements.length);
    document.getElementById('message').innerText = encouragements[randomIndex];
});
