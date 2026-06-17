import { useEffect } from "react";
import NewsItem from "./NewsItem";
import React, {useState} from "react";

const NewsBoard = ({category}) => {

        const [articles,setArticles] = useState([]);
        useEffect(()=>{
            let url = "";
            if (import.meta.env.DEV) {
              url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
            } else {
              url = `/api/news?category=${category}`;
            }

            fetch(url)
              .then(response=> response.json())
              .then(data=> {
                if (data && data.articles) {
                  setArticles(data.articles);
                } else {
                  console.error("API error or missing articles:", data);
                  setArticles([]);
                }
              })
              .catch(err => {
                console.error("Fetch error:", err);
                setArticles([]);
              });

        },[category])

    return(
      <div>
        <h2 className="text-center">
            Latest <span className="badge bg-danger">News</span>            
        </h2>
        <div className="d-flex flex-wrap justify-content-center">
          {articles.filter(news => news.title && news.description && news.url).map((news, index)=>(
            <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />      
          ))}
        </div>
      </div>
    )
}
export default NewsBoard


