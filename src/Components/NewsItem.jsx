import image from '../assets/newsimg.jpeg'

const NewsItem = ({ title, description, src, url }) => {
  if (!title?.trim() || !description?.trim() || !url?.trim()) {
    return null;
  }

  return (
    <div
      className="card bg-dark text-light mb-3 my-2 mx-2"
      style={{ width: "100%", maxWidth: "345px", overflow: "hidden" }}
    >
      <img
        src={src || image}
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
        className="card-img-top"
        alt={title || "news image"}
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description.slice(0, 90)}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
