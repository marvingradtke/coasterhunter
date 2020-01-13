import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CoasterCard from '../components/CoasterCard';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function CoasterList() {
  const [coasterInfos, setCoasterInfos] = useState(null);
  const search = useLocation().search;

  useEffect(() => {
    async function getCoasterInfos() {
      const response = await fetch(`/api/coasters${search}`);
      const newCoasters = await response.json();
      setCoasterInfos(newCoasters);
    }
    getCoasterInfos();
  }, [search]);

  return (
    <Container>
      {coasterInfos &&
        coasterInfos.map(info => (
          <CoasterCard
            key={info.id}
            id={info.id}
            name={info.name}
            ranking={info.ranking}
            image={info.pic}
          />
        ))}
    </Container>
  );
}
