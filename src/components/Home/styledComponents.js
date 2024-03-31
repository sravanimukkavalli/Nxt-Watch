import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9 ')};
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
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9 ')};
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;s
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  display: flex;
  flex-direction: column;
  background-size: cover;
  padding: 10px;
`
export const BannerLogo = styled.img`
  width: 120px;
  height: 40px;
  @media (min-width: 768px) {
    width: 140px;
    height: 50px;
  }
`
export const BannerCloseButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 24px;
  align-self: flex-end;
`
export const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`
export const BannerHeading = styled.p`
  font-size: 22px;
  font-family: 'Roboto';
  color: #181818;
`
export const BannerButton = styled.button`
  outline: none;
  border: 1px solid #231f20;
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  width: 140px;
  height: 30px;
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
export const HomeSearchInput = styled.input`
  background-color: transparent;
  width: 90%;
  border: none;
  outline: none;
  font-size: 22px;
  color: ${props => (props.dark ? '#e2e8f0' : '#606060')};
`
export const HomeSearch = styled.button`
  width: 20%;
  background-color: ${props => (props.dark ? '#e2e8f0' : '#606060')};
  color: #909090;
  outline: none;
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
  justify-content: center;
  list-style-type: none;
  padding: 0px;
  width: 100%;
`
