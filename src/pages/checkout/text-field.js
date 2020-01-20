import React from 'react'
import t from 'prop-types'
import {
  Grid,
  TextField as MaterialTextField
} from '@material-ui/core'

function TextField ({ xs, autoFocus, ...props }) {
  return (
    <Grid item xs={xs}>
      <MaterialTextField
        variant='outlined'
        fullWidth
        inputProps={{
          autoFocus
        }}
        {...props}
      />
    </Grid>
  )
}

TextField.propTypes = {
  xs: t.number,
  autoFocus: t.bool
}

export default TextField
