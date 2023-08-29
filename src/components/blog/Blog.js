import './Blog.css';
import BlogItem from './BlogItem';
import blog1image from '../../assets/images/post-1.jpg'
import blog2image from '../../assets/images/post-2.jpg'
import blog3image from '../../assets/images/post-3.jpg'

function Blog(){
    let BlogItems = [
        {
            BlogImg :blog1image,
            BlogTitle : 'Post title1',
            BlogText : '1-Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
            BlogAuthor : 'parastoo pourazizi',
            BlogTime : '5'

        },
        {
            BlogImg  :blog2image,
            BlogTitle : 'Post title2',
            BlogText : '2-Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
            BlogAuthor : 'narges pourazizi',
            BlogTime : '4',

        },
        {
            BlogImg  :blog3image,
            BlogTitle : 'Post title3',
            BlogText : '3-Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
            BlogAuthor : 'parastoo pourazizi',
            BlogTime : '6',

        },
        
    ]
    return(
        <section id="blog">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">BLOG</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
        <BlogItem  {...BlogItems[0]}/>
        <BlogItem {...BlogItems[1]}/>
        <BlogItem {...BlogItems[2]}/>
         
          
        </div>
      </div>
    </section>


    )
}

export default Blog