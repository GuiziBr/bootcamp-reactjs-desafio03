import { Marker } from "react-map-gl";
import { connect } from "react-redux";
import React from "react";
import { Img } from "./styles";

const MarkerComponent = ({ developers }) =>
  developers.data.map(developer => (
    <Marker
      key={developer.id}
      latitude={developer.latitude}
      longitude={developer.longitude}
    >
      <Img src={developer.avatar_url} alt={developer.login} />
    </Marker>
  ));

const mapStateToProps = state => ({
  developers: state.developers
});

export default connect(mapStateToProps)(MarkerComponent);
