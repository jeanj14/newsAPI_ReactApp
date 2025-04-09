import ArticleContent from "./ArticleContent";

function Article(props){
    // const source = props.source;
    // console.log(source)
    // const category = props.category;
    // const sourceArticle = source[0];
    const type = props.type;
    return <div className={`article-${type} flex flex-col justify-end`}>
        <ArticleContent type={type} />
    </div>
}

export default Article;