import React,{ useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News =(props)=> {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  //const [dependency,setDependency] = useState([]);
  
    //document.title = `${props.category}-NewsMonkey`
    // const updateData = async()=>{
    //   props.setProgress(10);
    //   let  url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7372176f06834084aba6cc946a53a17b&page=${page}&pageSize=${props.pageSize}`;
    //     let data = await fetch(url);
    //     props.setProgress(30);
    //     setLoading(true);
    //     let parsedData = await data.json()
    //     props.setProgress(70);
    //      console.log("ok");
    //     setArticle(parsedData.articles);
    //     setTotalResults(parsedData.totalResults);
    //     setLoading(false);
        
    //     props.setProgress(100);
    // }

    useEffect(() => {
      const updateData = async()=>{
        props.setProgress(10);
        let  url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7372176f06834084aba6cc946a53a17b&page=${page}&pageSize=${props.pageSize}`;
          let data = await fetch(url);
          props.setProgress(30);
          setLoading(true);
          let parsedData = await data.json()
          props.setProgress(70);
           console.log("ok");
          setArticle(parsedData.articles);
          setTotalResults(parsedData.totalResults);
          setLoading(false);
          
          props.setProgress(100);
      }
      updateData();
    });
    
    //  handlenext = async()=>{
      
    //   this.setState({page:this.state.page+1})
    //   this.updateData();
        
    // }
    // handleprev = async()=>{
    //   this.setState({page:this.state.page+1})
    //     this.updateData();
    // }
    const fetchMoreData = async() => {
        setPage(page+1);
        let  url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7372176f06834084aba6cc946a53a17b&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        setLoading(true);
        let parsedData = await data.json()
        // console.log(parsedData);
        setArticle(article.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    };
  
    return (
      <>
        <h1 className='my-3 text-center'>NewsMonkey - Top Headlines</h1>
        {loading && <Spinner/>}

        <InfiniteScroll
            dataLength={article.length} //This is important field to render the next data
            next={fetchMoreData}
            hasMore={article.length!==totalResults}
            loader={<Spinner/>}
            >
          <div className="container">
            <div className="row my-3">
              
              { article.map((element)=>{
                  
                  return <div className="col-lg-4" key={element.url}>  
                  <NewsItem  
                  title = {element.title?element.title.slice(0,45):"???"}
                  description = {element.description?element.description.slice(0,80):"???"}
                  imageUrl = {element.urlToImage}
                  url = {element.url} author = {element.author} publishedAt = {element.publishedAt}
                   source = {element.source.name} 
                  />
                </div>

              })}
              
              
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between my-3">
          <button disabled = {this.state.page<=1} type="button" onClick={this.handleprev} className="btn btn-dark">&laquo;Previous</button>
          <button disabled = {this.state.page>=Math.ceil(this.state.totalResults/props.pageSize)} type="button" onClick={this.handlenext} className="btn btn-dark">Next&raquo;</button>
        </div> */}
       
      </>
    )
      } 
News.defaultProps = {
  country : "in",
  pageSize : 8
}
News.propTypes = {
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}
export default News