import React from 'react';
import { Card, Typography } from 'antd';
import 'antd/dist/antd.css';

const { Title, Paragraph } = Typography;

const gridStyle = {
  width: '40rem',
  margin: '1rem',
};
const imageStyle = {
  width: '38rem',
};

const Images = [
  'https://www.who.int/images/default-source/health-topics/coronavirus/risk-communications/general-public/protect-yourself/blue-2.tmb-1920v.png?sfvrsn=2bc43de1_4',
  'https://www.who.int/images/default-source/health-topics/coronavirus/risk-communications/general-public/protect-yourself/blue-1.tmb-1920v.png?sfvrsn=3d15aa1c_4',
  'https://www.who.int/images/default-source/health-topics/coronavirus/risk-communications/general-public/protect-yourself/blue-3.tmb-1920v.png?sfvrsn=b1ef6d45_4',
  'https://www.who.int/images/default-source/health-topics/coronavirus/risk-communications/general-public/protect-yourself/blue-4.tmb-1920v.png?sfvrsn=a5317377_14',
  'https://www.who.int/images/default-source/health-topics/coronavirus/risk-communications/general-public/safe-greetings.tmb-1920v.png?sfvrsn=2e97004e_4',
  'https://www.who.int/images/default-source/health-topics/coronavirus/risk-communications/general-public/handshaking.tmb-1920v.png?sfvrsn=4aed53c5_4',
  'https://www.who.int/images/default-source/health-topics/coronavirus/risk-communications/general-public/wearing-gloves.tmb-1920v.png?sfvrsn=ec69b46a_4',
  'https://www.who.int/images/default-source/health-topics/coronavirus/eng-mythbusting-ncov-(13).tmb-1920v.png?sfvrsn=d2a2dc01_1',
  'https://www.who.int/images/default-source/health-topics/coronavirus/eng-mythbusting-ncov-(30).tmb-768v.png?sfvrsn=c0e196fb_2',
  'https://www.who.int/images/default-source/health-topics/coronavirus/eng-mythbusting-ncov-(19).tmb-1920v.png?sfvrsn=99db25de_1',
  'https://www.who.int/images/default-source/health-topics/coronavirus/eng-mythbusting-ncov-(23).tmb-1920v.png?sfvrsn=b399c676_1',
  'https://www.who.int/images/default-source/health-topics/coronavirus/eng-mythbusting-ncov-(33).tmb-768v.png?sfvrsn=a54904b3_1',
  'https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/be-ready-social-2.tmb-1920v.jpg?sfvrsn=28a6f92d_4',
  'https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/be-kind-to-address-stigma.tmb-1920v.jpg?sfvrsn=4615bfbe_24',
];

function Info() {
  return (
    <div className="grid">
      <Typography style={{ textAlign: 'center' }}>
        <Title>Protecting yourself and others from the spread COVID-19</Title>
        <Paragraph>
          You can reduce your chances of being infected or spreading COVID-19 by
          taking some simple precautions: Regularly and thoroughly clean your
          hands with an alcohol-based hand rub or wash them with soap and water
        </Paragraph>
        <Paragraph>
          Why? Washing your hands with soap and water or using alcohol-based
          hand rub kills viruses that may be on your hands
        </Paragraph>
        <Paragraph>
          Maintain at least 1 metre (3 feet) distance between yourself and
          others
        </Paragraph>
        <Paragraph>
          Why? When someone coughs, sneezes, or speaks they spray small liquid
          droplets from their nose or mouth which may contain virus
        </Paragraph>
        <Paragraph>
          If you are too close, you can breathe in the droplets, including the
          COVID-19 virus if the person has the disease
        </Paragraph>
        <Paragraph> Avoid going to crowded places</Paragraph>
        <Paragraph>
          Why? Where people come together in crowds, you are more likely to come
          into close contact with someone that has COIVD-19 and it is more
          difficult to maintain physical distance of 1 metre (3 feet)
        </Paragraph>
        <Paragraph> Avoid touching eyes, nose and mouth</Paragraph>
        <Paragraph>
          Why? Hands touch many surfaces and can pick up viruses
        </Paragraph>
        <Paragraph>
          Once contaminated, hands can transfer the virus to your eyes, nose or
          mouth
        </Paragraph>
        <Paragraph>
          From there, the virus can enter your body and infect you
        </Paragraph>
        <Paragraph>
          Make sure you, and the people around you, follow good respiratory
          hygiene
        </Paragraph>
        <Paragraph>
          This means covering your mouth and nose with your bent elbow or tissue
          when you cough or sneeze
        </Paragraph>
        <Paragraph>
          Then dispose of the used tissue immediately and wash your hands
        </Paragraph>
        <Paragraph> Why? Droplets spread virus</Paragraph>
        <Paragraph>
          By following good respiratory hygiene, you protect the people around
          you from viruses such as cold, flu and COVID-19
        </Paragraph>
        <Paragraph>
          Stay home and self-isolate even with minor symptoms such as cough,
          headache, mild fever, until you recover
        </Paragraph>
        <Paragraph>Have someone bring you supplies</Paragraph>
        <Paragraph>
          If you need to leave your house, wear a mask to avoid infecting others
        </Paragraph>
        <Paragraph>
          Why? Avoiding contact with others will protect them from possible
          COVID-19 and other viruses
        </Paragraph>
        <Paragraph>
          If you have a fever, cough and difficulty breathing, seek medical
          attention, but call by telephone in advance if possible and follow the
          directions of your local health authority
        </Paragraph>
        <Paragraph>
          Why? National and local authorities will have the most up to date
          information on the situation in your area
        </Paragraph>
        <Paragraph>
          Calling in advance will allow your health care provider to quickly
          direct you to the right health facility
        </Paragraph>
        <Paragraph>
          This will also protect you and help prevent spread of viruses and
          other infections
        </Paragraph>
        <Paragraph>
          Keep up to date on the latest information from trusted sources, such
          as WHO or your local and national health authorities
        </Paragraph>
        <Paragraph>
          Why? Local and national authorities are best placed to advise on what
          people in your area should be doing to protect themselves
        </Paragraph>
        <Title level={2}>
          Advice on the safe use of alcohol-based hand sanitizers
        </Title>
      </Typography>
      {Images.map((e) => (
        <Card.Grid style={gridStyle} key={e}>
          <img src={e} alt="Covid-19" style={imageStyle} />
        </Card.Grid>
      ))}
    </div>
  );
}

export default Info;
