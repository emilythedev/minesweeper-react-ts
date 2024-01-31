import SelectLevel from "@/features/SelectLevel"
import Tutorial from "@/features/Tutorial"
import styled from "styled-components"

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-weight: bold;
  color: ${props => props.theme.primary};
  background-color: ${props => props.theme.colors.black};
  font-size: 3em;
  letter-spacing: .2em;
`

interface Props {
  onSelect(levelProps: LevelProps): void,
}

function StartPage({onSelect}: Props) {
  return (
    <FlexContainer>
      <Title>Minesweeper</Title>
      <Tutorial />
      <SelectLevel onSelect={onSelect} />
    </FlexContainer>
  )
}

export default StartPage
