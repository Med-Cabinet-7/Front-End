import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialStrainList = {
  strain: ""
}

const StrainsList = ({ strains, history, updateStrains }) => {
  console.log(strains);
  const [editing, setEditing] = useState(false);
  const [strainToEdit, setstrainToEdit] = useState(initialStrain);

  const editStrain = strain => {
    setEditing(true);
    setStrainToEdit(strain);
  };

  const saveEdit = e => {
    // e.preventDefault()
    axiosWithAuth()

    // .put(add url here, strainToEdit)
    .then(res => {
      // history.push(“/dashboard”)
    })
    .catch(err => console.log(“sorry, something went wrong”, err))
  };

  const deleteStrain = strain=> {
    axiosWithAuth()
    .delete(add url here}, strain)
    .then(res => {
      console.log(“response from .delete”, res)
      // history.push(“/dashboard”)
      document.location.reload(true)
    })


    .catch(err => console.log(“sorry, something went wrong”, err))
  };
  return (
    <div className=“strain-wrap”>
      <p>strains</p>
      <ul>
        {strain.map(color => (
          <li key={strain.strain} onClick={() => editStrain(strain)}>
            <span>
              <span className=“delete” onClick={e => {
                    e.stopPropagation();
                    deleteStrain(strain)
                  }
                }>
                  x
              </span>{” “}
              {strain.strain}
            </span>
            <div
              className=“strain-box”
              style={{ backgroundColor: green }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit strain</legend>
          <label>
            strain name:
            <input
              onChange={e =>
                setStarinToEdit({ ...strainToEdit, strain: e.target.value })
              }
              value={strainToEdit.strain}
            />
          </label>


          <div className=“button-row”>
            <button type=“submit”>save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className=“spacer” />
    </div>
  );
};

export default StrainList;
