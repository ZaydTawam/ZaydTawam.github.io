import { CSSProperties, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  sectionName: string;
  style?: CSSProperties;
}

const Section = ({ children, sectionName, style }: Props) => {
  return (
    <div className="section" style={style}>
      <h2>
        {sectionName}
        <p style={{ display: 'inline' }}> {'{'}</p>
      </h2>
      <p className="section-content">{children}</p>
      <p style={{ color: '#9c9c9c' }}>{'}'}</p>
    </div>
  );
};

export default Section;
