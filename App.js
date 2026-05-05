import React from "react";
import { View, ScrollView } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";

// --- 1. Definição do Design System (Theme) ---
const theme = {
  colors: {
    primary: "#6200EE",
    secondary: "#03DAC6",
    background: "#FFFFFF",
    text: "#121212",
    muted: "#757575",
    cardBg: "#F5F5F5",
    border: "#E0E0E0",
  },
  spacing: {
    sm: 8,
    md: 16,
    lg: 24,
  },
};

// --- 2. Styled Components (Typography, Button, Card) ---

// Typography
const H1 = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.sm}px;
`;

const H2 = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 4px;
`;

const Body = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  line-height: 22px;
`;

const Caption = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.colors.muted};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

// Card com prop dinâmica $spacing
const Card = styled.View`
  background-color: ${(props) => props.theme.colors.cardBg};
  border-radius: 12px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.border};
  padding: ${(props) => props.$spacing || props.theme.spacing.md}px;
  margin-vertical: 8px;
`;

// Button
const StyledButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 14px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

// --- 3. Componente Principal ---

const DesignSystemScreen = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ScrollView contentContainerStyle={{ padding: 20 }}>
          <Caption>Exercício 08</Caption>
          <H1>Design System</H1>

          <Body>
            Este é um exemplo de componentes que consomem um tema centralizado
            via ThemeProvider.
          </Body>

          {/* Card com padding padrão do tema (16px) */}
          <Card>
            <H2>Card Padrão</H2>
            <Body>O padding deste card é definido pelo tema (md).</Body>
            <StyledButton>
              <ButtonText>Ação Principal</ButtonText>
            </StyledButton>
          </Card>

          {/* Card com padding customizado via prop $spacing (32px) */}
          <Card $spacing={32}>
            <H2>Card Espaçado</H2>
            <Body>
              Este card usa a prop $spacing para forçar um padding de 32px
              externamente.
            </Body>
          </Card>

          <Card $spacing={8}>
            <Caption>Nota de rodapé</Caption>
            <Body>Card com espaçamento reduzido ($spacing=8).</Body>
          </Card>
        </ScrollView>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export default DesignSystemScreen;
