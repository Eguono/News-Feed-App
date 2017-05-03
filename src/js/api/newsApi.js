import axios from 'axios';

export const getSources = (category, callback) => {
  const api = 'https://newsapi.org/v1/sources';

  if (!category) {
    axios.get(api)
      .then((response) => {
        return callback(response.data.sources);
      }).catch((error) => {
        console.log(error);
      });
  } else {
    const link = api + '?category=' + category
    axios.get(link)
      .then((response) => {
        return callback(response.data.sources);
      }).catch((error) => {
        console.log(error);
      });
  }
}

export const getArticles = (source, sortBy, callback) => {
  const api = 'https://newsapi.org/v1/articles?source=';

  if (!sortBy) {
    const link = api + source;
    axios.get(link)
      .then((response) => {
        return callback(response.data.articles)
      }).catch((error) => {
        console.log(error);
      });
  } else {
    const link = api + source + '&sortBy=' + sortBy;
    axios.get(link)
      .then((response) => {
        return callback(response.data.articles)
      }).catch((error) => {
        console.log(error);
      });
  }
}
