import React, { Component } from 'react'

export default class LifeCycleHook2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [
                {
                    "id": 1,
                    "name": "ChDAAAAA.....",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "address": {
                        "street": "Kulas Light",
                        "suite": "Apt. 556",
                        "city": "Gwenborough",
                        "zipcode": "92998-3874",
                        "geo": {
                            "lat": "-37.3159",
                            "lng": "81.1496"
                        }
                    },
                    "phone": "1-770-736-8031 x56442",
                    "website": "hildegard.org",
                    "company": {
                        "name": "Romaguera-Crona",
                        "catchPhrase": "Multi-layered client-server neural-net",
                        "bs": "harness real-time e-markets"
                    }
                },],
        }
    }
    getUsers = async () => {
        const users = await fetch('https://jsonplaceholder.typicode.com/users');
        const finalData = await users.json();
        this.setState({ users: [users ,...finalData] });
    }
    componentDidMount() {
        this.getUsers();
    }
    render() {
        return (
            <>
                <h3 className='text-center'>UsersList</h3>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>city</th>
                            <th>ZipCode</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.users.map((user, ind) => {
                            return <tr key={ind}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.address.city}</td>
                                <td>{user.address.zipcode}</td>
                            </tr>
                        })
                        }
                    </tbody>

                </table>

            </>
        )
    }
}
