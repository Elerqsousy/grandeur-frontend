import React from 'react';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Section from '../section/index.tsx';

export default function CollapsibleSection({
  children,
  title,
  subtitle,
  className,
  headerClassName,
  childernClassName,
  isOpen,
}: {
  children?: React.ReactNode;
  title?: string | null | undefined;
  subtitle?: string | null | undefined;
  className?: string;
  headerClassName?: string;
  childernClassName?: string;
  isOpen?: boolean;
}) {
  const [open, toggle] = React.useState(isOpen);

  return (
    <Section
      className={classNames('relative overflow-auto', className)}
      title={title}
      subtitle={subtitle}
      onClick={() => toggle(!open)}
      headerClassName={classNames('cursor-pointer !bg-unitedgray shadow-sm', headerClassName)}
      childernClassName={open ? childernClassName : 'py-0'}
    >
      <FontAwesomeIcon
        icon={faAngleRight}
        className={classNames(
          'w-[14px] h-[14px] absolute top-[19px] right-[16px] transition-all ease-in-out duration-300',
          { 'rotate-90': open },
        )}
        onClick={() => toggle(!open)}
      />
      <div
        className={classNames(
          'transition-height ease-in-out duration-200',
          { 'h-fit overflow-auto': open, 'h-0 overflow-hidden': !open },
        )}
      >
        {children}
      </div>
    </Section>
  );
}

CollapsibleSection.defaultProps = {
  children: '',
  title: '',
  subtitle: '',
  className: '',
  headerClassName: '',
  childernClassName: '',
  isOpen: false,
};
