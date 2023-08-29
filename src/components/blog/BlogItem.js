
function BlogItem({BlogImg ,BlogTitle , BlogText , BlogAuthor ,  BlogTime}){
    
    return(
        <div className="col-4">
            <div className="blog-box">
              <div className="blog-img">
                <img src={BlogImg} className="img-fluid" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{BlogTitle}</h3>
                <p className="blog-desc">
                 {BlogText}
                </p>
              </div>
              <div className="blog-footer">
                <div className="post-author">
                  <p className="author">{BlogAuthor}</p>
                </div>
                <div className="post-date">
                  <span className="bi bi-clock"></span> {BlogTime} min
                </div>
              </div>
            </div>
          </div>
    )
}
export default BlogItem