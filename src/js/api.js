
const API_KEY = 'KEVIN_API_KEY';

const api = (apiURL = 'https://beerflix-api.herokuapp.com/api-docs/') => {
  const searchAPIEndpoint = `${apiURL}/search/shows?q`;
  const showsAPIEndpoint = `${apiURL}/shows`;
  return {
    getShows: async text => {
      try {
        const URL = text ? `https://beerflix-api.herokuapp.com/api-docs/#/Beer/get_beers${text}` : showsAPIEndpoint;
        const response = await fetch(URL, {
          method: 'GET',
          // headers: {
          //   'X-API-KEY': API_KEY,
          // },
        });
        if (!response.ok) {
          throw new Error('Error retrieving shows');
        }
        const data = await response.json();
        const shows = data.map(result => {
          if (result.show) {
            return result.show;
          }
          return result;
        });
        return shows;
      } catch (err) {
        console.error(err.message);
        throw err;
      }
    }
  };
};

export default api;



