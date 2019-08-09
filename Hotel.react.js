import React from 'react';
import ReviewTable from '../ReviewTable/ReviewTable.react';



class Hotel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotelList:[]
        }
    }

    componentDidMount(){
        let url = "http://localhost:3000/hotel"
        fetch(url)
        .then(res => res.json())
        .then(hotelList => this.setState({hotelList}))
    }

    render() {
        return (
            <div >
                <ReviewTable hotelList={this.state.hotelList}></ReviewTable>
            </div>
        );
    }
}

export default Hotel;