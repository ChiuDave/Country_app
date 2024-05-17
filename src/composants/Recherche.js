import React ,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Container, Image, Input, Label } from "semantic-ui-react";

const Recherche = () => {
    const navigate = useNavigate();
    const [nom, setNom]=useState("");
    const [pays, setPays] = useState([])

    const onClick = () => {
        //console.log(nom)
        fetch(`https://restcountries.com/v3.1/name/${nom}?fields=cca3,name,flags`)
            .then((response) => response.json())
            .then((data) => setPays(data))
            .catch((erreur) => console.log(erreur))
    }
    //console.log(pays)
    const renderPays = () => {
        return pays.map((moncompteur) => {
            return (
                <Card key={moncompteur.cca3}>
                    <Image src={moncompteur.flags.png} />
                    <Card.Content>
                        <Card.Header>
                            <Link to={`/pays/${moncompteur.cca3}`}> {moncompteur.name.common}</Link>
                        </Card.Header>
                    </Card.Content>
                </Card>

            )
        })
    }
    return (
        <Container>
            <br />
            <Button onClick={()=> navigate(-1)}> Page précédente</Button> 
            <Button onClick={()=>navigate(1)}> Page suivante</Button> 
            <h1>Rechercher</h1>
            <Label pointing="right">Pays</Label>
            <Input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
            <Button onClick={onClick}>Rechercher les pays</Button>
            <h2>Résultats de la recherche</h2>
            {pays.length > 0 ? `Il y a ${pays.length} résultat(s)`: undefined}
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between",flexWrap: "wrap", width: "100%"}}>
                {pays.length > 0 ? renderPays() : undefined}
            </div>

        </Container>)


};

export default Recherche;