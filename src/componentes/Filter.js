import React from "react";

const Filter = ({ setFilter }) => {
  return (
    <div className="filter">
      <button onClick={() => setFilter("all")}>Todas</button>
      <button onClick={() => setFilter("active")}>Ativas</button>
      <button onClick={() => setFilter("completed")}>Concluídas</button>
    </div>
  );
};

export default Filter;