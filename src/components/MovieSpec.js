import React               from 'react';
import StarRatingComponent from 'react-star-rating-component';

const MovieSpec = ({
    title,
    countries,
    release,
    genres,
    voteAverage,
    language,
    budget,
}) => (
  <>
    <h1>{title}</h1>
    <h3>
      Country:
      {countries.map(c => `${c.name} `)}
    </h3>
    <h3>
      Language: {language}
    </h3>
    <h3>
      Release:
      {release}
    </h3>
    <h3>
      Budget: ${new Intl.NumberFormat().format(budget)}
    </h3>
    <h3>
      Genres:
      {genres.map(g => `${g.name} `)}
    </h3>
    <h3>
      Average vote:
      {voteAverage}
      <StarRatingComponent
        name="rate2"
        editing={false}
        starCount={10}
        value={voteAverage}
      />
    </h3>
  </>
);

export default MovieSpec;
