import styled from 'styled-components'

export const EachTrendingItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 5px;
  @media (min-width: 567px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
  }
  @media (min-width: 1200px) {
    padding-left: 30px;
  }
`
export const EachVideoTrendingImg = styled.img`
  width: 100%;
  height: 150px;
  @media (min-width: 567px) {
    width: 250px;
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 992px) {
    width: 300px;
    height: 200px;
  }
`
export const EachVideoTrendingDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 567px) {
    padding-left: 15px;
  }
`
export const EachVideoTrendingDetailsSub = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 567px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const ThumbnailImg = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 10px;
`
export const EachVideoTrendingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 567px) {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    width: 200px;
    justify-content: flex-start;
  }
  @media (min-width: 992px) {
    min-width: 300px;
  }
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
    justify-content: flex-start;
    align-items: flex-start;
    align-self: flex-start;
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
