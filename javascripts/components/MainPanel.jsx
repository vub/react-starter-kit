import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Header from './Header';
import Footer from './Footer';

function mapStateToProps(state) {
  return _.merge({}, state.common);
}

function mapDispatchToProps() {
  return {};
}

function Panel(props) {
  const {
    isSidebarOpen, menuTitle, children,
  } = props;

  return (
    <div>
      <div className="main-panel" style={{ width: isSidebarOpen ? 'calc(100% - 260px)' : '100%' }}>
        <Header menuTitle={menuTitle} />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                {children}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

Panel.defaultProps = {};

Panel.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  menuTitle: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

const MainPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Panel);

export default MainPanel;
