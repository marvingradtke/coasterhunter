import React from 'react';
import CoasterCard from '../CoasterCard';
import styled from '@emotion/styled';

// import GlobalStyles from './GlobalStyles.js';
// import main from './themes/defaultTheme.js';

import { useState } from 'react';
// import { sortByName, sortByRanking, sortBySpeed } from './utils/sortFunctions';

// const CardWrapper = styled.div``;

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;

// const Button = styled.button`
//   background: black;
//   color: wheat;
// `;

export default function CoasterList() {
  const [coasterInfos, setCoasterInfos] = useState([]);

  async function getCoasterInfos() {
    const response = await fetch('http://localhost:8080/coasters');
    const newCoasters = await response.json();
    setCoasterInfos(newCoasters);
  }
  React.useEffect(() => {
    getCoasterInfos();
  }, []);

  return (
    <>
      <Container>
        {coasterInfos.map(info => (
          <CoasterCard key={info.id} name={info.name} ranking={info.ranking} image={info.pic} />
        ))}
        ;
      </Container>
    </>
  );
}
//     <>
//     <div>
//   {coasterInfos.map(info => (
//     <CardWrapper key={info.id}>
//       <CoasterCard name={info.name} ranking={info.ranking} image={info.pic} />
//     </CardWrapper>
//     </div>
// </>
// }
