import React from 'react';



const ReviewTable = (props) => {

    return (
        <div class="container">
            <table class = "table">
                <button>Add</button>
                <tbody>
                    { props.hotelList.map((eachData, index)=>{
                        return <tr key={index}>
                            <td>{eachData.hotelName}</td>
                            <td>{eachData.location}</td>
                            <td>{eachData.ratings}</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );

}

export default ReviewTable;