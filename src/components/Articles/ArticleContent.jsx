import { getNews } from "@api/index"
import { useQuery } from "@tanstack/react-query";
import placeholder from '@assets/placeholder.jpg'

function ArticleContent(props){
    const category = props.category;
    const { data, isLoading } = useQuery({
        queryKey: ["articles", category],
        queryFn: async () => {
            return getNews(category)
        }
    })
    if (isLoading){
        return <h1>LOADING....</h1>
    } 
    else {
        const randomIndex = Math.floor(Math.random() * data.length);
        const article = data[randomIndex];
        const author = article.author ?? article.source.name;
        const articleBg = article.urlToImage ?? placeholder;
        const publishedAt = article.publishedAt.slice(0, 10);
        const bgStyle = {
            backgroundImage: `url(${articleBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: `100%`

        };
        console.log(article);
        console.log(article.urlToImage);
        return <div className="flex flex-col justify-end" style={bgStyle} >
            <div className="bg-stone-950/50 mask-t-from-85% w-full pt-5 px-2.5">
            <p className="text-sm text-white z-0">{article.category}</p>
            <h1 className={`text-white title-${props.type} max-w-full truncate`}>{article.title}</h1>
        <p className="text-white">{author} - {publishedAt}</p>
            </div>
    </div>
    }
}

export default ArticleContent;