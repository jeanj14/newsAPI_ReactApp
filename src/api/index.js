import axios from "axios";
import { get } from "react-hook-form";

const API_KEY = import.meta.env.VITE_API_KEY;
const NEWS_API_URL = `https://newsapi.org/v2`

// array containing the categories for each article to be rendered
const categories = ["business", "technology", "sports"];

//function to fetch data from NewsAPI using axios
const getNews = async (category) => {
  try {
    const response = await axios.get(`${NEWS_API_URL}/top-headlines?category=${category}&apiKey=${API_KEY}`);
    const data = response.data;
    const articles = data.articles;
    return articles.map( (article) => ({...article, category}) ); //category is attached with map() to each news article to help
  } catch (error) {
    return error
  }
}

export default getNews;