import React from 'react'

const Details = () => {
    return (

        <table border="2" style={{ margin: 'auto', textAlign: 'center' }}>
            <thead>
                <tr>
                    <td colSpan="4">Student Details</td>
                </tr>
                <tr>
                    <td>S No</td>
                    <td>Name</td>
                    <td>Course</td>
                    <td>Year</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Sachin</td>
                    <td>B.Tech IT</td>
                    <td>Final Year</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Rahul</td>
                    <td>B.Tech CSE</td>
                    <td>Final Year</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Rohit</td>
                    <td>B.Tech ECE</td>
                    <td>Final Year</td>
                </tr>
            </tbody>
        </table>
        
    )
}

export default Details
