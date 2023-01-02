import styled from "styled-components/native";

export const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-radius: ${(props) => props.theme.sizes[3]};
  align-items: center;
  flex: 1;
`;
export const StyledButton = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  padding-top: ${(props) => props.theme.sizes[2]};
  padding-bottom: ${(props) => props.theme.sizes[2]};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.inverse};
`;
export const StyledButtonView = styled.View`
  padding: ${(props) => props.theme.sizes[4]};
  flex-direction: row;
`;
