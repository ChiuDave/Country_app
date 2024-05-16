import { useState } from "react"
import { Container, Label, Segment, Select } from "semantic-ui-react"

// choisir 1 affiche l'autre option jusqu'à summission qui affiche info du pays désiré
const RechercheForum = () => {

    const optionLangue = [
        {key: 'Français', text: 'Français', value: 'French'},
        {key: 'Anglais', text: 'Anglais', value: 'English'}
    ]

  
    const [optionPays, setOptionPays] = useState([])
    const [optionPaysVoisin, setOptionPaysVoisin] = useState([])
    const [resultat, setResultat] = useState() //si met vide affichage conditionnel s'affichera différement

  

    const onSelectLangue = (langue) => {
        console.log(langue)
        fetch(`https://restcountries.com/v3.1/lang/${langue}?fullText=true?fields=cca3,name,flags`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                const options = data.map(country => ({
                    key: country.cca3,
                    text: country.name.common,
                    value: country.cca3,
                  }));
                  setOptionPays(options);
            })
            .catch((erreur) => console.log(erreur))
    }

    const onSelectPays = (pays) => {
        console.log(pays);
        fetch(`https://restcountries.com/v3.1/alpha/${pays}?fields=cca3,name,flags,borders`)
            .then((response) => response.json())
            .then((data) => { 
                console.log(data);
                
                if (data.borders) {
                    const options = data.borders.map((country) => ({
                        key: country,
                        text: country,
                        value: country,
                    }));
                    setOptionPaysVoisin(options);
                } else {
                    console.log("Aucun pays voisin autour de ce pays");
                }
            })
            .catch((erreur) => console.log(erreur));
    }
    

    

    const onSelectPaysVoisin = (paysVoisin) => {
        fetch(`https://restcountries.com/v3.1/alpha/${paysVoisin}`)
            .then((response) => response.json())
            .then((data) => setResultat(data))
            .catch((erreur) => console.log(erreur))
    }

    console.log(optionPays.length)
    console.log(resultat)

    return(
        <div style={{ width: '300px', margin: 'auto', paddingTop: '50px' }}>
            <h1>Mini formulaire</h1>
            <form>
                <Container>
                    <div style={{marginTop: "30px"}}>
                        <Label>Langue à choisir: </Label>
                        <Select placeholder="Choisir la langue" options={optionLangue} onChange={(e,data) => onSelectLangue(data.value)}/>
                    </div>
                    {optionPays.length  > 0 ? 
                    <div style={{marginTop: "30px"}}>
                        <Label>Pays à choisir: </Label>
                        <Select placeholder="Choisir le pays" options={optionPays} onChange={(e,data) => onSelectPays(data.value)}/> 
                    </div>
                    :undefined}
                    {optionPaysVoisin.length  > 0 ?
                    <div style={{marginTop: "30px"}}>
                        <Label>Pays Voisin à choisir: </Label>
                        <Select placeholder="Choisir la pays voisins" options={optionPaysVoisin} onChange={(e,data) => onSelectPaysVoisin(data.value)}/>
                    </div>
                    :undefined}
                    <div>
                        {resultat && resultat.length > 0 && resultat[0] && (
                            <Container>
                            <h1>{resultat[0].name.common}</h1>
                            <Segment>{resultat[0].subregion}</Segment>
                            <img alt="drapeau" src={resultat[0].flags.png} style={{width: 130, border:"1px solid grey"}} />
                            <p>Population : {resultat[0].population} habitants</p>
                            <p>Latitude : {resultat[0].latlng[0]} - Longitude : {resultat[0].latlng[1]}</p>
                            </Container>
                
                    )}


                     </div>
            
                </Container>
            </form>
        </div>
    )
}

export default RechercheForum