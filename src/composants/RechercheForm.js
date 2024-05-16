import { useState } from "react"
import { Button, Container, Label, Segment, Select } from "semantic-ui-react"

// choisir 1 affiche l'autre option jusqu'à summission qui affiche info du pays désiré
const RechercheForum = () => {

    const optionLangue = [
        {key: 'Français', text: 'Français', value: 'French'},
        {key: 'Anglais', text: 'Anglais', value: 'English'}
    ]

  
    const [optionPays, setOptionPays] = useState([])
    const [optionPaysVoisin, setOptionPaysVoisin] = useState([])
    const [resultat, setResultat] = useState([]) 
    const [erreur, setError] = useState()

  

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
                
                if (data.borders.length > 0) {
                    const options = data.borders.map((country) => ({
                        key: country,
                        text: country,
                        value: country,
                    }));
                    setError('')
                    setOptionPaysVoisin(options);
                } else {
                    setError('Aucun voisin disponible')
                }
            })
            .catch((erreur) => console.log(erreur));
    }
    

    

    const onSelectPaysVoisin = (paysVoisin) => {
        fetch(`https://restcountries.com/v3.1/alpha/${paysVoisin}`)
            .then((response) => response.json())
            .then((data) => setResultat(data) )
            .catch((erreur) => console.log(erreur))
    }

    const resetForm = () => {
        setOptionPays([]);
        setOptionPaysVoisin([]);
        setResultat([]);
    };


    return(
        <div style={{ width: '300px', margin: 'auto', paddingTop: '50px' }}>
            <h1>Mini formulaire</h1>
            <form>
                <Container style={{ border: '1px solid black', padding: '20px', borderRadius: '5px' }}>
                    <div style={{marginTop: "30px"}}>
                        <Label>Langue à choisir: </Label>
                        <Select placeholder="Choisir la langue" options={optionLangue} onChange={(e,data) => onSelectLangue(data.value)}/>
                    </div>
                    {optionPays.length  > 0 ? 
                    <div style={{marginTop: "30px"}}>
                        <Label>Pays à choisir: </Label><br />
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
                        {resultat.length > 0  ?
                            <Container>
                            <h1>{resultat[0].name.common}</h1>
                            <Segment>{resultat[0].subregion}</Segment>
                            <img alt="drapeau" src={resultat[0].flags.png} style={{width: 130, border:"1px solid grey"}} />
                            <p>Population : {resultat[0].population} habitants</p>
                            <p>Latitude : {resultat[0].latlng[0]} - Longitude : {resultat[0].latlng[1]}</p>
                            </Container>
                        :undefined}
                    
                        {erreur ? 
                            <div className="ui negative message">{erreur}</div>
                        :undefined}

                     </div>
                     <Button onClick={resetForm} style={{ marginTop: "30px" }} primary>Réinitialiser</Button>
                </Container>
            </form>
        </div>
    )
}

export default RechercheForum