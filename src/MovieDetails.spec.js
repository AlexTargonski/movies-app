import React        from 'react'
import { shallow }  from 'enzyme'
import MovieDetails from './components/MovieDetails'

describe('MovieDetailsPage', () => {
  const props = {
    movie : {
      poster_path : '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    },
  }

  const movieDetails = shallow(<MovieDetails {...props}/>);

  it('<MovieImage /> rendered', () => {
      expect(movieDetails.find('MovieImage')).toHaveLength(1);
  })
})
