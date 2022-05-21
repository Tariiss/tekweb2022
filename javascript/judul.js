Vue.createApp({
    data() {
      return {
       
        // Untuk page index
        header: {
          nama: "Taris Styaningrum",
          des : {
            a: "Seorang Mahasiswa",
            b: "di Universitas Ahmad Dahlan",
          },
        },
        sosial: {
          ig: {
            url: "https://www.instagram.com/u.diama/",
          },
          git: {
            url: "https://github.com/wicahma",
          },
          fb: {
            url: "https://www.facebook.com/people/Teguh-Dwi-Cahya-Kusuma/100011516138101/",
          },
          tw: {
            url: "https://twitter.com/wicahma",
          },
        },
        // Akhir page index

      };
    },
    methods: { //tempat menambahkan fungsi-fungsi

    },
    beforeMount() { //fungsi yang dipanggil oleh vue sebelum mount terjadi
 //contoh fungsi dalam methods yang dipanggil saat halaman terbuka
      
    },
  }).mount("#app");