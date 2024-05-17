import React from 'react'
import {Checkbox, Grid } from "semantic-ui-react";

const Langues = ({ langues, selectedLangues, handleCheckboxChange }) => {
    // Split the langues array into two groups of 5
    const group1 = langues.slice(0, 5);
    const group2 = langues.slice(5, 10);

    return (
        <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column>
                    {group1.map(langue => (
                        <div key={langue.code} style={{ marginBottom: '13px' }}>
                            <Checkbox
                                id={langue.code}
                                label={langue.name}
                                checked={selectedLangues.includes(langue.code)}
                                onChange={() => handleCheckboxChange(langue.code)}
                            />
                        </div>
                    ))}
                </Grid.Column>
                <Grid.Column>
                    {group2.map(langue => (
                        <div key={langue.code} style={{ marginBottom: '13px' }}>
                            <Checkbox
                                id={langue.code}
                                label={langue.name}
                                checked={selectedLangues.includes(langue.code)}
                                onChange={() => handleCheckboxChange(langue.code)}
                            />
                        </div>
                    ))}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Langues