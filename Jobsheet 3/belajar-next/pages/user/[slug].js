import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UserDetail = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (slug) {
            fetch(`https://jsonplaceholder.typicode.com/users/${slug}`)
                .then((res) => res.json())
                .then((data) => {
                    setUser(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching user:", error);
                    setLoading(false);
                });
        }
    }, [slug]);

    if (!user || Object.keys(user).length === 0) return <h1>User tidak ditemukan</h1>;

    return (
        <div>
            <h1>Detail User</h1>
            <h2>User ID = {user.id}</h2>
            <h2>{user.name}</h2>
            <h3>Username: {user.username}</h3>
            <h3>Email: {user.email}</h3>
            <h3>Phone: {user.phone}</h3>
            <h3>Website: {user.website}</h3>
            <h3>Address: {user.address.street}, {user.address.city}</h3>
        </div>
    );
};

export default UserDetail;
