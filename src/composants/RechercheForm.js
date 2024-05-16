import { useState } from "react"
import { Container, Label, Select } from "semantic-ui-react"

// choisir 1 affiche l'autre option jusqu'à summission qui affiche info du pays désiré
const RechercheForum = () => {
    const [langue, setLangue] = useState();
    const [pays, setPays] = useState();
    const [paysVoisin, setPaysVoisin] = useState();

    const onSelectLangue = () => {
        fetch(`https://restcountries.com/v3.1/lang/${langue}?fields=cca3,name,flags`)
            .then((response) => response.json())
            .then((data) => setPays(data))
            .catch((erreur) => console.log(erreur))
    }

    const onSelectPays = () => {
        fetch(`https://restcountries.com/v3.1/name/${pays}?fields=cca3,name,flags`)
            .then((response) => response.json())
            .then((data) => setPaysVoisin(data))
            .catch((erreur) => console.log(erreur))
    }

    const onSelectPaysVoisin = () => {
        fetch(`https://restcountries.com/v3.1/name/${pays}?fields=cca3,name,flags`)
            .then((response) => response.json())
            .then((data) => setPaysVoisin(data))
            .catch((erreur) => console.log(erreur))
    }
    return(
        <Container>
            <div style={{marginTop: "30px"}}>
                <Label>Langue à choisir: </Label>
                <Select></Select>
            </div>
            <div style={{marginTop: "30px"}}>
                <Label>Pays à choisir: </Label>
                <Select></Select>
            </div>
            <div style={{marginTop: "30px"}}>
                <Label>Pays Voisin à choisir: </Label>
                <Select></Select>
            </div>
            
        </Container>
    )
}

export default RechercheForum