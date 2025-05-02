const API_KEY = import.meta.env.VITE_API_KEY;
const NEWS_API_URL = `https://api.currentsapi.services/v1/latest-news`

//function to fetch data from NewsAPI using axios
const getNews = async (category) => {
  try {
    // const response = await axios.get(`${NEWS_API_URL}/top-headlines?category=${category}&apiKey=${API_KEY}`);
    const response = await fetch(`${NEWS_API_URL}?category=${category}&apiKey=${API_KEY}`)
    const data = await response.json() 
    console.log(data);
    const articles = data.news;
    console.log(articles)

    if (!(articles)){
      console.error("No articles array returned:", data);
      return [];
    }

    return articles //category is attached with map() to each news article to help
  } catch (error) {
    console.error(`Fetch error : ${error}`)
    return []
  }
}

export default getNews  ;