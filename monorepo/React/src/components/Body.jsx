import React from 'react';
import { Link } from 'react-router-dom';

const options = [
  {
    name: 'Anti Wrinkle Treatment',
    imageUrl: 'https://www.taymedispa.co.uk/wp-content/uploads/2018/02/1200-Dermal-Filler-Image-shutterstock_737351461-1-1024x683.jpg',
  },
  {
    name: 'Dermal Fillers',
    imageUrl: 'https://www.taymedispa.co.uk/wp-content/uploads/2018/02/1200-Dermal-Filler-Image-shutterstock_737351461-1-1024x683.jpg',
  },
  {
    name: 'Secret RF',
    imageUrl: 'https://www.taymedispa.co.uk/wp-content/uploads/2018/02/1200-Dermal-Filler-Image-shutterstock_737351461-1-1024x683.jpg',
  },
  {
    name: 'HArmonyCA',
    imageUrl: 'https://www.taymedispa.co.uk/wp-content/uploads/2018/02/1200-Dermal-Filler-Image-shutterstock_737351461-1-1024x683.jpg',
  },
  {
    name: 'Profhilo',
    imageUrl: 'https://www.taymedispa.co.uk/wp-content/uploads/2018/02/1200-Dermal-Filler-Image-shutterstock_737351461-1-1024x683.jpg',
  },
  {
    name: 'Facials',
    imageUrl: 'https://www.taymedispa.co.uk/wp-content/uploads/2018/02/1200-Dermal-Filler-Image-shutterstock_737351461-1-1024x683.jpg',
  },
  {
    name: 'Sclerotherapy',
    imageUrl: 'https://www.taymedispa.co.uk/wp-content/uploads/2018/02/1200-Dermal-Filler-Image-shutterstock_737351461-1-1024x683.jpg',
  },
  {
    name: 'Fat Dissolve',
    imageUrl: 'https://www.taymedispa.co.uk/wp-content/uploads/2018/02/1200-Dermal-Filler-Image-shutterstock_737351461-1-1024x683.jpg',
  },
]

function Body() {
  return (
    <section>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <Link to={`/option/${index + 1}`}>
              <img src={option.imageUrl} alt={option.name} />
              {option.name}
            </Link>
          </li>
        ))}
      </ul>
      <p className='p-body'>
        Not sure about consultation type? Please, call <span className='phone-number'>0203 7959063</span>
      </p>
    </section>
  );
}

export default Body;