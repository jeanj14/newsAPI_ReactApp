import NewsAPI from "newsapi";
import "dotenv/config";


const API_KEY = process.env.API_KEY;
const newsapi = new NewsAPI(API_KEY);

async function getData(query, category) {
    const response = await newsapi.v2.topHeadlines({
        q: `${query}`,
        category: `${category}`,
        language: 'en',
        country: 'us',
        sortBy: 'publishedAt'
      })
      const articles = response.articles
    return articles;
}
// const topTrending = await getData('', 'general')
const topTech = await getData('', 'technology')
const topEntertainment = await getData('', 'entertainment')
const topSports = await getData('', 'sports')

export { topTech, topEntertainment, topSports }

