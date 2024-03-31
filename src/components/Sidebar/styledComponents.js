import styled from 'styled-components'

export const HomeSidebar = styled.div`
  display: none;
  @media (min-width: 768px) {
    background-color: ${props => (props.dark ? '#181818' : '#ffffff')};
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    max-height: 600px;
  }
  @media (min-width: 992px) {
    width: 20vw;
  }
`

export const HomeUnorderedListLg = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HeaderEachItemLg = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: ${props => (props.dark ? '#ffffff' : '#181818')};
  margin-top: 5px;
  text-decoration: none;
`

export const HeaderEachItemLgActive = styled(HeaderEachItemLg)`
  color: ${props => props.active && '#ff0b37'};
`

export const ItemName = styled.p`
  color: ${props => (props.dark ? '#ffffff' : '#181818')};
  font-size: 18px;
  font-family: 'Roboto';
  padding-left: 5px;
  text-align: center;
`
export const ContactUsContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
  }
`
export const ContactUs = styled.p`
  color: ${props => (props.dark ? '#ffffff' : '#181818')};
  font-size: 22px;
  font-family: 'Roboto';
  text-align: center;
`
export const LogosContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const EachLogoItem = styled.img`
  width: 30px;
  height: 30px;
  margin: 5px;
`
