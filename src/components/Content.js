import React from "react";

function Content(props) {
  return (
    <section>
      <div className="journal-content">
        <img
          src={process.env.PUBLIC_URL + props.image}
          className="card-pic"
          alt="Mt Fiji Pic"
        />
        <div className="journal-info">
          <div className="location">
            <img
              src={process.env.PUBLIC_URL + "/images/Path.png"}
              alt="location-icon"
              className="icon"
            />
            <h3>{props.location}</h3>
            <p>
              <a href={props.googleMapsUrl} target="_blank">
                View on Google Maps
              </a>
            </p>
          </div>
          <h1>{props.title}</h1>
          <span>
            <p>
              {props.startDate}-{props.endDate}
            </p>
          </span>
          <p className="description">{props.description}</p>
        </div>
      </div>
      <hr />
    </section>
  );
}

export default Content;
