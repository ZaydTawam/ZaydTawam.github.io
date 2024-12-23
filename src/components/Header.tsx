import Menu from './Menu';
import gradient from '../assets/images/gradient-light.png';
import { RefObject } from 'react';

interface Props {
  activeSection: string;
  sectionContainer: RefObject<HTMLDivElement>;
}

const Header = ({ activeSection, sectionContainer }: Props) => {
  const vw = window.innerWidth;

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div id="left-block">
        <h1>Zayd Tawam</h1>
        <Menu
          activeSection={activeSection}
          scroll={(offSet) => {
            sectionContainer.current?.scrollTo({
              left: offSet * vw,
              behavior: 'smooth',
            });
          }}
        />
      </div>
      <img id="gradient-img" src={gradient} />
    </div>
  );
};

export default Header;
