document.addEventListener('DOMContentLoaded', () => {
    const mediaPlayer = {
        audio: document.getElementById('media-audio'),
        imageContainer: document.getElementById('media-image-container'),
        currentIndex: 0,
        tracks: [
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/rh.gif', // 填入第一张图片的URL
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Creep-Radiohead.mp3', // 填入第一首音乐的URL
                text: 'Creep-Radiohead,收录于他们1993年的专辑《Pablo Honey》中。'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/eag.gif', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Hotel%20California-Eagles.mp3', // 确保路径正确
                text: 'Hotel California-Eagles,收录于他们1976年的专辑《Hotel California》中。'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/STROKE.jpg', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/I%27ll%20Try%20Anything%20Once%20.mp3', // 确保路径正确
                text: 'I’ll Try Anything Once-Strokes,收录于他们1994年的专辑《Glee》中。'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/sirong.gif', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/She%27ll%20Make%20You%20Cry-The%20Velvet%20Underground.mp3', // 确保路径正确
                text: 'She’ll Make You Cry-The Velvet Underground,收录于他们1969年的专辑《The Velvet Underground and Nico》中。'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/VELVET.jpg', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/What%20Goes%20On-The%20Velvet%20Underground.mp3', // 确保路径正确
                text: 'What Goes On-The Velvet Underground,收录于他们1967年的专辑《The Velvet Underground》中。'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/newBTS.gif', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/When%20I%27m%20Sixty%20Four-.mp3', // 确保路径正确
                text: 'When I’m Sixty Four-The Beatles,收录于他们1964年的专辑《Sgt. Pepper’s Lonely Hearts Club Band》中。'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/DAY.jpg', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/%C2%A1Viva%20La%20Gloria-Green%20Day.mp3', // 确保路径正确
                text: 'Viva La Gloria-Green Day,收录于他们1990年的专辑《Dookie》中。'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/br.jpg', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/If-Bread.mp3', // 确保路径正确
                text: 'If-Bread,收录于他们1992年的专辑《Bread-II》中。'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/GREEN.gif', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Green%20is%20the%20Colour-Pink%20Floyd.mp3', // 确保路径正确
                text: 'Green is the Colour-Pink Floyd,收录于他们1970年的专辑《More》中。'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/BOY.jpg', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Wouldn%27t%20It%20Be%20Nice-The%20Beach%20Boys.mp3', // 确保路径正确
                text: 'Wouldn’t It Be Nice-The Beach Boys,收录于他们1966年的专辑《Pet Sounds》中。'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/her.gif', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/My%20Hero-Sean%20Lennon%2CKarla%20Moheno.mp3', // 确保路径正确
                text: 'My Hero-Sean Lennon,Karla Moheno,收录于他们2011年的专辑《Born to Die》中。'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/r8.gif', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Purple%20Rain-Prince%2CThe%20Revolution.mp3', // 确保路径正确
                text: 'Purple Rain-Prince,The Revolution,收录于他们1984年的专辑《Purple Rain》中。'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/dabao.gif', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Space%20Oddity-David%20Bowie.mp3', // 确保路径正确
                text: 'Space Oddity-David Bowie,收录于他1976年的专辑《ChangesOneBowie》中。'
            },
            
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/muse.gif', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Unintended-Muse.mp3', // 确保路径正确
                text: 'Unintended-Muse,收录于他们1999年的专辑《Showbiz》中。'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Steven.gif', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/You%20Are%20The%20Sunshine%20Of%20My%20Life-Stevie%20Wonder.mp3', // 确保路径正确
                text: 'You Are The Sunshine Of My Life-Stevie Wonder,收录于他1972年的专辑《Talking Book》中。'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/luysi.gif', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Oops-Louis%20Armstrong%2CElla%20Fitzgerald.mp3', // 确保路径正确
                text: 'Oops-Louis Armstrong & Ella Fitzgerald,收录于他1952年的专辑《Ella and Louis》中。'
            },
            {
                image: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/cowboy.gif', // 确保路径正确
                music: 'https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Lonesome%20Cowboy%20Bill-The%20Velvet%20Underground.mp3', // 确保路径正确
                text: 'Lonesome Cowboy Bill-The Velvet Underground,收录于他们1969年的专辑《Loaded》中。'
            },
            
            // 添加更多轨道，继续以相同方式添加对象
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



