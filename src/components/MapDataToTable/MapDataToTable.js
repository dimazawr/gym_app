import React from "react";

export const MapDataToTable = (data) => {
  const table = data.map((day, index) => {
    // Splitting data to be able to use it separately, tableHeaders corespond to eg id: day 1 in program_data.js
    let [tableHeaders, ...rest] = Object.values(day);

    let exercisesData = rest.map((exercise, index) => {
      return (
        <tr key={index}>
          <td>{exercise}</td>
        </tr>
      );
    });

    return (
      <div className="col-sm" key={index}>
        <div className="table-responsive">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col" key={index}>
                  {tableHeaders}
                </th>
              </tr>
            </thead>
            <tbody>{exercisesData}</tbody>
          </table>
        </div>
      </div>
    );
  });

  return table;
};
