import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllPlayer = () => {
    const { data: players, isLoading } = useQuery({
        queryKey: ['players'],
        queryFn: async () => {
            try {
                const res = fetch('http://localhost:5000/players');
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
            <h2>all player: {players?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            players.map((player, i) => <tr key={player._id}>
                                <th>{i + 1}</th>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                                <td><button className='btn btn-xs btn-primary'>Pr</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllPlayer;