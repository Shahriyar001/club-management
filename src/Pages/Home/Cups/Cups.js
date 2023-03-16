import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CupCard from './CupCard';

const Cups = () => {

    const { data: cups, isLoading } = useQuery({
        queryKey: ['cups'],
        queryFn: async () => {
            try {
                const res = fetch('http://localhost:5000/cups');
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
        <div className='mx-3 my-5'>
            <h2 className="text-3xl my-7">AWARDS</h2>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4 my-5'>
                {
                    cups.map(cup => <CupCard
                        key={cup._id}
                        cup={cup}
                    ></CupCard>)
                }
            </div>
        </div>
    );
};

export default Cups;