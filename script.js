document.getElementById('encouragement').addEventListener('click', function() {
    const encouragements = ['邓丽菲，你是最棒的！', '相信自己，你可以的！', '你已经做得很好了!', '你的努力一定会有回报的！'];
    const randomIndex = Math.floor(Math.random() * encouragements.length);
    document.getElementById('message').innerText = encouragements[randomIndex];
});
function showImage() {
    document.getElementById('fullScreenImage').style.display = 'block';
    setTimeout(function() {
      document.getElementById('fullScreenImage').style.display = 'none';
    }, 2000);  // 2秒后隐藏图片
  }
  
  // 假设“文本播放完毕”可以通过一些条件判断实现，当满足这个条件时调用showImage函数
  if (encouragements) {
    showImage();
  }