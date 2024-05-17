import { useEffect, useState } from "react";
import { Container} from "semantic-ui-react";
import Pagination from "./Pagination";



const Accueil = () => { 
    const [pays, setPays] = useState()
   
    
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all?fields=name,flags,cca3`)
        .then((response) => response.json())
        .then((data) => setPays(data))
        .catch((erreur) => console.log(erreur))
    },[])

 
    
    return (
        <Container>
            <h1>Bienvenue sur le site des pays</h1> <br/> <br/>
            <h3> <b>Voici la liste des pays:</b></h3>
            
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", width: "100%"}}>
                {pays && <Pagination pays={pays} itemsPerPage={10}/>}
            </div>

        </Container>) 


};

export default Accueil;