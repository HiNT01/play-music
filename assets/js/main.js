const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
// songs
const songs = [
    {
        id : 1,
        name :'Tòng phu',
        singer : 'Keyo',
        path: 'https://mp3-320s1-m-zmp3.zmdcdn.me/a7d1d213ee53070d5e42/2981457658227013023?authen=exp=1663090670~acl=/a7d1d213ee53070d5e42/*~hmac=c93ff7255f4a1302057c7a09356e20ad',
        image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/d/f/9/b/df9b187a2b0e565ebe5b6bd60bdef622.jpg',
    },
    {
        id : 2,
        name :'Có mới nới cũ',
        singer : 'Hồ Gia Khánh',
        path: 'https://mp3-320s1-m-zmp3.zmdcdn.me/68b879d1d2953bcb6284/7547664757568591391?authen=exp=1663095179~acl=/68b879d1d2953bcb6284/*~hmac=31c4db93669578934ed627b23a2cf7cc',
        image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/covers/5/4/5494590f3c1ae2f14641fa5f1210273f_1446628910.jpg',
    },
    {
        id : 3,
        name : 'Vì Mẹ Anh Bắt Chia Tay',
        singer : 'Miu Lê,Karik,Châu Đăng Khoa',
        path : 'https://mp3-320s1-m-zmp3.zmdcdn.me/4b4738ffc1be28e071af/7827520592060731168?authen=exp=1663095645~acl=/4b4738ffc1be28e071af/*~hmac=2ad7023d4507050b00f4629daae3f0eb',
        image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/b/8/9/1b8958017b04a663eb8c093905dd4d85.jpg',
    },
    {
        id :4,
        name : 'Chạm Khẽ Tim Anh Một Chút Thôi',
        singer : 'Noo Phước Thịnh',
        path : 'https://mp3-320s1-m-zmp3.zmdcdn.me/789aa00a7b4e9210cb5f/2046322050105663264?authen=exp=1663095829~acl=/789aa00a7b4e9210cb5f/*~hmac=dbc23967164e1ae7429732319ad6b1e5',
        image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/covers/6/e/6e7b90d96728c9ce1b4c2a104d622784_1507799020.jpg',
    },
    {
        id :5,
        name : 'Đơn Giản Anh Yêu Em',
        singer : 'Hồ Quốc Việt',
        path : 'https://mp3-320s1-m-zmp3.zmdcdn.me/ccb46c97f2d31b8d42c2/2427900791140163851?authen=exp=1663095916~acl=/ccb46c97f2d31b8d42c2/*~hmac=bb6f9dedbbfee9da18acb653502881bd',
        image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/covers/3/9/396e93fdd9ea0bad184461ad774b36cb_1460001343.jpg',
    },
    {
        id :6,
        name : 'Anh Vẫn Ở Đây',
        singer : 'Thành Đạt',
        path : 'https://mp3-320s1-m-zmp3.zmdcdn.me/24b8546f5b2eb270eb3f/8561718733408043866?authen=exp=1663095871~acl=/24b8546f5b2eb270eb3f/*~hmac=a9ae4c1e7191fa887bcc646633dd0638',
        image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/c/7/0/f/c70f74a3da934d690f0c357cc2510a18.jpg',
    },
    {
        id :7,
        name : 'Ai Chung Tình Được Mãi',
        singer : 'Đinh Tùng Huy',
        path : 'https://mp3-320s1-m-zmp3.zmdcdn.me/32ce71c67f8796d9cf96/1664036726781689499?authen=exp=1663095696~acl=/32ce71c67f8796d9cf96/*~hmac=fc5faa9023674330384579a8576aa81e',
        image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/5/1/b/e/51be5970b57048f63d0159fc018b1dc3.jpg',
    },
    {
        id :8,
        name : 'Mashup Lỡ Duyên',
        singer : 'Rum,NIT',
        path : '',
        image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/3/2/a/3/32a35f4d26ee56366397c09953f6c269.jpg',
    },
    {
        id :9,
        name : 'Em Nào Có Tội',
        singer : 'Thương Võ',
        path : 'https://mp3-320s1-m-zmp3.zmdcdn.me/68245a5aab1c42421b0d/5478799007541370206?authen=exp=1663096129~acl=/68245a5aab1c42421b0d/*~hmac=1b3deabc9bfb3de53b98f76e16650258',
        image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/7/9/c/0/79c0fe52e37b8bbe8d7134c028b13551.jpg',
    },{
        id :10,
        name : 'Đánh Mất Em',
        singer : 'Quang Đăng Trần',
        path : 'https://mp3-320s1-m-zmp3.zmdcdn.me/9d2e24a56ce285bcdcf3/500599824594930489?authen=exp=1663096150~acl=/9d2e24a56ce285bcdcf3/*~hmac=fccd108432f4a2b944a454debf32d546',
        image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/8/3/6/9/83690ac46c2ba7cf46b153e6226c974d.jpg',
    },
    {
        id :11,
        name : 'Họ Yêu Ai Mất Rồi',
        singer : 'Doãn Hiếu',
        path : 'https://mp3-320s1-m-zmp3.zmdcdn.me/8274379ba5dc4c8215cd/8155373225261432034?authen=exp=1663096138~acl=/8274379ba5dc4c8215cd/*~hmac=7eaf1cb7497c78a1d82c6d913c9b0e20',
        image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/2/0/c/8/20c8208e735601981e8d3b85b3d4cacd.jpg',
    },
    {
        id :12,
        name : 'Người Từng Thương',
        singer : 'Chu Bin',
        path : 'https://mp3-320s1-m-zmp3.zmdcdn.me/213d895c5c18b546ec09/1238749108084686228?authen=exp=1663096223~acl=/213d895c5c18b546ec09/*~hmac=3e7d1e033746044ea04cade55e1b4489',
        image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/covers/b/a/baa1c140842272b7da210330113d5061_1515573121.jpg',
    }
]

