
export const GifItem = ({ title, url, id }) => {

  return (
    <div className='card'>
        <img src={url} alt={title} />
        <p>{ title }</p>
        <button onClick={() => {navigator.clipboard.writeText(url)}}>Copy</button>
    </div>
  )
}
