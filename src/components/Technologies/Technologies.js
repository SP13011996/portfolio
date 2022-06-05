import React from 'react';
import { DiFirebase, DiReact, DiAndroid } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle>
      Technologies
    </SectionTitle>
    <SectionText>
      I've worked with different Technologies from Back-End to Design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size={"3rem"} />
        <ListContainer>
          <ListTitle>
            Front-End
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js,Angular,Vuejs
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size={"3rem"} />
        <ListContainer>
          <ListTitle>
            Back-End
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            with .Net,Node.js,Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiAndroid size={"3rem"} />
        <ListContainer>
          <ListTitle>
            Mobile Application
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            Android,Kotlin,Flutter
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
