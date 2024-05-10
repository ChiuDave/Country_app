import React, { useState } from 'react';
import { Button, Card, Image} from "semantic-ui-react";
import { Link } from 'react-router-dom';


const PaginatedPays = ({ pays, itemsPerPage }) => {
    console.log(pays)
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(pays.length / itemsPerPage);
  
    const currentPays = pays.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    return (
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        { currentPays.map((moncompteur) => (
        <Card key={moncompteur.cca3}>
            <Image src={moncompteur.flags.png} />
                <Card.Content>
                    <Card.Header>
                        <Link to={`/pays/${moncompteur.cca3}`}>{moncompteur.name.common}</Link>
                    </Card.Header>
                </Card.Content>
        </Card>
         ))}
        </div>
       
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            {Array.from({ length: totalPages }, (_, index) => (
              <Button key={index} onClick={() => setCurrentPage(index + 1)}>
                {index + 1}
              </Button>
            ))}
          </div>
      </div>
    );
  };
  
  export default PaginatedPays;