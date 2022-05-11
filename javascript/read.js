Vue.createApp({
    data() {
      return {       
        gatherer: null,
      };
    },
    methods: {
      getMarkdownData()
      {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const nama_artikelnya = urlParams.get('gatherer');        
        var converter = new showdown.Converter();
        console.log(nama_artikelnya);
        axios
          .get(
            src="../konten/"+nama_artikelnya
          )
          .then((res) => {
            var html = converter.makeHtml(res.data);           
            this.gatherer = html;
            console.log(html);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    beforeMount() {
      this.getMarkdownData();
    },
  }).mount("#app");
