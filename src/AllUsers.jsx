import { useEffect, useState } from "react"


export default function AllUsers() {
	const [Users, setUsers] = useState([]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts`)
		.then(res => res.json())
		.then(data => setUsers(data))
	}, [])

	return (
		<div>
			<h3>Users: {Users.length}</h3>
			{
				Users.map(user => {
                    return (
                        <div key={user.id}>
                            <h3>post review: {user.title}</h3>
                        </div>
                    )
                })
			}
		</div>
	)
}