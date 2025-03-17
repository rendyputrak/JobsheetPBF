import React from "react";

const User = ({ users }) => {
    return (
        <div>
            <h1>User yang Terdaftar</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <h2>{user.username}</h2>
                    <h2>{user.email}</h2>
                    <h2>{user.phone}</h2>
                    <h2>{user.website}</h2>
                    <h2>{user.address.street}</h2>
                </div>
            ))}
        </div>
    );    
};

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return{
        props: {
            users,
        },
    };
}

export default User;