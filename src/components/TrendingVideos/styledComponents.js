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

export const TrendingSectionContainer = styled.div`
  background-color: ${props => (props.dark ? '#212121' : '#e2e8f0')}
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  align-self: flex-start;
`
export const TrendingLogo = styled.div`
  width: 40px;
  background-color: ${props => (props.dark ? '#383838' : '#ebebeb')};
  height: 40px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`
export const TrendingContainerText = styled.h1`
  font-size: 24px;
  font-family: 'Roboto';
  color: ${props => (props.dark ? '#ffffff' : '#0f0f0f')};
  padding-left: 20px;
`

export const HomeSearchApiContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 100%;
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 75%;
  }
`
export const HomeSearchContainer = styled.div`
  border: 1px solid #424242;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  margin-top: 20px;
  max-width: 350px;
  height: 35px;
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
export const RetryButton = styled.button`
  outline: none;
  border: none;
  background-color: #00306e;
  color: #ffffff;
  cursor: pointer;
  width: 100px;
  height: 30px;
  font-size: 16px;
`
export const SuccessUnorderedVideosContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
  width: 100%;
  margin: 0px;
  @media (min-width: 567px) {
    width: 90vw;
  }
  @media (min-width: 768px) {
    width: 75vw;
  }
`
