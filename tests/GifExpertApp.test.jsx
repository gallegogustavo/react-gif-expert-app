import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {

  test('se debe verificar el input esté vacía al inicio', () => {

    render( <GifExpertApp />)
    
    //se extrae el valor, en este caso el input
    const input = screen.getByRole('textbox');

    //se valida lo que estamos esperando que suceda luego del evento
    expect( input.value ).toBe('');
  })

  test('se debe verificar el envío del form', () => {

    render( <GifExpertApp />);

    //se extrae el valor, en este caso el input
    const input = screen.getByRole('textbox');

    const form = screen.getByRole('form');

    //se dispara el evento -- se asigna valor a un input
    fireEvent.input( input, { target: { value: 'Homero' }} );

    //se dispara el submit del form
    fireEvent.submit( form );

    //se verifica que el input esté vacío loego del submit
    expect( input.value ).toBe('');
    screen.debug();

  })

  // test('se debe verificar el valor de onAddCategory', () => {

  //   render( <GifExpertApp />)

  // })

})