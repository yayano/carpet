import { useState } from "react";

const CarpetNumber = (props) => {
  const [inputField, setInputFields] = useState([
    { name: "", width: 0, height: 0 },
  ]);
  const handleInputOnchange = (event, index) => {
    let data = [...inputField];
    data[index][event.target.name] = event.target.value;
    data[index][name] = "carpet" + index;
    setInputFields(data);
  };
  const addFields = (event) => {
    event.preventDefault();
    let newField = { name: "", width: "", height: "" };
    setInputFields([...inputField, newField]);
  };
  const removeFields = (index) => {
    let data = [...inputField];
    // supprime 1 élément à partir de l'index index,
    data.splice(index, 1);
    setInputFields(data);
  };
  const submit = (event) => {
    event.preventDefault();
    let data = [...inputField];
    let spaceData = [...inputField];
    for (let i = 0; i < data.length; i++) {
      spaceData[i].space = data[i].width * data[i].height;
      spaceData[i].name = `carpet${i}`;
      spaceData[i].price = (spaceData[i].space / 100) * 500;
      spaceData[i].delay = Math.round(spaceData[i].space / 100 / 500) + 1;
    }
    props.getData(spaceData);
  };
  return (
    <div className="carpet-number">
      {inputField.map((input, index) => {
        return (
          <div className="input-field" key={index}>
            <h2>{(input.name = "carpet" + (index + 1))}</h2>
            <input
              type="Number"
              name="width"
              placeholder="width"
              value={input.width || ""}
              onChange={(event) => handleInputOnchange(event, index)}
            />
            <input
              type="Number"
              name="height"
              placeholder="height"
              value={input.height || ""}
              onChange={(event) => handleInputOnchange(event, index)}
            />
            <button
              onClick={() => removeFields(index)}
              style={{ background: "#da385d" }}
            >
              remove carpet
            </button>
          </div>
        );
      })}
      <button onClick={(event) => addFields(event)}>add carpet</button>
      <button onClick={(event) => submit(event)}>Submit</button>
    </div>
  );
};
export default CarpetNumber;
