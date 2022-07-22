let apiUrl = "http://myapi.tarisstyaningrum.xyz/index.php/";
Vue.createApp({
  data() {
    return {
      // Buat nge keep artikelnya yang bakal ke direct ke read.html
      article: [],
      portfoliouser: [],
      skill: [],

      // Navbar
      home_nav: 'Home',
      home_id: 'index.html',
      welcome: 'Selamat Datang',
      navig: [
        {
          nav: 'About',
          id: '#2'
        },
        {
          nav: 'Articles',
          id: '#3'
        },
        {
          nav: 'Book App (Coming soon!)',
          id: '#'
        },
      ],
      // End Navbar

      // Bagian Home 
      home: {
        mhs: 'Aku Mahasiswa di Universitas Ahmad Dahlan dengan jurusan Sistem Informasi.',
        nama: 'Taris Styaningrum',
        wave_nama: 'Taris',
        tx_1: '-Keep scrolling lads-'
      },
      // End bagian Home

      // Bagian About
      about: {
        judul: 'About',
        desc: 'This Is My Skill',
        skill: [
          {
            nama_s: 'Microsoft Word',
            kemp: 'Advance',
            color: '#31d200'
          },
          {
            nama_s: 'HTML',
            kemp: 'Advance',
            color: '#31d200'
          },
          {
            nama_s: 'Microsoft Power Point',
            kemp: 'Advance',
            color: '#31d200'
          },
          {
            nama_s: 'Node Js',
            kemp: 'Intermediate',
            color: '#d2d200'
          },
          {
            nama_s: 'CSS',
            kemp: 'Intermediate',
            color: '#d2d200'
          },
        ],
      },
      // End bagian About

      // Bagian Artikel
      artikel: {
        judul: 'Articles',
        desc: 'Here are some article for you.',
      },
      btn: 'Sinii..'
      // End bagian Artikel
    };
  },
  methods: {
    getArticle() {
      axios
        .get(apiUrl + "article/")
        .then((res) => {
          console.log(res.data); //melihat respon data pada console browser
          this.article = res.data; //memperbarui variabel article pada bagian data()
          this.getPortfolioUser();
          this.getSkill();
        })
        .catch((error) => {
          console.log(error); //melihat error jika pengambilan data adalah gagal
        });
    },
    getPortfolioUser() {
      axios
        .get(apiUrl + "portfoliouser/1")
        .then((res) => {
          console.log(res.data); //melihat respon data pada console browser
          this.portfoliouser = res.data; //memperbarui variabel portfoliouser pada bagian data()
        })
        .catch((error) => {
          console.log(error); //melihat error jika pengambilan data adalah gagal
        });
    },
    getSkill() {
      axios
        .get(apiUrl + "article/")
        .then((res) => {
          console.log(res.data); //melihat respon data pada console browser
          this.skill = res.data; //memperbarui variabel skill pada bagian data()
        })
        .catch((error) => {
          console.log(error); //melihat error jika pengambilan data adalah gagal
        });
    },
  },
  beforeMount() {
    this.getArticle() //eksekusi fungsi getArticles() pada bagian methods saat halaman terbuka
  },
}).mount("#app");
function muncul() {
  document.getElementById("sosmed").style.visibility = "visible";
  document.getElementById("isi").style.visibility = "visible";
  document.getElementById("isi").style.transitionDelay = "0s";
  document.getElementById("isi").style.transition = "0s";
}
function tutup() {
  document.getElementById("sosmed").style.visibility = "hidden";
  document.getElementById("isi").style.visibility = "hidden";
}

const vm = new Vue({
  el: ".isi",
  data: isidata
})

