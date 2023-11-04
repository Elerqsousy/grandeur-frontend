import classNames from 'classnames';
import React from 'react';

import SectionHeader from '../section_header/index.tsx';

export default function Section({
  children,
  title,
  subtitle,
  className,
  headerClassName,
  childernClassName,
  onClick,
}: {
  children?: React.ReactNode;
  title?: string | null | undefined;
  subtitle?: string | null | undefined;
  className?: string;
  childernClassName?: string;
  headerClassName?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={classNames(
        'flex px-[15px] mb-[30px] w-full relative rounded-[.1875rem] ',
        className,
      )}
    >
      <section className={classNames('w-full')}>
        {!!title?.length && (
          <SectionHeader
            onClick={onClick}
            className={headerClassName}
            title={title}
            subtitle={subtitle}
          />
        )}
        <div
          className={classNames(
            'p-3 ease-in-out duration-300',
            childernClassName,
          )}
        >
          {children}
        </div>
      </section>
    </div>
  );
}

Section.defaultProps = {
  children: '',
  title: '',
  subtitle: '',
  className: '',
  headerClassName: '',
  childernClassName: '',
  onClick: () => {},
};
