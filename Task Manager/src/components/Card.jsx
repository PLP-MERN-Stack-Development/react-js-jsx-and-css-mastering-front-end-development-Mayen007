import React from "react";
import PropTypes from "prop-types";

/**
 * Card component for displaying content in a boxed layout
 * @param {object} props
 * @param {string} [props.className] - Additional classes
 * @param {React.ReactNode} props.children - Card content
 * @param {any} rest - Other div props
 */
const Card = ({ className = "", children, ...rest }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow p-6 ${className}`.trim()}
      {...rest}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
