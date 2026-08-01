import style from "./Filter.module.css"

function Filter({ filter, handleFilter }) {
  return (
    <div className={style.filter}>
      <label htmlFor="filter">Find contacts by name: </label>
      <input type="text" id="filter" name="filter" value={filter} onChange={handleFilter} placeholder="Enter name to find" className={style.input}/>
    </div>
    
  );
}

export default Filter;
