import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllCoach = () => {
    const { data: coaches, isLoading } = useQuery({
        queryKey: ['coaches'],
        queryFn: async () => {
            try {
                const res = fetch('http://localhost:5000/coaches');
                const data = await (await res).json();
                return data;
            }
            catch (error) {

            }
        }
    })

    if (isLoading) {
        return <progress className="progress w-56"></progress>
    }

    return (
        <div>
            <h2 className='text-3xl my-4'>All Coach</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialist</th>
                            <th>Control</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            coaches.map((coach, i) => <tr key={coach._id}>
                                <th>{i + 1}</th>
                                <td>{coach.name}</td>
                                <td>{coach.email}</td>
                                <td>{coach.specialist}</td>
                                <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCoach;