import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../context/AuthProvider';
import MsgCard from './MsgCard';

const Messanger = () => {

    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const { data: messages, isLoading, refetch } = useQuery({
        queryKey: ['messages'],
        queryFn: async () => {
            try {
                const res = fetch('http://localhost:5000/messages');
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

    const handleAddMsg = (data) => {
        console.log(data, user.email);
        const message = {
            email: user.email,
            msg: data.msg
        }

        fetch('http://localhost:5000/messages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(message)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                refetch();
            })

    }

    return (
        <div>
            <div>
                <div className="navbar text-center bg-slate-400">
                    <h2 className='text-white font-bold text-center'>Internal Communucation Chat Box</h2>
                </div>
            </div>
            <div className=' bg-base-100 p-5 mb-10'>
                {
                    messages.map(mssg => <MsgCard
                        key={mssg._id}
                        mssg={mssg}
                    ></MsgCard>)
                }

            </div>
            <div className='mt-10'>
                <form onSubmit={handleSubmit(handleAddMsg)} >

                    <div className='flex'>

                        <div className="form-control w-full">
                            <input type="text" {...register("msg", { required: true })}
                                placeholder="type here" className="input input-bordered w-full" />

                        </div>
                        <div>
                            <input className='btn btn-primary w-20 mb-3 mx-2' value="send" type="submit" />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Messanger;