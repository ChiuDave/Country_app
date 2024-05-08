import React ,{ useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container, Image, Input, Label } from "semantic-ui-react";

const RechercheParRegion = () => {
    const [pays, setPays] = useState([]);
    const [error, setError] = useState('');
    const [success, setSucess] = useState('');

    const [formData, setFormData] = useState({
        region: '',
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({ ...formData, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const listRegion = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
        const region = listRegion.some(e => formData.region.toLocaleLowerCase() === e.toLocaleLowerCase())
        if(!formData.region.trim()) {
            setError( 'Le champ doit être remplit')
            setSucess('')
        }

        else if(!region){
           setError('Région pas disponible. Choix possible: Africa, Americas, Asia, Europe, Oceania')
           setSucess('')
        } else {
        setError('')
        setSucess('Success')
        onClick()
        }
    }

    const onClick = () => {
        fetch(`https://restcountries.com/v3.1/region/${formData.region}?fields=cca3,name,flags,region`)
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

            <h1>Rechercher</h1>
            <Label pointing="right">Région</Label>
            <Input type="text" value={formData.region} onChange={handleChange} name='region'/>
            <Button onClick={handleSubmit}>Rechercher la région</Button>

            {error && <div className="ui negative message">{error}</div>}
            {success && <div className="ui positive message">{success}</div>}
            <h2>Pays dans la région: {formData.region}</h2>
            {pays.length > 0 ? `Il y a ${pays.length} résultat(s)`: undefined}
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between",flexWrap: "wrap", width: "100%"}}>
                {pays.length > 0 ? renderPays() : undefined}
            </div>

        </Container>)


};

export default RechercheParRegion;