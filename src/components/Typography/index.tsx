import type { ElementType, HtmlHTMLAttributes, PropsWithChildren } from 'react';

import clsx from 'clsx';

import './styles.css';

interface Props extends HtmlHTMLAttributes<HTMLParagraphElement> {
  component: ElementType;
  fontWeight?: 'regular' | 'bold';
  color?: 'primary' | 'secondary' | 'tertiary' | 'error';
}

const Typography: React.FC<PropsWithChildren<Props>> = props => {
  const { className, color = 'secondary', fontWeight = 'regular', component, children, ...rest } = props;

  const ElementComponent = component;

  return (
    <ElementComponent
      className={clsx('typography', 
        color,
        fontWeight,
        className && className,
      )}
      {...rest}
    >
      {children}
    </ElementComponent>
  );
};

export default Typography;