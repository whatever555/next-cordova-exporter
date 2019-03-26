import React, {SFC} from "react";
import styled from 'styled-components'

const HiddenSVGHolder = styled.div`
display: none;
height: 0;
width: 0;
`

const ---SPRITE_NAME--- = () => (
  <HiddenSVGHolder>
   ---SPRITE_DATA---
  </HiddenSVGHolder>
)


const StyledCommonSprite = styled(CommonSprite)`
    display:none;
    height: 0px;
    width: 0px;
    visibility: hidden;
`;

export default ---SPRITE_NAME---;
