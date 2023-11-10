import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('pruebas en <AddCategory />', () => { 

  test('debe cambiar el valor de la caja de texto', () => { 

    //se crea el sujeto de prueba
    render( <AddCategory onNewCategory={ () => {} } />);

    //se extrae el valor, en este caso el input
    const input = screen.getByRole('textbox');

    //se dispara el evento
    fireEvent.input( input, { target: { value: 'Homero' }} );

    //se valida lo que estamos esperando que suceda luego del evento
    expect( input.value ).toBe('Homero');

  })

  test('debe llamara onNewCategory si el input tiene un valor', () => {

    const inputValue = 'Mordecai y Rigby';

    //simula ser una función para ser utilizada como parámetro en métodos que necesitan fn 
    const onNewCategory = jest.fn();

    //se crea el sujeto de prueba
    //render( <AddCategory onNewCategory={ () => {} } />); test original
    render( <AddCategory onNewCategory={ onNewCategory } />);
    
    //se extrae el valor, en este caso el input
    const input = screen.getByRole('textbox');

    const form = screen.getByRole('form');

    //se dispara el evento -- se asigna valor a un input
    fireEvent.input( input, { target: { value: inputValue }} );

    //se dispara el submit del form
    fireEvent.submit( form );

    //se verifica que el input esté vacío loego del submit
    expect( input.value ).toBe('');
    
    //se verifican funcionamientos de funciones internas del componente
    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

  })

  test('no debe llamar el onNewCategory si el input está vacío', () => {

    //simula ser una función para ser utilizada como parámetro en métodos que necesitan fn 
    const onNewCategory = jest.fn();

    //se crea el sujeto de prueba
    render( <AddCategory onNewCategory={ onNewCategory } />);

    //se obtiene el formulario
    const form = screen.getByRole('form');

    //se dispara el submit del form
    fireEvent.submit( form );

    //si el input no tiene texto (no se le asignó nada), el método onNewCategory no debe ser ejecutado
    expect( onNewCategory ).toHaveBeenCalledTimes(0);
    //otro test para verificar lo mismo
    expect( onNewCategory ).not.toHaveBeenCalled();

  })
 
 })
