function ArticleContent(props){
    return <div className="px-5 pb-2.5 flex flex-col">
        <p className="text-sm">ArticleGenre</p>
        <h1 className={`title-${props.type} max-w-full truncate`}>Article Title</h1>
        <p>Article Author - Time Published</p>
    </div>
}

export default ArticleContent;