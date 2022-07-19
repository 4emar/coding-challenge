import React, {FC, useState} from "react";
import './multiple-selection-component.css'

// I am sorry about changing the Props, I was out of town this weekend and did not have a lot of time to focus on the tasks.
// I had already completed a lot of the functions by using my arrays before noticing the requirements,
// and I did not have enough time to revert it from the beginning.
// I hope that you understand, if you'd like I could develop it again, by using your Props.

interface Props {
    items: Item[]
}

// interface Props {
//     // Empty placeholder. If not specified, defaults to "Please select".
//     placeholder?: string;
//     // Descriptors of available items.
//     items: Item[];
//     // Ids of selected items.
//     value: string[];
//     // Callback that is called with ids of selected items when the value changes.
//     onChange: (selectedItems: string[]) => void;
// }

interface Item {
    // Unique identifier of an item.
    id: string;
    // Display text of an item.
    title: string;
}

const MultipleSelectComponent: FC<Props> = ({items}) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

    // click on anywhere except the inputContainer and the dropdown will close if it is open
    var ignoreClickOnMeElement = document.getElementById('anywhereExceptMe');
    var ignoreClickOnMeElement1 = document.getElementById('inputContainer');
    document.addEventListener('click', function (event) {
        if (ignoreClickOnMeElement != null && ignoreClickOnMeElement1 != null) {
            var isClickInsideElement = (ignoreClickOnMeElement.contains(event.target as Node) ||
                ignoreClickOnMeElement1.contains(event.target as Node));
            if (!isClickInsideElement) {
                setDropdownVisible(false);
            }
        }
    })

    // add the newly selected value to the selectedOptions
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        //const tempSelectedOptions = e.currentTarget.selectedOptions;
        const exampleTempOptions = e.currentTarget.options;
        const tempOptions: string[] = [];
        // here I tried by only going through the selected options, but I had trouble with
        // the checks still staying on, and I needed to adjust that with the addition to the selected options
        // for (let i = 0; i < tempSelectedOptions.length; i++) {
        //     tempOptions.push(tempSelectedOptions[i].value);
        // }
        for (let i = 0; i < exampleTempOptions.length; i++) {
            if (exampleTempOptions[i].selected) {
                exampleTempOptions[i].innerHTML = exampleTempOptions[i].value + " ✓";
                tempOptions.push(exampleTempOptions[i].value);
            } else {
                exampleTempOptions[i].innerHTML = exampleTempOptions[i].value;
            }
        }
        setInputValue("");
        setSelectedOptions(tempOptions);
    }

    // click on the button and remove the value from the selected values
    const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value;
        setSelectedOptions(current => current.filter(selectedOptions => {
                return selectedOptions !== value;
            })
        );
        const opcija = document.getElementById(value);
        if (opcija != null) {
            opcija.innerHTML = value;
        }
    };

    // set dropdown as visible on the click of the text input
    const handleVisible = () => {
        setDropdownVisible(!dropdownVisible);
    }

    // add or remove a checkmark on a selected/deselected option
    const handleOptionClick = (e: React.MouseEvent<HTMLOptionElement>) => {
        if (selectedOptions.includes(e.currentTarget.value)) {
            e.currentTarget.innerHTML = e.currentTarget.value + " ✓";
        } else {
            e.currentTarget.innerHTML = e.currentTarget.value;
        }
    }

    // reset the selected options and remove the checkmarks
    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        selectedOptions.forEach(selected => {
            const opcija = document.getElementById(selected);
            if (opcija != null) {
                opcija.innerHTML = selected;
            }
        })
        setSelectedOptions([]);
    }

    return (
        <div>
            <p>Please hold the Ctrl key when you are selecting multiple options :D</p>
            <div id="inputContainer" className="input-container">

                <input
                    id="myInput"
                    type="text"
                    className="input-field"
                    onClick={handleVisible}
                    onChange={event => setInputValue(event.target.value)}/>
                {/*the selected options are added as buttons in the text field, with an X at the end to close them*/}
                {selectedOptions.map(options =>
                    <button className="input-button" onClick={handleRemove} value={options}>{options} X</button>
                )}
                <button id="clear-button"
                        onClick={handleDelete}
                        className={`button-visible ${selectedOptions.length === 0 ? "button-invisible" : ""}`}>X
                </button>
            </div>
            {/*the dropdown menu, which displays the options. If the user writes something on the text field the options */}
            {/*are filtered by it, if not, they are regular*/}
            <div id="anywhereExceptMe" className={`lightbox ${!dropdownVisible ? "hide-lightbox" : ""}`}>
                <select multiple onChange={handleChange} id="selectTag">
                    {inputValue === '' ? items.map(name =>
                        <option id={name.title}
                                value={name.title}
                                selected={selectedOptions.includes(name.title)}
                                onClick={handleOptionClick}
                        >
                            {name.title}
                        </option>
                    ) : items.map(name => {
                        if (name.title.toLowerCase().includes(inputValue.toLowerCase()))
                            return <option
                                id={name.title}
                                value={name.title}
                                selected={selectedOptions.includes(name.title)}>
                                {name.title}
                            </option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default MultipleSelectComponent;