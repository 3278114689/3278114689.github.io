document.getElementById('encouragement').addEventListener('click', function() {
    const encouragements = ['自定义语句', '自定义语句', '自定义语句','自定义语句'];
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