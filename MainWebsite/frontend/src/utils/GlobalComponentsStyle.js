import styled from 'styled-components'

export const Underline = styled.div`
    width: ${props => props.width};
    height: ${props => (props.height?props.height: "1px")};
    background-color: #f0671f;
    margin: ${props => props.margin};
    float: ${props => props.align};
    display: ${props=>(props.display?props.display:"block")}
    
`;