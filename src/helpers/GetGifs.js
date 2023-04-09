
export const getGifs = async( category ) => {

    const api_key = "4TichSITUZxqoMvovjevg97w8FvcGr72&q";
    let limit = 15;
    let type = 'gifs';
    const url = `https://api.giphy.com/v1/${ type }/search?api_key=${ api_key }=${ category }&limit=${ limit }`;
    const resp = await fetch( url );
    const { data = [] } = await resp.json();
    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
    // console.log(gifs);
    return gifs;
}