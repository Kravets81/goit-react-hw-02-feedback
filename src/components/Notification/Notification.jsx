import PropTypes from 'prop-types';
import css from './Notification.module.css';

import React from 'react';

export default function Notification({ message }) {
  return <p className={css.notification}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
