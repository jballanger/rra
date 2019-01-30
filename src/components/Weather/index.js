import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../../actions/weather';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      loading: false,
    };
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  submitWeather = () => {
    const { city } = this.state;
    this.props.dispatch(getWeather(city));
    this.setState({
      city: '',
    });
  }

  render() {
    const { city } = this.state;
    const { weather, loading, error } = this.props;
    if (loading) {
      return <p>Loading..</p>;
    }
    return (
      <div>
        <label htmlFor="weatherInput">Enter your city:</label>
        <br></br>
        <input name="city" id="weatherInput" type="text" value={city} onChange={this.handleInputChange} />
        <br></br>
        <button onClick={this.submitWeather}>Get weather</button>
        {weather &&
          <div>
            <p>The weather in {weather.name} is: {weather.main}</p>
            <img alt={weather.description} src={`http://openweathermap.org/img/w/${weather.icon}.png`} />
          </div>
        }
        { error && <p>{error}</p> }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { weather, loading, error } = state.weather;
  return {
    weather,
    loading,
    error,
  };
}

export default connect(mapStateToProps)(Weather);
