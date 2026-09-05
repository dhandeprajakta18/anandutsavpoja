export type MediaArticle = {
  id: string;
  publication: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  url: string;
};

export const mediaArticles: MediaArticle[] =
  [
    {
      id: "toi-old-world-bengal",

      publication: "Times of India",

      category: "Featured",

      date: "October 12, 2023",

      title:
        "Mumbai's only all-women Durga Puja ‘Ananda Utsav’ to recreate the magic of old-world Bengal",

      excerpt:
        "Ananda Utsav was featured for its women-led Durga Puja and its effort to recreate the nostalgia, traditions and cultural richness of old-world Bengal in Mumbai.",

      image: "/real/media1.jpeg",

      url: "https://timesofindia.indiatimes.com/city/mumbai/mumbais-only-all-women-durga-puja-ananda-utsav-to-recreate-the-magic-of-old-world-bengal/articleshow/104358648.cms",
    },

    {
      id: "toi-rituparna-sengupta",

      publication: "Times of India",

      category: "Media Spotlight",

      date: "October 12, 2023",

      title:
        "Rituparna Sengupta to celebrate Durga Puja with Mumbai's all-women team Ananda Utsav",

      excerpt:
        "The Times of India highlighted Ananda Utsav's all-women team and Rituparna Sengupta's participation as guest of honour during the Puja celebrations.",

      image: "/real/media2.jpeg",

      url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/rituparna-sengupta-to-celebrate-durga-puja-with-mumbais-all-women-team-ananda-utsav/articleshow/104358975.cms",
    },
  ];

/*
 * Automatically remove duplicate URLs.
 */
export const uniqueMediaArticles =
  mediaArticles.filter(
    (article, index, array) =>
      index ===
      array.findIndex(
        (item) =>
          item.url.trim() ===
          article.url.trim()
      )
  );