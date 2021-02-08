import cx from 'classnames';

import styles from './Button.module.css';

function Button(props) {
  const { children, className: customClassName, size, type } = props;
  const className = cx(styles.button, styles[type], styles[size], {
    [customClassName]: !!customClassName
  });

  return (
    <button className={className}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: 'medium',
  type: 'primary'
}

export default Button;