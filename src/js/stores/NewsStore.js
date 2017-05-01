import { EventEmitter } from 'events';
import axios from 'axios';

class NewsStore extends EventEmitter {
  constructor() {
    super();
    this.newsSource = [];
    axios.get('https://newsapi.org/v1/sources?language=en&apiKey={213327409d384371851777e7c7f78dfe}')
      .then((response) => {
        response.data.sources.forEach((sources) => {
          const source = {
            id: sources.id,
            name: sources.name,
            description: sources.description,
            url: sources.url,
            category: sources.category,
            language: sources.language,
            country: sources.country,
          };
          this.newsSource.push(source);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getAll() {
    return this.newsSource;
  }
}


const newsStore = new NewsStore();

export default newsStore;
