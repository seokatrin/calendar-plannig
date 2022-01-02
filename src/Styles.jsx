import styled from "styled-components"
import { createGlobalStyle } from "styled-components"


export const Glogal = createGlobalStyle`
margin: 0;
box-sizing: border-box;
body{
    background-color: #f1f2f6;
}
`

// ---------------styles for table---------------------

const StyledTh = styled.th`
font-size: 14px;
text-align: left;
padding-bottom: 10px;
`

export const TH = (props) => {
    return <StyledTh {...props} />
}

const StyledTD = styled.td`
width: 100px;
height: 80px;
padding: 10px;
border: 1px solid #dfe6e9;
text-align: right;
vertical-align: top;
color: ${props => props.color || '#000'};
position: relative;
`

export const TD = props => {
    return <StyledTD {...props} />
}

const StyledTable = styled.table`
 border-collapse: collapse;
 width: 100%;
`

export const Table = props => {
    return <StyledTable {...props}/>
}


// ---------Style for events in calendar ----------
const StyledDiv = styled.div`
display: inline-block;
text-align: center;
padding: 4px 6px;
background-color: ${props => props.background || 'grey'};
color: ${props => props.color || '#fff'};
border-radius: 5px;
margin-top: 25px;
font-size: 12px;
position: absolute;
right: 10px;
bottom: 10px;
`
export const Div = props => {
    return <StyledDiv {...props} />
}


// ------------styles for main title--------
export const StyledTitle = styled.h1`
font-size: 50px;
`

// -------styles for wrappers -------------
export const StyledWrapper = styled.div`
background-color: ${props => props.background || '#fff'} ;
padding: ${props => props.padding || '0px'};
border-radius: 10px;
margin: ${props => props.margin || '0px'};
width: ${props => props.width || '100%'};
`

export const StyledAppWrapper = styled.div`
margin: ${props => props.margin || '30px auto'}; 
width: ${props => props.width || '90%'};
padding: ${props => props.padding || '0px'};
`

/* -----------styles to position block------------ */


export const StyledFlex = styled.div`
display: flex;
flex-direction: ${props => props.direction || 'row'};
justify-content: ${props => props.justify || 'stretch'};
align-items: ${props => props.align || 'stretch'};
`


/* -------------styles for select workers components--------------- */
export const StyledSelect = styled(StyledFlex)`
border-bottom: ${props => props.border || '2px'} solid #dfe6e9;
margin-bottom: 20px;
padding: ${props => props.padding || '0px'};
`

export const StyledSelectItem = styled(StyledFlex)`
border: 1px solid rgba(72, 126, 176, 0.5);
border-radius: 5px;
padding-left: 10px;
cursor: pointer;
position: relative;
font-size: 18px;
`

export const Button = styled.button`
border: none;
border-radius: 50%;
background-color: #f1f2f6;
padding: 5px 10px;
font-size: 20px;
cursor: pointer;
:first-child{
    margin-right: 10px;
}
:hover {
    background: lightblue;
    color: #fff;
}
`
export const StiledV = styled.span`
border-left:  1px solid rgba(72, 126, 176, 0.5);
padding: 5px 10px;
color: rgba(72, 126, 176,1.0);
`

/* -------------styles for drop-down list---------- */

export const StyledMenu = styled.div`
background: #fff;
position: absolute;
top: 103%;
left: 0;
right: 0;
border:  1px solid rgba(72, 126, 176, 0.5);
border-top: none;
`
export const StyledMenuItem = styled.div`
padding: 10px;
:hover{
    background: #f1f2f6;
}
` 


/* -----------styles for other titles ---------- */


export const StyledSecondTitle = styled.h2`
font-size: ${props => props.size || '22px'};
`

/* ----------- styles for worker info */

export const StyledTripSpan = styled.span`
font-size: ${props => props.size || '18px'};
font-weight: ${props => props.weight || '400'};
`

// styles for add button

export const StyledAddButton = styled.button`
padding: 5px 10px;
margin: 25px 0 0;
background-color: #b2bec3;
color: #fff;
font-size: 18px;
border: none;
border-radius: 5px;
cursor: pointer;
outline: none;
:hover{
    background: lightblue;
}
`