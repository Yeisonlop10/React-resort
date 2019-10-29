import styled from 'styled-components'
import defaultImg from '../images/room-1.jpeg';


// Access the variable that contains the  properties. Render the image per
// room or the default image
const StyledHero = styled.header `
min-height: 60vh;
background: url(${props => props.img? props.img: defaultImg}) center/cover no-repeat
display: flex;
align-items: center;
justify-content: center;
`

export default StyledHero;