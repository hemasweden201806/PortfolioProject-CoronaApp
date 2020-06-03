import React from 'react';
import { Cards, CountryPicker, Charts } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';


//yarimport image from './images/image.png';
  class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });//its easier to see what we set.
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} /> 
      </div>
    );
  }
}

export default App;