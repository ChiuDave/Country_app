import React from 'react'

const Langues = ({ langues, selectedLangues, handleCheckboxChange }) => {
    return (
        <div>
            {langues.map(langue => (
                <div key={langue.code}>
                    <input
                        type="checkbox"
                        id={langue.code}
                        value={langue.code}
                        checked={selectedLangues.includes(langue.code)}
                        onChange={() => handleCheckboxChange(langue.code)}
                    />
                    <label htmlFor={langue.code}>{langue.name}</label>
                </div>
            ))}
        </div>
    )
}

export default Langues
