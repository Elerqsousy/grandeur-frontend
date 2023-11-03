import classNames from 'classnames';
import React from 'react';

import ContainerBtn from '../container_btn';

const SectionHeader = ({
  title,
  subtitle,
  className,
  onClick,
}: {
    title?: string | null | undefined;
    subtitle?: string | null | undefined;
    className?: string;
    onClick?: () => void;
  }) => {
  const first = title?.split(' ')[0];
  const rest = title?.split(' ').slice(1).join(' ');

  return (
    <ContainerBtn onClick={onClick} className={className}>
      <div className={classNames('p-3 w-100 d-flex align-start', className)}>
        <h2 className="section-heaeder relative text-[15px] capitalize text-gray-dark mb-0">
          <strong className="text-prim leading-5">
            {first}
            {' '}
          </strong>
          {rest}
          {!!subtitle?.length && (
            <small className="block text-gray-light normal-case">
              {subtitle}
            </small>
          )}
        </h2>
      </div>
    </ContainerBtn>
  );
};

export default SectionHeader;

SectionHeader.defaultProps = {
  title: null,
  subtitle: null,
  className: '',
  onClick: () => {},
};
