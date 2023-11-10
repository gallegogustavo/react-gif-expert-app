import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  {/* en los parámetros siempre se recibe el event y el target, es el método desestrcuturado*/}
  const onInputChange = ({ target }) => {
    setInputValue( target.value );  
  }

  const onSubmit = ( event ) => {
    event.preventDefault(); {/*evita el reload de toada la página al presiona enter */}
    if ( inputValue.trim().length <= 1) return;

    //setCategories( categories => [ inputValue, ...categories ] );
    onNewCategory( inputValue.trim() );
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit } aria-label='form'>
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form> 
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}