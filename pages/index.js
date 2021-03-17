import React from 'react';

import Grid from '../src/components/foundation/layout/Grid';
import Box from '../src/components/foundation/layout/Box';

export default function Home() {
  return (
    <Grid.Container>
      <Grid.Row>
        <Grid.Column
          offset={{
            md: 2,
          }}
          value={{
            xs: 12,
            md: 8,
          }}
        >
          <Box
            backgroundColor="white"
            height="100vh"
          >
            Test
          </Box>
        </Grid.Column>
      </Grid.Row>
    </Grid.Container>
  );
}
