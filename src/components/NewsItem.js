import React from 'react'

const NewsItem =(props)=> {
  
      let {title,description,imageUrl,url,author,publishedAt,source} = props;
    return (
        <div className="card" >
        <img className="card-img-top" src={imageUrl} alt = "pic"/>
        <div className="card-body">
          <h5 className="card-title">{title}...
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:"90%"}}>{source}</span>
          </h5>
          
          <p className="card-text">{description}...</p>
          <p className="card-text"><small class="text-muted">By {author?author:"Unknown"} on {new Date(publishedAt).toGMTString()} </small></p>
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    )
  
}

export default NewsItem