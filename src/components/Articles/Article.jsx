import ArticleContent from "./ArticleContent";

function Article(props){
    const type = props.type;
    return <div className={`article-${type} flex flex-col justify-end`}>
        <ArticleContent type={type} />
    </div>
}

export default Article;