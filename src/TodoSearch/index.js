import React from 'react';
import { TodoContext } from '../todoContext';
import './TodoSearch.css';

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  //
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value); //para actualizar
  };

  return [
    <input
      className="TodoSearch"
      placeholder="Add your task"
      value={searchValue}
      onChange={onSearchValueChange}  //para conectar la funcion con el evento
    />,
    <p>{searchValue}</p>
  ];
}

export { TodoSearch };