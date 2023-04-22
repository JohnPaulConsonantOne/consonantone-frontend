import Grid from '@mui/material/Grid';
export default function Wrapper({ children }) {
    return (
        <Grid container spacing={3}>
            {children}
        </Grid>
    )
}
