document.addEventListener('DOMContentLoaded', () => {
    const mediaPlayer = {
        audio: document.getElementById('media-audio'),
        imageContainer: document.getElementById('media-image-container'),
        currentIndex: 0,
        tracks: [
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/rh.jpg', // 填入第一张图片的URL
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Creep-Radiohead.mp3', // 填入第一首音乐的URL
                text: 'Creep-Radiohead'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/eag.jpg', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Hotel%20California-Eagles.mp3', // 确保路径正确
                text: 'Hotel California-Eagles'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/STROKE.jpg', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/I%27ll%20Try%20Anything%20Once%20.mp3', // 确保路径正确
                text: 'I’ll Try Anything Once-Strokes'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/SQU.jpg', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/She%27ll%20Make%20You%20Cry-The%20Velvet%20Underground.mp3', // 确保路径正确
                text: 'She’ll Make You Cry-The Velvet Underground'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/VELVET.jpg', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/What%20Goes%20On-The%20Velvet%20Underground.mp3', // 确保路径正确
                text: 'What Goes On-The Velvet Underground'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/BTS.jpg', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/When%20I%27m%20Sixty%20Four-.mp3', // 确保路径正确
                text: 'When I’m Sixty Four-The Beatles'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/DAY.jpg', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/%C2%A1Viva%20La%20Gloria-Green%20Day.mp3', // 确保路径正确
                text: 'Viva La Gloria-Green Day'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/br.jpg', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/If-Bread.mp3', // 确保路径正确
                text: 'If-Bread'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/GREEN.jpg', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Green%20is%20the%20Colour-Pink%20Floyd.mp3', // 确保路径正确
                text: 'Green is the Colour-Pink Floyd'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/BOY.jpg', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Wouldn%27t%20It%20Be%20Nice-The%20Beach%20Boys.mp3', // 确保路径正确
                text: 'Wouldn’t It Be Nice-The Beach Boys'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/sem.jpg', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/My%20Hero-Sean%20Lennon%2CKarla%20Moheno.mp3', // 确保路径正确
                text: 'My Hero-Sean Lennon,Karla Moheno'
            },
            
            // 若要添加更多轨道，继续以相同方式添加对象
        ],
        loadTrack(index) {
            if (index >= 0 && index < this.tracks.length ) {
                const track = this.tracks[index];
                this.audio.src = track.music;
                this.imageContainer.style.backgroundImage = `url(${track.image})`;
                document.getElementById('text-overlay').innerText = track.text;
                this.currentIndex = index;
            }
        },
        // 更多函数将在这里实现...
    };

    // 初始化第一首曲目
    mediaPlayer.loadTrack(mediaPlayer.currentIndex );

    //事件监听和其他函数将在这里设置...
    // 处理图片点击事件，触发翻转和文本显示
    function toggleFlipImage() {
        const imageContainer = document.getElementById('media-image-container');
        const textOverlay = document.getElementById('text-overlay');
        imageContainer.classList.toggle('flipped');
        textOverlay.classList.toggle('flipped');
        
    }
    
    // 为图片添加点击事件监听
    document.getElementById('media-image-container').addEventListener('click', toggleFlipImage);
    // 为文本添加点击事件监听
    document.getElementById('text-overlay').addEventListener('click', toggleFlipImage);


    // 处理切换到上一张或下一张图片和音乐
    function changeTrack(direction) {
        if (direction === 'next') {
            mediaPlayer.currentIndex = (mediaPlayer.currentIndex + 1) % mediaPlayer.tracks.length;
        } else if (direction === 'prev') {
            mediaPlayer.currentIndex = (mediaPlayer.currentIndex - 1 + mediaPlayer.tracks.length ) % mediaPlayer.tracks.length;
        }        mediaPlayer.loadTrack(mediaPlayer.currentIndex );
    }
    // 添加按钮事件监听
    document.getElementById('btn-prev').addEventListener('click', () => changeTrack('prev'));
    document.getElementById('btn-next').addEventListener('click', () => changeTrack('next'));
});