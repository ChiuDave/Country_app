import { useState } from "react"
import { Container, Label, Select } from "semantic-ui-react"

// choisir 1 affiche l'autre option jusqu'à summission qui affiche info du pays désiré
const RechercheForum = () => {
    const [question1, setQuestion1] = useState();
    const [question2, setQuestion2] = useState();
    const [question3, setQuestion3] = useState()

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