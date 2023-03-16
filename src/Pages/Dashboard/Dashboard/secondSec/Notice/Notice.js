import { useQuery } from '@tanstack/react-query';
import React from 'react';
import NoticeCard from './NoticeCard';

const Notice = () => {
    const { data: notices, isLoading } = useQuery({
        queryKey: ['notices'],
        queryFn: async () => {
            try {
                const res = fetch('notice.json');
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
        <div className='card bg-base-100 shadow-xl m-5'>
            <h2 className='ml-5 mt-5 font-bold text-2xl'> Notice Board</h2>
            <div>
                {
                    notices.map(notice => <NoticeCard
                        key={notice._id}
                        notice={notice}
                    ></NoticeCard>)
                }
            </div>

        </div>
    );
};

export default Notice;