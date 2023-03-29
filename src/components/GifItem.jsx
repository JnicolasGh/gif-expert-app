
export const GifItem = ({ title, url, id }) => {

  return (
    <div className="wrap">
      <div className="box">
        <div className="box-top">
          <img className="box-image" src={url} alt={title} />
          <div className="title-flex">
            <h3 className="box-title">{title}</h3>
          </div>
        </div>
        <a href="#" className="button" onClick={() => {navigator.clipboard.writeText(url)}}>Copy</a>
      </div>
    </div>
  )
}