const app = {
    
    currentIndex : 0,
    isPlaying : false,
    songs : [
        {
            id : 1,
            name :'Tòng phu',
            singer : 'Keyo',
            path: 'https://mp3-320s1-m-zmp3.zmdcdn.me/a7d1d213ee53070d5e42/2981457658227013023?authen=exp=1663090670~acl=/a7d1d213ee53070d5e42/*~hmac=c93ff7255f4a1302057c7a09356e20ad',
            image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/d/f/9/b/df9b187a2b0e565ebe5b6bd60bdef622.jpg',
        },
        {
            id : 2,
            name :'Có mới nới cũ',
            singer : 'Hồ Gia Khánh',
            path: 'https://mp3-320s1-m-zmp3.zmdcdn.me/68b879d1d2953bcb6284/7547664757568591391?authen=exp=1663095179~acl=/68b879d1d2953bcb6284/*~hmac=31c4db93669578934ed627b23a2cf7cc',
            image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/covers/5/4/5494590f3c1ae2f14641fa5f1210273f_1446628910.jpg',
        },
        {
            id : 3,
            name : 'Vì Mẹ Anh Bắt Chia Tay',
            singer : 'Miu Lê,Karik,Châu Đăng Khoa',
            path : 'https://mp3-320s1-m-zmp3.zmdcdn.me/4b4738ffc1be28e071af/7827520592060731168?authen=exp=1663095645~acl=/4b4738ffc1be28e071af/*~hmac=2ad7023d4507050b00f4629daae3f0eb',
            image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/b/8/9/1b8958017b04a663eb8c093905dd4d85.jpg',
        },
        {
            id :4,
            name : 'Chạm Khẽ Tim Anh Một Chút Thôi',
            singer : 'Noo Phước Thịnh',
            path : 'https://mp3-320s1-m-zmp3.zmdcdn.me/789aa00a7b4e9210cb5f/2046322050105663264?authen=exp=1663095829~acl=/789aa00a7b4e9210cb5f/*~hmac=dbc23967164e1ae7429732319ad6b1e5',
            image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/covers/6/e/6e7b90d96728c9ce1b4c2a104d622784_1507799020.jpg',
        },
        {
            id :5,
            name : 'Đơn Giản Anh Yêu Em',
            singer : 'Hồ Quốc Việt',
            path : 'https://mp3-320s1-m-zmp3.zmdcdn.me/ccb46c97f2d31b8d42c2/2427900791140163851?authen=exp=1663095916~acl=/ccb46c97f2d31b8d42c2/*~hmac=bb6f9dedbbfee9da18acb653502881bd',
            image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/covers/3/9/396e93fdd9ea0bad184461ad774b36cb_1460001343.jpg',
        },
        {
            id :6,
            name : 'Anh Vẫn Ở Đây',
            singer : 'Thành Đạt',
            path : 'https://mp3-320s1-m-zmp3.zmdcdn.me/24b8546f5b2eb270eb3f/8561718733408043866?authen=exp=1663095871~acl=/24b8546f5b2eb270eb3f/*~hmac=a9ae4c1e7191fa887bcc646633dd0638',
            image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/c/7/0/f/c70f74a3da934d690f0c357cc2510a18.jpg',
        },
        {
            id :7,
            name : 'Ai Chung Tình Được Mãi',
            singer : 'Đinh Tùng Huy',
            path : 'https://mp3-320s1-m-zmp3.zmdcdn.me/32ce71c67f8796d9cf96/1664036726781689499?authen=exp=1663095696~acl=/32ce71c67f8796d9cf96/*~hmac=fc5faa9023674330384579a8576aa81e',
            image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/5/1/b/e/51be5970b57048f63d0159fc018b1dc3.jpg',
        },
        {
            id :8,
            name : 'Mashup Lỡ Duyên',
            singer : 'Rum,NIT',
            path : '',
            image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/3/2/a/3/32a35f4d26ee56366397c09953f6c269.jpg',
        },
        {
            id :9,
            name : 'Em Nào Có Tội',
            singer : 'Thương Võ',
            path : 'https://mp3-320s1-m-zmp3.zmdcdn.me/68245a5aab1c42421b0d/5478799007541370206?authen=exp=1663096129~acl=/68245a5aab1c42421b0d/*~hmac=1b3deabc9bfb3de53b98f76e16650258',
            image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/7/9/c/0/79c0fe52e37b8bbe8d7134c028b13551.jpg',
        },{
            id :10,
            name : 'Đánh Mất Em',
            singer : 'Quang Đăng Trần',
            path : 'https://mp3-320s1-m-zmp3.zmdcdn.me/9d2e24a56ce285bcdcf3/500599824594930489?authen=exp=1663096150~acl=/9d2e24a56ce285bcdcf3/*~hmac=fccd108432f4a2b944a454debf32d546',
            image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/8/3/6/9/83690ac46c2ba7cf46b153e6226c974d.jpg',
        },
        {
            id :11,
            name : 'Họ Yêu Ai Mất Rồi',
            singer : 'Doãn Hiếu',
            path : 'https://mp3-320s1-m-zmp3.zmdcdn.me/8274379ba5dc4c8215cd/8155373225261432034?authen=exp=1663096138~acl=/8274379ba5dc4c8215cd/*~hmac=7eaf1cb7497c78a1d82c6d913c9b0e20',
            image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/2/0/c/8/20c8208e735601981e8d3b85b3d4cacd.jpg',
        },
        {
            id :12,
            name : 'Người Từng Thương',
            singer : 'Chu Bin',
            path : 'https://mp3-320s1-m-zmp3.zmdcdn.me/213d895c5c18b546ec09/1238749108084686228?authen=exp=1663096223~acl=/213d895c5c18b546ec09/*~hmac=3e7d1e033746044ea04cade55e1b4489',
            image : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/covers/b/a/baa1c140842272b7da210330113d5061_1515573121.jpg',
        }
    ,
],
    render : function () {
        const htmls = this.songs.map(song => {
            return `
            <div class="song">
            <div class="thumb" style="background-image: url(${song.image})">
            </div>
            <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
            </div>
            <div class="option">
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>
            `
        })
        $('.playlist').innerHTML = htmls.join('');
    },
    defineProperties : function () {
        Object.defineProperty(this,'currentSong',{
            get : function () {
                return this.songs[this.currentIndex]
            }
        })
    },
    loadCurrentSong : function () {
        $('#audio').src = this.currentSong.path
        $('.cd-thumb').style = 'background-image: url(' + this.currentSong.image + ')'
        $('header h2').textContent = this.currentSong.name
    }
    ,
    handleEvents : function () {
        const _this = this
        const cd = $('.cd')
        const cdWidth = cd.offsetWidth
        //xu ly scroll list
        document.onscroll = function () {
            const scroll = window.screenY || document.documentElement.scrollTop
            let newCdWidth = cdWidth - scroll
           if(newCdWidth < 0) {
            newCdWidth = 0;
           }
            cd.style.width = newCdWidth + 'px';
            cd.style.opacity = newCdWidth / cdWidth
        }
        // xu ly play
        const play = $('.btn-toggle-play')
        play.onclick = function () {
            if (_this.isPlaying) {
                $('#audio').pause()
            }else {
                $('#audio').play()
            }
        }
        // audio play
        $('#audio').onplay = function () {
            _this.isPlaying = true
            $('.player').classList.toggle('playing')
        }
        // audio pause
        $('#audio').onpause = function () {
            _this.isPlaying = false
            $('.player').classList.remove('playing')

        }

    },
    start : function () {
        // dinh nghia gia tri mac dinh
        this.defineProperties()
        // lang nghe va xu ly cac su kien dom events
        this.handleEvents()
        // tai thong tin bai hat dau tien vao ui khi chay ung dung
        this.loadCurrentSong()
        // hien thi ra danh sach cac bai hat
        this.render()
    }

}
app.start()