import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9 ')};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  bakground-size: cover;
  width: 95vw;
  justify-content: flex-start;
`
export const VideoMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9 ')};
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`

export const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`

export const VideoSearchApiContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 100vw;
  @media (min-width: 768px) {
    width: 70%;
    justify-content: flex-start;
    align-self: flex-start;
  }
  @media (min-width: 992px) {
    width: 75%;
  }
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
export const SuccessVideosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const EachVideo = styled.div`
  width: 250px;
  height: 200px;
  @media (min-width: 567px) {
    width: 480px;
    height: 300px;
  }
  @media (min-width: 992px) {
    width: 580px;
    height: 400px;
  }
`
export const VideoTitle = styled.p`
  color: ${props => (props.dark ? '#ffffff' : '#0f0f0f')};
  font-size: 14px;
  font-family: 'Roboto';
  @media (min-width: 992px) {
    font-size: 20px;
  }
`
export const ViewsLikesDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (min-width: 567px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
export const CountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const VideoItems = styled.p`
  color: ${props => (props.dark ? '#cccccc' : '#475569')};
  font-size: 13px;
  font-family: 'Roboto';
  padding: 0px;
  margin: 0px;
  @media (min-width: 992px) {
    font-size: 16px;
  }
`
export const SpecificButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
  font-size: 16px;
  margin: 5px;
`
export const HorizontalLine = styled.hr`
  border: 1px solid #64748b;
  width: 100%;
`
export const SpecificVideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const EachVideoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoName = styled.p`
  color: ${props => (props.dark ? '#cccccc' : '#475569')};
  font-size: 13px;
  font-family: 'Roboto';
  padding: 0px;
  margin: 0px;
  @media (min-width: 992px) {
    font-size: 16px;
  }
`
export const ThumbnailImg = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 10px;
  margin-right: 10px;
`
export const VideoDescription = styled.p`
  color: ${props => (props.dark ? '#ffffff' : '#0f0f0f')};
  font-size: 14px;
  font-family: 'Roboto';
  @media (min-width: 992px) {
    font-size: 20px;
  }
`
