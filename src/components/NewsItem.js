import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
      let {title,description,imageUrl,newsUrl,author,date}=this.props;
    return (

      <div>
          <div className="my-3">
          <div className="card" >
      <img src={!imageUrl?"https://techcrunch.com/wp-content/uploads/2022/05/GettyImages-1288604066.jpg?w=759":imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">

        <h5 className="card-title">{title} </h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
      </div>
      </div>
    </div>
    </div>
    )
  }
}

export default NewsItem