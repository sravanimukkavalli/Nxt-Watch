import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  bakground-size: cover;
  width: 100vw;
`
export const LoginCardContainer = styled.div`
  background-color: ${props => (props.dark ? '#181818' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 80%;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: ${props =>
    props.dark ? '0px 4px 4px 0px #181818' : '0px 4px 4px 0px #ffffff'};
  max-width: 540px;
  @media (min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`
export const LoginLogo = styled.img`
  width: 100px;
  height: 30px;
  @media (min-width: 768px) {
    width: 180px;
    height: 60px;
  }
`
export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  margin-top: 10px;
`
export const LoginLabelText = styled.label`
  color: ${props => (props.dark ? '#ffffff' : '#606060')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  margin: 4px;
  margin-top: 10px;
  @media (min-width: 768px) {
    font-size: 18px;
    padding-bottom: 5px;
  }
`

export const LoginInputText = styled.input`
  width: 90%;
  height: 35px;
  border: 1px solid #94a3b8;
  outline: none;
  font-size: 15px;
  padding: 5px;
  border-radius: 3px;
  background-color: transparent;
  color: ${props => (props.dark ? '#ffffff' : '#181818')};
  padding-left: 10px;
  margin: 4px;
  @media (min-width: 768px) {
    height: 45px;
    font-size: 22px;
    margin-bottom: 8px;
  }
`
export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const CheckBoxInput = styled.input`
  padding-right: 10px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`

export const ShowPasswordText = styled.label`
  color: ${props => (props.dark ? '#ffffff' : '#181818')};
  font-family: 'Roboto';
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 18px;
    margin: 4px;
  }
`

export const LoginButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-family: 'Roboto';
  color: #ffffff;
  background-color: #3b82f6;
  border-radius: 10px;
  width: 90%;
  height: 35px;
  margin-top: 10px;
  @media (min-width: 768px) {
    height: 50px;
    font-size: 20px;
  }
`
export const ErrorMsg = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: #ff0000;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`
