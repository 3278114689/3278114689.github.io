document.addEventListener('DOMContentLoaded', () => {
    // 音乐数据
    const tracks = [
        {
            id: 1,
            title: "Creep",
            artist: "Radiohead",
            album: "Pablo Honey",
            year: "1993",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/rh.gif",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Creep-Radiohead.mp3",
        },
        {
            id: 2,
            title: "Hotel California",
            artist: "Eagles",
            album: "Hotel California",
            year: "1976",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/eag.gif",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Hotel%20California-Eagles.mp3",
        },
        {
            id: 3,
            title: "I’ll Try Anything Once",
            artist: "The Strokes",
            album: "Glee",
            year: "1994",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/STROKE.jpg",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/I%27ll%20Try%20Anything%20Once%20.mp3",
        },
        {
            id: 4,
            title: "She’ll Make You Cry",
            artist: "The Velvet Underground",
            album: "The Velvet Underground and Nico",
            year: "1969",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/sirong.gif",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/She%27ll%20Make%20You%20Cry-The%20Velvet%20Underground.mp3",
        },
        {
            id: 5,
            title: "What Goes On",
            artist: "The Velvet Underground",
            album: "The Velvet Underground",
            year: "1967",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/VELVET.jpg",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/What%20Goes%20On-The%20Velvet%20Underground.mp3",
        },
        {
            id: 6,
            title: "When I’m Sixty Four",
            artist: "The Beatles",
            album: "Sgt. Pepper’s Lonely Hearts Club Band",
            year: "1964",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/newBTS.gif",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/When%20I%27m%20Sixty%20Four-.mp3",
        },
        {
            id: 7,
            title: "Viva La Gloria",
            artist: "Green Day",
            album: "Dookie",
            year: "1990",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/DAY.jpg",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/%C2%A1Viva%20La%20Gloria-Green%20Day.mp3",
        },
        {
            id: 8,
            title: "If",
            artist: "Bread",
            album: "Bread-II",
            year: "1992",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/br.jpg",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/If-Bread.mp3",
        },
        {
            id: 9,
            title: "Green is the Colour",
            artist: "Pink Floyd",
            album: "More",
            year: "1970",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/GREEN.gif",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Green%20is%20the%20Colour-Pink%20Floyd.mp3",
        },
        {
            id: 10,
            title: "Wouldn’t It Be Nice",
            artist: "The Beach Boys",
            album: "Pet Sounds",
            year: "1966",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/BOY.jpg",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Wouldn%27t%20It%20Be%20Nice-The%20Beach%20Boys.mp3",
        },
        {
            id: 11,
            title: "My Hero",
            artist: "Sean Lennon, Karla Moheno",
            album: "Born to Die",
            year: "2011",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/her.gif",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/My%20Hero-Sean%20Lennon%2CKarla%20Moheno.mp3",
        },
        {
            id: 12,
            title: "Purple Rain",
            artist: "Prince, The Revolution",
            album: "Purple Rain",
            year: "1984",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/r8.gif",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Purple%20Rain-Prince%2CThe%20Revolution.mp3",
        },
        {
            id: 13,
            title: "Space Oddity",
            artist: "David Bowie",
            album: "ChangesOneBowie",
            year: "1976",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/dabao.gif",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Space%20Oddity-David%20Bowie.mp3",
        },
        {
            id: 14,
            title: "Unintended",
            artist: "Muse",
            album: "Showbiz",
            year: "1999",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/muse.gif",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Unintended-Muse.mp3",
        },
        {
            id: 15,
            title: "You Are The Sunshine Of My Life",
            artist: "Stevie Wonder",
            album: "Talking Book",
            year: "1972",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Steven.gif",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/You%20Are%20The%20Sunshine%20Of%20My%20Life-Stevie%20Wonder.mp3",
        },
        {
            id: 16,
            title: "Oops",
            artist: "Louis Armstrong, Ella Fitzgerald",
            album: "Ella and Louis",
            year: "1952",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/luysi.gif",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Oops-Louis%20Armstrong%2CElla%20Fitzgerald.mp3",
        },
        {
            id: 17,
            title: "Lonesome Cowboy Bill",
            artist: "The Velvet Underground",
            album: "Loaded",
            year: "1969",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/cowboy.gif",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Lonesome%20Cowboy%20Bill-The%20Velvet%20Underground.mp3",
        },
        {
            id: 18,
            title: "A Whiter Shade Of Pale",
            artist: "Procol Harum",
            album: "",
            year: "",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/a%20wh.jpg",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/A%20Whiter%20Shade%20Of%20Pale-Procol%20Harum.mp3",
        },
        {
            id: 19,
            title: "Alcohol",
            artist: "The Kinks",
            album: "",
            year: "",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/AK.jpg",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Alcohol-The%20Kinks.mp3",
        },
        {
            id: 20,
            title: "Keep Yourself Alive",
            artist: "Queen",
            album: "",
            year: "",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/QUEEN.gif",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Keep%20Yourself%20Alive-Queen.mp3",
        },
        {
            id: 21,
            title: "Roundabout",
            artist: "Yes",
            album: "",
            year: "",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/RB.gif",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Roundabout%202008%20Remaster-Yes.mp3",
        },
        {
            id: 22,
            title: "Here Comes The Sun",
            artist: "The Beatles",
            album: "",
            year: "",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/aibilu.jpg",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Here%20Comes%20The%20Sun%20Remastered-The%20Beatles.mp3",
        },
        {
            id: 23,
            title: "Velvet Goldmine",
            artist: "David Bowie",
            album: "",
            year: "",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/vegl.gif",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Velvet%20Goldmine-David%20Bowie.mp3",
        },
        {
            id: 24,
            title: "Another One Bites The Dust",
            artist: "Queen",
            album: "",
            year: "",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/bite.jpg",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Another%20One%20Bites%20The%20Dust-Queen.mp3",
        },
        {
            id: 25,
            title: "Book of Saturday",
            artist: "King Crimson",
            album: "",
            year: "",
            image: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/kc.gif",
            music: "https://u696.oss-cn-hangzhou.aliyuncs.com/PE/Book%20of%20Saturday-King%20Crimson.mp3",
        },
    ];
    
    // DOM元素
    const audioElement = document.createElement('audio');
    const recordCover = document.getElementById('record-cover');
    const songTitle = document.getElementById('song-title');
    const songArtist = document.getElementById('song-artist');
    const songAlbum = document.getElementById('song-album');
    const progressBar = document.getElementById('progress-bar');
    const currentTime = document.getElementById('current-time');
    const totalTime = document.getElementById('total-time');
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const repeatBtn = document.getElementById('repeat-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const playlistElement = document.getElementById('playlist');
    const playlistCount = document.getElementById('playlist-count');
    
    



    // 状态变量
    let currentTrackIndex = 0;
    let isPlaying = false;
    let isShuffle = false;
    let repeatMode = 0; // 0: 不重复, 1: 单曲循环, 2: 列表循环
    
    // 将音频元素添加到文档中
    document.body.appendChild(audioElement);
    
    // 初始化播放器
    function initPlayer() {
        loadTrack(currentTrackIndex);
        renderPlaylist();
        setupEventListeners();
    }
    
    // 加载曲目
    function loadTrack(index) {
        if (index >= 0 && index < tracks.length) {
            const track = tracks[index];
            audioElement.src = track.music;
            recordCover.style.backgroundImage = `url(${track.image})`;
            songTitle.textContent = track.title;
            songArtist.textContent = track.artist;
            songAlbum.textContent = track.album ? `${track.album} (${track.year})` : track.year;
            currentTrackIndex = index;
            
            // 更新播放列表选中状态
            updatePlaylistSelection();
            
            // 如果之前是播放状态，则自动播放
            if (isPlaying) {
                audioElement.play();
            }
        }
    }
    
    // 渲染播放列表
    function renderPlaylist() {
        playlistElement.innerHTML = '';
        playlistCount.textContent = `${tracks.length} 首歌曲`;
        
        tracks.forEach((track, index) => {
            const listItem = document.createElement('li');
            listItem.className = `playlist-item p-3 rounded-lg hover:bg-white/10 cursor-pointer transition-all duration-300 flex items-center ${index === currentTrackIndex ? 'bg-primary/20 border-l-4 border-primary' : 'border-l-4 border-transparent'}`;
            listItem.innerHTML = `
                <div class="w-10 h-10 bg-cover bg-center rounded mr-4" style="background-image: url(${track.image})"></div>
                <div class="flex-1">
                    <div class="font-medium">${track.title}</div>
                    <div class="text-sm text-gray-400">${track.artist}</div>
                </div>
                <div class="text-gray-400">${index === currentTrackIndex ? '<i class="fa fa-play-circle text-primary"></i>' : ''}</div>
            `;
            
            listItem.addEventListener('click', () => {
                loadTrack(index);
                playAudio();
            });
            
            playlistElement.appendChild(listItem);
        });
    }
    
    // 更新播放列表选中状态
    function updatePlaylistSelection() {
        const playlistItems = document.querySelectorAll('.playlist-item');
        playlistItems.forEach((item, index) => {
            if (index === currentTrackIndex) {
                item.classList.add('bg-primary/20', 'border-primary');
                item.classList.remove('border-transparent');
                item.querySelector('div:last-child').innerHTML = '<i class="fa fa-play-circle text-primary"></i>';
            } else {
                item.classList.remove('bg-primary/20', 'border-primary');
                item.classList.add('border-transparent');
                item.querySelector('div:last-child').innerHTML = '';
            }
        });
    }
    
    // 播放音频
    function playAudio() {
        audioElement.play()
            .then(() => {
                isPlaying = true;
                updatePlayButton();
                recordCover.classList.remove('paused');
            })
            .catch(error => {
                console.error("播放失败:", error);
                alert("播放失败，请检查音频链接是否有效");
            });
    }
    
    // 暂停音频
    function pauseAudio() {
        audioElement.pause();
        isPlaying = false;
        updatePlayButton();
        recordCover.classList.add('paused');
    }
    
    // 更新播放按钮状态
    function updatePlayButton() {
        if (isPlaying) {
            playBtn.innerHTML = '<i class="fa fa-pause text-2xl text-white"></i>';
        } else {
            playBtn.innerHTML = '<i class="fa fa-play text-2xl text-white"></i>';
        }
    }
    
    // 格式化时间
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    
    // 更新进度条
    function updateProgress() {
        const duration = audioElement.duration;
        const currentTimeValue = audioElement.currentTime;
        
        if (duration) {
            const progressPercent = (currentTimeValue / duration) * 100;
            progressBar.style.width = `${progressPercent}%`;
            currentTime.textContent = formatTime(currentTimeValue);
            totalTime.textContent = formatTime(duration);
        }
    }
    
    // 设置事件监听器
    function setupEventListeners() {
        // 播放/暂停按钮
        playBtn.addEventListener('click', () => {
            if (isPlaying) {
                pauseAudio();
            } else {
                playAudio();
            }
        });
        
        // 上一曲按钮
        prevBtn.addEventListener('click', () => {
            if (isShuffle) {
                // 随机选择上一首
                let randomIndex;
                do {
                    randomIndex = Math.floor(Math.random() * tracks.length);
                } while (randomIndex === currentTrackIndex);
                loadTrack(randomIndex);
            } else {
                // 顺序选择上一首
                currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
                loadTrack(currentTrackIndex);
            }
            playAudio();
        });
        
        // 下一曲按钮
        nextBtn.addEventListener('click', () => {
            if (isShuffle) {
                // 随机选择下一首
                let randomIndex;
                do {
                    randomIndex = Math.floor(Math.random() * tracks.length);
                } while (randomIndex === currentTrackIndex);
                loadTrack(randomIndex);
            } else {
                // 顺序选择下一首
                currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
                loadTrack(currentTrackIndex);
            }
            playAudio();
        });
        
        // 随机播放按钮
        shuffleBtn.addEventListener('click', () => {
            isShuffle = !isShuffle;
            shuffleBtn.classList.toggle('text-primary', isShuffle);
            shuffleBtn.classList.toggle('text-gray-400', !isShuffle);
        });
        
        // 重复播放按钮
        repeatBtn.addEventListener('click', () => {
            repeatMode = (repeatMode + 1) % 3;
            
            // 更新按钮样式
            if (repeatMode === 0) {
                // 不重复
                repeatBtn.innerHTML = '<i class="fa fa-repeat text-xl"></i>';
                repeatBtn.classList.remove('text-primary');
                repeatBtn.classList.add('text-gray-400');
            } else if (repeatMode === 1) {
                // 单曲循环
                repeatBtn.innerHTML = '<i class="fa fa-repeat text-xl"></i>';
                repeatBtn.classList.remove('text-gray-400');
                repeatBtn.classList.add('text-primary');
            } else {
                // 列表循环
                repeatBtn.innerHTML = '<i class="fa fa-repeat text-xl"></i><span class="absolute text-[10px] ml-1">all</span>';
                repeatBtn.classList.remove('text-gray-400');
                repeatBtn.classList.add('text-primary');
            }
        });
        
        // 音量控制
        volumeSlider.addEventListener('input', () => {
            audioElement.volume = volumeSlider.value;
        });
        
        // 音频进度更新
        audioElement.addEventListener('timeupdate', updateProgress);
        
        // 音频结束处理
        audioElement.addEventListener('ended', () => {
            if (repeatMode === 1) {
                // 单曲循环
                audioElement.currentTime = 0;
                audioElement.play();
            } else if (repeatMode === 2) {
                // 列表循环
                currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
                loadTrack(currentTrackIndex);
                audioElement.play();
            } else {
                // 不重复，停止播放
                pauseAudio();
                audioElement.currentTime = 0;
            }
        });
        
        // 音频元数据加载完成
        audioElement.addEventListener('loadedmetadata', updateProgress);
        
        // 点击进度条跳转
        progressBar.parentElement.addEventListener('click', (e) => {
            const progressBarRect = progressBar.parentElement.getBoundingClientRect();
            const clickPosition = e.clientX - progressBarRect.left;
            const progressPercent = clickPosition / progressBarRect.width;
            audioElement.currentTime = progressPercent * audioElement.duration;
        });
    }
    
    // 初始化播放器
    initPlayer();
});