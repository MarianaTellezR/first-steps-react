import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="row">
            <div className="col-sm-12 col-md-4 weather-img">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Weather"
              />
            </div>
            <div className="col-sm-12 col-md-8 weather-temperature">
              <strong>19 </strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <ul>
            <li>Humidity: 80%</li>
            <li>Wind: 10km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
