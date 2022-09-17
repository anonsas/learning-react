import React, { useState } from 'react';

// text, select, checkbox - most used Inputs.
// radio - is very hard for react to control it state, so we write by ourselves.

function FormElements() {
  const [select, setSelect] = useState(2);
  const [checkBox, setCheckBox] = useState({ A: false, B: true, C: true, D: false });
  const [radio, setRadio] = useState({ A: false, B: false, C: true, D: false });

  const handleSubmit = () => {
    console.log(select);
    console.log(checkBox);
    console.log(radio);
  };

  const checkingCheckBoxes = (e) => {
    const value = e.target.value;
    setCheckBox((c) => ({ ...c, [value]: !c[value] }));
  };

  const checkingRadioBtn = (e) => {
    const value = e.target.value;
    const newRadioBtns = {};

    for (const r in radio) {
      newRadioBtns[r] = r === value;
    }

    setRadio(newRadioBtns);
    // setCb({A: v==='A', B: v==='B', C: v==='C', D: v==='D'});
  };

  return (
    <div>
      <h3>My Form</h3>
      <div className="form">
        {/* SELECT - INPUT */}
        <div className="input-select">
          <h5>Select your favorite animal:</h5>
          <select value={select} onChange={(e) => setSelect(e.target.value)}>
            <option value="1">Dog</option>
            <option value="2">Cat</option>
            <option value="3">Tiger</option>
            <option value="4">Dolphin</option>
          </select>
        </div>

        {/* CHECKBOX - INPUT */}
        <div className="input-checkbox">
          <h5>What are your favorite colors:</h5>
          <div className="checkbox-list">
            <input
              className="checkbox-input"
              type="checkbox"
              id="checkbox-1"
              value="A"
              // checked={checkBox.A}
              // onChange={checkingCheckBoxes}
              checked={radio.A}
              onChange={checkingRadioBtn}
            />
            <label htmlFor="checkbox-1">Red</label>
          </div>
          <div className="form-check m-4">
            <input
              className="checkbox-input"
              type="checkbox"
              id="checkbox-2"
              value="B"
              // checked={checkBox.B}
              // onChange={checkingCheckBoxes}
              checked={radio.B}
              onChange={checkingRadioBtn}
            />
            <label htmlFor="checkbox-2">Green</label>
          </div>
          <div className="form-check m-4">
            <input
              className="checkbox-input"
              type="checkbox"
              id="checkbox-3"
              value="C"
              // checked={checkBox.C}
              // onChange={checkingCheckBoxes}
              checked={radio.C}
              onChange={checkingRadioBtn}
            />
            <label htmlFor="checkbox-3">Blue</label>
          </div>
          <div className="form-check m-4">
            <input
              className="checkbox-input"
              type="checkbox"
              id="checkbox-4"
              value="D"
              // checked={checkBox.D}
              // onChange={checkingCheckBoxes}
              checked={radio.D}
              onChange={checkingRadioBtn}
              c
            />
            <label htmlFor="checkbox-4">Violet</label>
          </div>
        </div>
      </div>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default FormElements;
