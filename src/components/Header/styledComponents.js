import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: ${props => (props.dark ? '#181818' : '#ffffff')};
  @media (min-width: 768px) {
    height: 15vh;
  }
`
export const HeaderLogo = styled.img`
  width: 80px;
  height: 30px;
  @media (min-width: 576px) {
    width: 140px;
    height: 40px;
  }
  @media (min-width: 768px) {
    padding-top: 30px;
    height: 80px;
    padding-left: 50px;
    width: 190px;
  }
`
export const HeaderUnorderedList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`
export const HeaderEachItem = styled.li`
  margin-left: 4px;
  color: ${props => (props.dark ? '#ffffff' : '#181818')};
  @media (min-width: 576px) {
    margin-left: 8px;
  }
  @media (min-width: 768px) {
    margin: 10px;
  }
`
export const ThemeButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: ${props => (props.dark ? '#ffffff' : '#181818')};
`
export const HeaderUnorderedListLg = styled.ul`
  display: none;
  @media (min-width: 768px) {
    list-style-type: none;
    padding: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`
export const HeaderEachItemLg = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  color: ${props => (props.dark ? '#ffffff' : '#181818')};
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
`
export const LogoutButton = styled.button`
  border: ${props => (props.dark ? '1px solid #ffffff' : '1px solid #3b82f6')};
  color: ${props => (props.dark ? '#ffffff' : '#3b82f6')};
  font-size: 26px;
  outline: none;
  width: 140px;
  font-size: 24px;
  height: 40px;
  background-color: transparent;
`
export const PopupContainer = styled.div`
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 50vh;
  max-width: 500px;
  max-height: 400px;
`
export const PopupText = styled.p`
  color: ${props => (props.dark ? '#ffffff' : '#0f0f0f')};
  font-size: 20px;
  font-family: 'Roboto';
  text-align: center;
  @media (min-width: 768px) {
    font-size: 26px;
  }
`
export const PopupButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 50%;
`
export const PopupCancelButton = styled.button`
  border: 1px solid #cccccc;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  width: 120px;
  height: 35px;
  color: ${props => (props.dark ? '#cccccc' : '#475569')};
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`
export const PopupConfirmButton = styled(PopupCancelButton)`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
`
