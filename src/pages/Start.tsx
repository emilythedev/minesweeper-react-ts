import SelectLevel from '@/features/SelectLevel'
import Tutorial from '@/features/Tutorial'
import { rotate } from '@/shared/animations'
import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-weight: bold;
  color: ${props => props.theme.primary};
  font-size: 3em;
  letter-spacing: .2em;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 10px;
    right: -25px;
    width: 50px;
    height: 50px;
    background-image: url(/favicon.svg);
    background-size: contain;
    transform-origin: center center;
    animation: 5s linear infinite ${rotate};
  }
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
