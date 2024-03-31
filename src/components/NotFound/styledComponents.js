import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9 ')};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  bakground-size: cover;
  width: 95vw;
`

export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9 ')};
  width: 100%;
  justify-content: space-between;
`
export const ApiViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  width: 80%;
`
export const FailureImage = styled.img`
  width: 70%;
  height: 50%;
  max-width: 400px;
  margin-top: 20px;
`

export const FailureHeading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => (props.dark ? '#ffffff' : '#0f0f0f')};
  text-align: center;
`
export const FailureInfo = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => (props.dark ? '#cccccc' : '#475569')};
  text-align: center;
`
