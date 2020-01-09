import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CoasterCard from '../components/CoasterCard';
import styled from '@emotion/styled';

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;

export default function CoasterList() {
  const [coasterInfos, setCoasterInfos] = useState([]);
  let sortby = useLocation().search;
  // another state, "sortby", match params
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  useEffect(() => {
    async function getCoasterInfos() {
      const response = await fetch(`http://localhost:8080/coasters${sortby}`);
      const newCoasters = await response.json();
      setCoasterInfos(newCoasters);
    }
    getCoasterInfos();
  }, [sortby]);

  useQuery();

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
