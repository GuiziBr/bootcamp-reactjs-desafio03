import React from "react";
import PropTypes from "prop-types";
import { Sidebar } from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as developersActions from "../../store/actions/developers";

const SideBarComponent = ({ developers, removeDeveloper }) => (
  <Sidebar>
    <ul>
      {developers.data.map(developer => (
        <li key={developer.id}>
          <div>
            <img src={developer.avatar_url} alt={developer.login} />
            <div className="user-info">
              <strong>{developer.name}</strong>
              <small>{developer.login}</small>
            </div>
            <button
              onClick={() => {
                removeDeveloper(developer.id);
              }}
            >
              {<i className="fa fa-fw fa-times-circle remove" />}
            </button>
            <a
              href={`https://github.com/${developer.login}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-fw fa-angle-right go-to-page" />
            </a>
          </div>
        </li>
      ))}
    </ul>
  </Sidebar>
);

Sidebar.propTypes = {
  removeDeveloper: PropTypes.func.isRequired,
  developers: PropTypes.shape({}).isRequired
};

const mapStateToProps = state => ({
  developers: state.developers
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(developersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarComponent);
