import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => { 

  const title = 'Titulo';
  const url = 'https://www.wikipedia.com';

  test('debe de hacer match con el sanpsho', () => {
     
    const { container } = render( <GifItem title={ title } url={ url } /> );
    //screen.debug();
    expect ( container ).toMatchSnapshot();
    
  })

  test('Debe mostrar el título en el componente', () => { 

      render( <GifItem title={ title } url={ url } /> );
      expect( screen.getByText( title )).toBeTruthy(); 

  })
   
  test('debe de mostrar la imagen con el url y el alt indicado', () => { 

    render( <GifItem title={ title } url={ url } /> );
    
    //expect ( screen.getAllByRole('img').src ).toBe( url );

    const { src, alt } = screen.getByRole('img');
    screen.debug();
    
    expect( alt ).toBe( alt );
    //expect( src ).toBe( url );

  })

})