function ArticleContent(props){
    // const article = props.article;
    return <div className="px-5 pb-2.5 flex flex-col">
        <p className="text-sm">Article Genre</p>
            <h1 className={`title-${props.type} max-w-full truncate`}>Title</h1>
        <p>Author - Published At</p>
    </div>
}

export default ArticleContent;