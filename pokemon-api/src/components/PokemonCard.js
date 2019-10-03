import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";

const Gen1Card = ({card}) => {
  return (
    <div>
      <Card>
        <Image src={card.imageUrlHiRes} wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            {card.name} (#{card.nationalPokedexNumber})
          </Card.Header>
          <Card.Meta>
            <span className="date">{card.rarity}</span>
          </Card.Meta>
          <Card.Description>
            Series: <p>{card.series}</p>
            Set: <p>{card.set}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          Type: {card.types}
        </Card.Content>
      </Card>
    </div>
  );
}

export default Gen1Card;