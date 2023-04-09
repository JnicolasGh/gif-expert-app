import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch Man', 'Dragon Ball' ]);

    const onAddCategory = (newCategory) => {

      if( categories.includes(newCategory) ) return;

      setCategories( [ newCategory, ...categories ] );
      
    };

  return (
    <>
        {/* titulo */}
        <h1>Gif Expert App</h1>
        {/* selector */}
        <div className='divslector'>
          <form action="" className='radioselector'>
            <label htmlFor="">Gif</label>
            <input type="radio" name="gif_sticker" id="" className='radio'/>
            <label htmlFor="">Sticker</label>
            <input type="radio" name="gif_sticker" id="" className='radio'/>
          </form>
        </div>
        {/* input */}
        <AddCategory 
          onNewCategory={ (event) => onAddCategory(event) }
        />
        <p className='line'></p>
        {/* listado de gif */}
        { categories.map( (category) => (
          <GifGrid key={ category }
          category={ category }/>
        ))}
    </>
  )
};