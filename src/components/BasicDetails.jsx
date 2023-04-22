import Grid from '@mui/material/Grid';
import Wrapper from './Wrapper';

export default function BasicDetails() {
    return (
        <Wrapper>
            <Grid item className='basic-details' xs={7}>
                <div className="card">
                    <h2>145</h2>
                    <p>Open Jobs</p>
                </div>
                <div className="card">
                    <h2>75</h2>
                    <p>Hired</p>
                </div>
                <div className="card revenue-card">
                    <p>Revenue</p>
                    <div className="wrap">
                        <p>Temp to Hire</p>
                        <h6>$183,000</h6>
                    </div>
                    <div className="wrap">
                        <p>Temp to Hire</p>
                        <h6>$183,000</h6>
                    </div>
                    <div className="wrap">
                        <p>Temp to Hire</p>
                        <h6>$183,000</h6>
                    </div>
                    <div className="wrap">
                        <p>Temp to Hire</p>
                        <h6>$183,000</h6>
                    </div>
                </div>
                <div className="card">
                    <h2>50</h2>
                    <p>Offers</p>
                </div>
                <div className="card">
                    <h2>130</h2>
                    <p>Interviews</p>
                </div>
                <div className="card gradient-box">
                    <h2>4.1 weeks</h2>
                    <p>Time To Hire</p>
                </div>
            </Grid>
            <Grid item xs={5}>
                <div className="card">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, fugit vel consectetur fugiat debitis optio dignissimos doloribus recusandae minima tempora! Nostrum ut laudantium quas temporibus fugiat voluptatibus deserunt in minus.</p>
                </div>
               
            </Grid>
        </Wrapper>
    )
}
