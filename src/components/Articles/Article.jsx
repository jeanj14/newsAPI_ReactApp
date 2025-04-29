import ArticleContent from "./ArticleContent";

function Article(props){
    const category = props.category;
    const type = props.type;
    return <div className={`article-${type} flex flex-col justify-center`}>
        <ArticleContent type={type} category={category} />
    </div>
}

export default Article;