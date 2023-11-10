
import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';


describe('Pruebas en el hook useFetchGifs', () => {

  test('debe regresar el estado inical', () => {

    //se obtienen los resultados del hook
    const { result } = renderHook( () => useFetchGifs( 'Terminator' ) );
    //se desestructuran los objetos del result
    const { images, isLoading } = result.current;

    expect( images.length ).toBe(0);
    expect( isLoading ).toBeTruthy();

  })

  test('debe retornar un arreglo de imágenes y el isLoading en false', async() => {

    //se obtienen los resultados del hook
    const { result } = renderHook( () => useFetchGifs( 'Terminator' ) );

    //se espera hasta que el hook termine su proceso
    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan(0)
    );

    //se desestructuran los objetos del result
    const { images, isLoading } = result.current;

    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();
    
  })

})