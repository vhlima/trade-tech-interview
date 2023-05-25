import type { ElementType, HtmlHTMLAttributes, PropsWithChildren } from 'react';

import clsx from 'clsx';

import './styles.css';

interface Props extends HtmlHTMLAttributes<HTMLParagraphElement> {
  component: ElementType;
  color?: 'primary' | 'secondary' | 'error';
}

export const Typography: React.FC<PropsWithChildren<Props>> = props => {
  const { className, color = 'secondary', component, children, ...rest } = props;

  const ElementComponent = component;

  return (
    <ElementComponent
      className={clsx('typography', 
        color,
        className && className,
      )}
      {...rest}
    >
      {children}
    </ElementComponent>
  );
};