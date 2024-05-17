import React, { useState, useEffect } from "react";
import Langues from "./Langues";
import { useNavigate } from "react-router-dom";
import {Button, Card, Image, Container } from "semantic-ui-react";

const topLanguages = [
    { code: "spa", name: "Spanish" },
    { code: "eng", name: "English" },
    { code: "hin", name: "Hindi" },
    { code: "ara", name: "Arabic" },
    { code: "ben", name: "Bengali" },
    { code: "por", name: "Portuguese" },
    { code: "rus", name: "Russian" },
    { code: "jpn", name: "Japanese" },
    { code: "pan", name: "Punjabi" },
    { code: "fra", name: "Francais" }

];

const DisplayLangues = () => {
    const [langues, setLangues] = useState([])
    const [selectedLangues, setSelectedLangues] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        setLangues(topLanguages)
    }, []);

    const handleCheckboxChange = (languageCode) => {
        if (selectedLangues.includes(languageCode)) {
            setSelectedLangues(selectedLangues.filter(lang => lang !== languageCode))
        } else {
            setSelectedLangues([...selectedLangues, languageCode])
        }
    }

    const handleFiltrerClick = async () => {
        try {
            const selectedCountries = []
            const response = await fetch("https://restcountries.com/v3.1/all")
            const data = await response.json()
            data.forEach(country => {
                const countryLanguages = Object.keys(country.languages || {})
                if (selectedLangues.some(lang => countryLanguages.includes(lang))) {
                    selectedCountries.push(country)
                }
            })

            setFilteredCountries(selectedCountries)
        } catch (error) {
            console.error("Erreur lors du filtrage des pays:", error)
        }
    }

    const renderFilteredCountries = () => {
        return (
            
            <Container style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", width: "100%" }}>

                {filteredCountries.map(country => (
                    <Card key={country.cca3} onClick={() => navigate(`/pays/${country.cca3}`)}>
                        <Image src={country.flags.png} />
                        <Card.Content>
                            <Card.Header>{country.name.common}</Card.Header>
                        </Card.Content>
                    </Card>
                ))}
            </Container>
        );
    };

    return (
        <div>
            <Button onClick={()=> navigate(-1)}> Page précédente</Button> 
            <Button onClick={()=>navigate(1)}> Page suivante</Button> 
            <h1>Les langues les plus parlées au monde!</h1>
            <Langues
                langues={langues}
                selectedLangues={selectedLangues}
                handleCheckboxChange={handleCheckboxChange}
            />
            <button onClick={handleFiltrerClick}>Filtrer</button>
            <h2>Pays parlant les langues sélectionnées du filtrage :</h2>
            {filteredCountries.length > 0 && renderFilteredCountries()}
        </div>
    )
}

export default DisplayLangues