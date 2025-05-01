import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const NEWS_API_URL = `https://newsapi.org/v2`

//function to fetch data from NewsAPI using axios
const getNews = async (category) => {
  try {
    // const response = await axios.get(`${NEWS_API_URL}/top-headlines?category=${category}&apiKey=${API_KEY}`);
    const response = await fetch(`${NEWS_API_URL}/top-headlines?category=${category}&apiKey=${API_KEY}`)
    const data = await response.json() 
    const articles = data.articles;
    console.log(articles)
    return articles //category is attached with map() to each news article to help
  } catch (error) {
    return error
  }
}

console.log(await getNews("business"))

export default getNews  ;