import styled from 'styled-components'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Left = styled.div`
flex: 1;
display: flex;

align-items: center;

margin: 1px;
color: whitesmoke;

`
const Right = styled.div`
flex: 1;
display: flex;
justify-content:flex-end;
align-items: center;
margin: 1px;
color: whitesmoke;
`
const Center = styled.div`
 flex: 1;
 display: flex;
justify-content: center;
align-items: center;
margin: 1px;
color: whitesmoke;
`

const Container = styled.div`
background-color: gray;
height: 60px;
width: 100vw;
display:flex;
align-items:center;
`
const Wrapper = styled.div`
height: 30px;
display: flex;
align-items: center;
width: 100%;
`

const Searchcontainer=styled.div`
border: 0px solid gray;
display: flex;
justify-content: center;
align-items: center;
margin-left: 5px;
padding: 3px;
`
const Language=styled.div`
`
const Input=styled.input`
 border: none;
`
const Menuitem=styled.div`
cursor: pointer;
margin: 15px;
`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left> 
                    <Language>
                        EN
                       
                    </Language>
                    
                    <Searchcontainer>
                        <Input/>
                        <SearchIcon/>
                    </Searchcontainer>
                </Left>
                <Center><h1>
                    sajid cloths
                </h1>

                </Center>
                <Right>
                    <Menuitem> REGISTER</Menuitem>
                    <Menuitem>SIGN IN</Menuitem>
                    <Menuitem> 
                     <Badge badgeContent={4} color='primary'>
                          <ShoppingCartOutlinedIcon/>
                     </Badge>

                    </Menuitem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
