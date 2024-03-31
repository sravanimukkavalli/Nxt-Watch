import styled from 'styled-components'

export const EachVideoItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 5px;
  margin: 5px;
  @media (min-width: 567px) {
    max-width: 280px;
    margin: 8px;
  }
  @media (min-width: 992px) {
    max-width: 300px;
  }
`
export const EachVideoImg = styled.img`
  width: 100%;
  height: 150px;
`
export const EachVideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ThumbnailImg = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 10px;
  align-self: flex-start;
`
export const EachVideoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const VideoTitle = styled.p`
  color: ${props => (props.dark ? '#ffffff' : '#0f0f0f')};
  font-size: 14px;
  font-family: 'Roboto';
`
export const VideoName = styled.p`
  color: ${props => (props.dark ? '#cccccc' : '#475569')};
  font-size: 11px;
  font-family: 'Roboto';
  padding: 0px;
  margin: 0px;
`
export const CountTimeContainer = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0px;
  @media (min-width: 567px) {
    align-items: center;
  }
`
export const VideoItem = styled.p`
  color: ${props => (props.dark ? '#cccccc' : '#475569')};
  font-size: 11px;
  font-weight: 500;
  font-family: 'Roboto';
  padding: 0px;
  margin-left: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
