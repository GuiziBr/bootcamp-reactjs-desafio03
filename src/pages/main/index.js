import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import MapGL from "react-map-gl";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as developersActions from "../../store/actions/developers";
import { PopupCp } from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBarComponent from "../../components/sidebar";
import MarkerComponent from "../../components/marker";
import notify from "../../components/notification";

class Main extends Component {
  static propTypes = {
    addDeveloperRequest: PropTypes.func.isRequired,
    developers: PropTypes.shape({
      error: PropTypes.oneOfType([null, PropTypes.string]),
      success: PropTypes.oneOfType([null, PropTypes.string]),
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          login: PropTypes.string,
          avatar_url: PropTypes.string,
          latitude: PropTypes.number,
          longitude: PropTypes.number
        })
      )
    }).isRequired
  };

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.6401731,
      longitude: -46.6975884,
      zoom: 14
    },
    showPopup: false,
    userInput: "",
    developers: []
  };

  handleAddDeveloper = e => {
    e.preventDefault();
    this.props.addDeveloperRequest(
      this.state.userInput,
      this.state.coordinates
    );
    this.setState({ userInput: "", showPopup: false });
  };
  render() {
    const error = this.props.developers.error;
    return (
      <Fragment>
        <span>{error && notify(false, error)}</span>
        <span>{this.props.developers.success && notify(true, error)}</span>
        {(this.props.developers.success = null)}
        {(this.props.developers.error = null)}
        <MapGL
          onClick={e => {
            const coordinates = {
              longitude: e.lngLat[0],
              latitude: e.lngLat[1]
            };
            this.props.developers.error = null;
            this.setState({ coordinates });
            e.target.className === "overlays" && this.state.showPopup === false
              ? this.setState({ showPopup: true })
              : this.setState({ showPopup: false });
          }}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken={
            "pk.eyJ1IjoiZ3VpemkyNzAyIiwiYSI6ImNqeGR5YWRhcTAzbDIzeW9maXppY3RhdHYifQ.p0WT_aZTdLVdsSRZzV_a7Q"
          }
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <SideBarComponent />

          {this.state.showPopup && (
            <PopupCp
              latitude={this.state.coordinates.latitude}
              longitude={this.state.coordinates.longitude}
              closeButton={false}
              closeOnClick={false}
              onClose={() => this.setState({ showPopup: false })}
              anchor="top"
            >
              <h3>Adicionar novo usuário</h3>
              <form onSubmit={this.handleAddDeveloper}>
                <input
                  type="text"
                  placeholder="Usuário no Github"
                  value={this.state.userInput}
                  autoFocus
                  onChange={e => this.setState({ userInput: e.target.value })}
                />
                <div>
                  <button
                    type="button"
                    onClick={e => {
                      this.setState({ showPopup: false, userInput: "" });
                    }}
                  >
                    Cancelar
                  </button>
                  <button type="submit">Salvar</button>
                </div>
              </form>
            </PopupCp>
          )}
          <MarkerComponent />
        </MapGL>
        <ToastContainer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  developers: state.developers
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(developersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
