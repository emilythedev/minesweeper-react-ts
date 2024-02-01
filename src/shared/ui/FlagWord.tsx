import styled from 'styled-components'

const FlagChar = styled.span`
  font-style: italic;
  font-weight: bold;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.colors.black};
  padding: 0 0.4em 0 0.4em;
  margin-right: 2px;
  font-size: 1.1em;
`

interface Props {
  plural?: boolean
}

const FlagWord = ({plural}: Props) => {
  return (
    <>
      <FlagChar>F</FlagChar><span>lag{plural?'s':''}</span>
    </>
  )
}

export default FlagWord
