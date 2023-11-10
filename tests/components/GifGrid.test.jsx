import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('pruebas en <GifGrid />', () => {

  const category = 'Batman';  
  
  test('debe mostrar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render( <GifGrid category={ category } /> );
    expect( screen.getByText( 'Cargando...' ) );
    expect( screen.getByText( category ) );

  })

  test('debe mostrar items cuando se cargan las imágenes desde useFetchGifs', () => {

    const gifs = [
      {
        id: 'id001',
        title: 'mordecai',
        url: 'https://localhost/mordecai.jpg'
      },
      {
        id: 'id002',
        title: 'rigby',
        url: 'https://localhost/rigby.jpg'
      },
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render( <GifGrid category={ category } /> );
    expect( screen.getAllByRole('img').length ).toBe( 2 );

  })

})