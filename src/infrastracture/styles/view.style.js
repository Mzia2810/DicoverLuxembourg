import styled from "styled-components/native";

import { SafeAreaView, StatusBar } from "react-native";

export const StyledImage = styled.Image`
  flex: 1;
`;

export const StyledView = styled.View`
  padding: ${(props) => props.theme.sizes[1]};
`;

export const SafeArea = styled(SafeAreaView)`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`}px;
`;
