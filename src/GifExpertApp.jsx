import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball', 'Kimetsu no Yaiba' ]);

    const onAddCategory = (newCategory) => {

      if( categories.includes(newCategory) ) return;

      setCategories( [ newCategory, ...categories ] );
      
    };

  return (
    <>
        {/* titulo */}
        <h1>Gif Expert App</h1>
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
        {/* gif item */}
    </>
  )
};
