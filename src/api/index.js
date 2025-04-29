import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const NEWS_API_URL = `https://newsapi.org/v2`

const categories = ["business", "technology", "sports"];

const getNews = async (category) => {
  try {
    const response = await axios.get(`${NEWS_API_URL}/top-headlines?category=${category}&apiKey=${API_KEY}`);
    const data = response.data;
    const articles = data.articles;
    return articles.map( (article) => ({...article, category}) );
  } catch (error) {
    return error
  }
}

export { getNews }