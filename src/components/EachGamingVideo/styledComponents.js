import styled from 'styled-components'

export const EachGamingItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 120px;
  align-items: center;
  margin-bottom: 5px;
  margin: 5px;
  @media (min-width: 567px) {
    max-width: 280px;
    margin: 8px;
  }
  @media (min-width: 992px) {
    max-width: 260px;
  }
`
export const EachVideoImg = styled.img`
  width: 100%;
  height: 150px;
`

export const EachVideoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
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
