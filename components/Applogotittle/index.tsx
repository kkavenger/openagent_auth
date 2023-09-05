import React from 'react'
import {
    AppTitle,
    Container,
    LogoImage
} from './ApplogotittleElement'

type Props = {}

const AppLogoTitle = (props: Props) => {
    return (
        <Container href="/">
            <AppTitle> openagent </AppTitle>
            {/* <LogoImage 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfDjlpkFgo-j4xmHq9ky2458lkcaDWD112hLqawLZgw&s"
                width = "300"
                height= "200"
                alt="logo"
            /> */}
        </Container>
    )
}

export default AppLogoTitle