import styled from "styled-components";

export const HomeDiv = styled.div``;

// SlideBar
export const SliderBarDiv = styled.div`
  width: 99%;
  padding: 0 20px;
  margin: auto;
`;

export const SliderImgDiv = styled.img`
  width: 320px;
  height: 185px;
  border-radius: 5px;
  box-shadow: -6px -6px 12px rgba(49, 49, 49, 0.5), 4px 4px 12px #000000;
  margin: 20px 10px;
`;

// Competition
export const CompetitionDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
  margin: 2% 0;
`;

export const CompetitionSubDiv = styled.div`
  width: 100%;
  padding: 0 6%;
  border-left: 1px solid white;
  display: grid;
  grid-template-row: auto auto;
  grid-gap: 30px;
`;

export const CptTitle = styled.div`
  font-size: 34px;
  color: #ffffff;
  font-weight: 600;
`;

export const CptEventDiv = styled.div`
  display: flex;
  grid-gap: 20px;
  align-items: center;
`;
