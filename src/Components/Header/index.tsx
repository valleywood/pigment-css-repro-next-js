import Grid from '@/Components/Grid'

// NOTE: relative import works
// import Grid from '../Grid'

type HeaderProps = {
  children: React.ReactNode,
}

export const Header = (props: HeaderProps): JSX.Element => (
  <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
    {props.children}
  </Grid>
)
