import Select from "react-select";
import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";
import { useState } from "react";
import CreatableSelect from "react-select/creatable";

const animatedComponent = makeAnimated();

const options = [
  {
    value: "chocolate",
    label: "Chocolate",
  },
  {
    value: "green",
    label: "Green",
  },
  {
    value: "cyan",
    label: "Cyan",
  },
  {
    value: "violet",
    label: "Violet",
  },
];

const styles = {
  control: (styles) => {
    return {
      ...styles,
      backgroundColor: "#eee0cb",
    };
  },
  option: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: "#eee0cb",
      color: data.value,
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: data.value,
    };
  },
  multiValueLabel: (styles) => {
    return {
      ...styles,
      color: "white",
    };
  },
  multiValueRemove: (styles) => {
    return {
      ...styles,
      backgroundColor: "orange",
      color: "red",
    };
  },
};

const App = () => {
  const [optionsColor, setOptionsColor] = useState(options);

  const loadOptions = (searchValue, callBack) => {
    setTimeout(() => {
      const filteredOptions = options.filter((option) =>
        option.label
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      );
      callBack(filteredOptions);
    }, 2000);
  };

  return (
    <div className="body">
      <h1>Control React Select</h1>
      <div className="selects">
        <Select
          isMulti
          closeMenuOnSelect={false}
          components={animatedComponent}
          defaultValue={[options[0], options[2]]}
          options={options}
        />
        <AsyncSelect
          isMulti
          defaultOptions
          closeMenuOnSelect={false}
          components={animatedComponent}
          loadOptions={loadOptions}
          styles={styles}
        />
        <CreatableSelect
          options={optionsColor}
          closeMenuOnSelect={false}
          onCreateOption={(inputValue) => {
            const newOption = {
              value: inputValue,
              label: inputValue.toUpperCase(),
              color: "gray",
            };
            setOptionsColor([...optionsColor, newOption]);
          }}
        />
      </div>
    </div>
  );
};

export default App;
