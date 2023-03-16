import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BannerCard from './BannerCard';

const Banner = () => {

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

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

    const { data: coaches } = useQuery({
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

    const Cards = [
        {
            id: 1,
            name: "Players",
            img: "https://i.ibb.co/gdLjRJN/player.jpg",
            number: `${players?.length}`
        },
        {
            id: 2,
            name: "Coaches",
            img: "https://i.ibb.co/hfKFmCf/coach.png",
            number: `${coaches?.length}`
        },
        {
            id: 3,
            name: "Mambers",
            img: "https://i.ibb.co/C1Wj6rn/mamber.jpg",
            number: `${users.length}`
        },
        {
            id: 4,
            name: "Earming",
            img: "https://i.ibb.co/D7F2SL3/money.jpg",
            number: 40000
        }

    ]
    return (
        <div className='grid lg:grid-cols-4 gap-4'>
            {
                Cards.map(card => <BannerCard
                    key={card.id}
                    card={card}
                ></BannerCard>)
            }
        </div>
    );
};

export default Banner;