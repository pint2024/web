import React, { useState, useRef, useEffect } from "react";


export const MultiSelectBox = ({ options, onChange }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleOptionToggle = (option) => {
        const isSelected = selectedOptions.includes(option);
        let newSelectedOptions;

        if (isSelected) {
            newSelectedOptions = selectedOptions.filter((item) => item !== option);
        } else {
            newSelectedOptions = [...selectedOptions, option];
        }

        setSelectedOptions(newSelectedOptions);
        onChange(newSelectedOptions);
    };

    useEffect(() => {
        const dropdown = dropdownRef.current;
        if (dropdown) {
            const dropdownRect = dropdown.getBoundingClientRect();
            const footerRect = document.querySelector('footer').getBoundingClientRect();

            if (dropdownRect.bottom > footerRect.top) {
                dropdown.classList.add('dropup');
            } else {
                dropdown.classList.remove('dropup');
            }
        }
    }, [isOpen]);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOptions.length > 0 ? `${selectedOptions.length} selecionadas` : "Selecione"}
            </button>
            <div className={`dropdown-menu${isOpen ? " show" : ""}`} aria-labelledby="dropdownMenuButton" style={{ maxHeight: "115px", overflowY: "auto" }}>
                {options.map((option, index) => (
                    <div key={index} className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={option}
                            id={`option-${index}`}
                            checked={selectedOptions.includes(option)}
                            onChange={() => handleOptionToggle(option)}
                        />
                        <label className="form-check-label" htmlFor={`option-${index}`}>
                            {option}
                        </label>
                    </div>
                ))}
            </div>

        </div>
    );
};
