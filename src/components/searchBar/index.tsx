import React from 'react'
import { Container } from './styled'
import { Segment, Input } from 'semantic-ui-react';

const searchBar = () => {

  const pesquisaTermo = (e: KeyboardEvent) => {
    if(e.key === 'Enter'){
      const input = e.target as HTMLInputElement
      console.log(input.value)
    }
  }

  return (
    <Container>
      <Segment stacked>
        <Input 
          icon='search' 
          onKeyDown={(e: KeyboardEvent) => 
            pesquisaTermo(e)
          } 
          size='large' 
          placeholder='Search ...'
        />
      </Segment>
    </Container>
  )
}

export default searchBar;