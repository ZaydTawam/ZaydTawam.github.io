import { RefObject, useEffect, useState } from 'react';
import Section from './Section';
import { Folders } from '@phosphor-icons/react';

interface Props {
  sectionContainerRef: RefObject<HTMLDivElement>;
  setActiveSection: (activeSection: string) => void;
}

const MainContent = ({ sectionContainerRef, setActiveSection }: Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [lastX, setLastX] = useState(0);

  function beginDragging(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setIsDragging(true);
    setLastX(event.clientX);
  }

  function drag(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (sectionContainerRef.current) {
      if (isDragging) {
        const currentX = event.clientX;
        sectionContainerRef.current.scrollBy({
          left: (currentX - lastX) * -1,
        });
        setLastX(currentX);
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const vw = window.innerWidth;
      if (sectionContainerRef.current) {
        if (sectionContainerRef.current.scrollLeft < 0.145 * vw) {
          setActiveSection('about');
        } else if (sectionContainerRef.current.scrollLeft < 0.55 * vw) {
          setActiveSection('projects');
        } else if (sectionContainerRef.current.scrollLeft < 0.955 * vw) {
          setActiveSection('skills');
        } else {
          setActiveSection('contact');
        }
      }
    };
    sectionContainerRef.current?.addEventListener('scroll', handleScroll);

    return () => {
      sectionContainerRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, [sectionContainerRef]);

  return (
    <div
      id="section-container"
      ref={sectionContainerRef}
      onMouseDown={beginDragging}
      onMouseLeave={() => {
        setIsDragging(false);
      }}
      onMouseUp={() => {
        setIsDragging(false);
      }}
      onMouseMove={drag}
    >
      <Section sectionName="about">
        I am a student at the University of Florida majoring in Computer
        Science. My experience working on a diverse set of projects and the
        courses I have taken have given me the technical skills to tackle any
        challenge and solve complex problems.
      </Section>
      <Section sectionName="projects">
        <p style={{ marginBottom: '0.6vh' }}>
          <Folders size={13} color="black" /> DISCORD BOT
          <span style={{ float: 'right', color: ' #9c9c9c' }}>Mar 2024</span>
        </p>
        <p style={{ marginBottom: '0.6vh' }}>
          <Folders size={13} color="black" /> OTHELLO GAME
          <span style={{ float: 'right', color: ' #9c9c9c' }}>Jul 2024</span>
        </p>
        <p>
          <Folders size={13} color="black" /> TASK MANAGER
          <span style={{ float: 'right', color: ' #9c9c9c' }}>Nov 2023</span>
        </p>
      </Section>
      <Section sectionName="skills">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse netus
        mollis molestie arcu, netus magnis porta libero. Sodales mattis massa
        elementum eros pulvinar adipiscing enim. Integer rhoncus ante curabitur
        donec tortor nibh. Eu natoque himenaeos duis tristique massa tempor
        elementum donec. Curae pretium laoreet, cubilia senectus tortor maximus.
        Leo tempor varius bibendum ultrices; semper accumsan netus. Molestie
        ridiculus fermentum, posuere vehicula fusce nam suscipit. Quis ultricies
        felis bibendum sagittis lobortis hendrerit inceptos class.
        <br />
        <br />
        Fermentum id ut montes consequat venenatis ac orci. Potenti semper
        scelerisque elementum vehicula feugiat. Habitant rutrum fringilla diam
        venenatis lacinia fringilla hendrerit. Est eu torquent sodales conubia
        mus accumsan convallis in magnis. Mollis nam elementum; id tristique
        lectus convallis? Id erat nec nisl litora vehicula nam curae odio.
      </Section>
      <Section sectionName="contact" style={{ marginRight: '59.45vw' }}>
        <p className="section-content">EMAIL = 'tawamzayd@gmail.com'</p>
        <p className="section-content">
          LINKEDIN = '
          <a
            href="https://www.linkedin.com/in/zayd-tawam"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/zayd-tawam
          </a>
          '
        </p>
        <p className="section-content">
          GITHUB = '
          <a
            href="https://github.com/ZaydTawam"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/ZaydTawam
          </a>
          '
        </p>
      </Section>
    </div>
  );
};

export default MainContent;
