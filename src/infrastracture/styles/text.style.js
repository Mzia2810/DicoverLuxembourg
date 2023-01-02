import styled from "styled-components/native";

export const StyledTitle = styled.Text`
  width: 350px;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.h3};
  padding-top: ${(props) => props.theme.sizes[2]};
  margin-bottom: ${(props) => props.theme.sizes[2]};
  color: ${(props) => props.theme.colors.text.primary};
  align-self: center;
  text-align: center;
`;

export const StyledText = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.button};
  padding-top: ${(props) => props.theme.sizes[2]};
  color: ${(props) => props.theme.colors.text.secondary};
  width: ${(props) => props.theme.sizes[6]};
  align-self: center;
  text-align: center;
`;
