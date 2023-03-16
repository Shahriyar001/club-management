import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddPlayer = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();


    const handleAddPlayer = data => {
        console.log(data);
        const player = {
            name: data.name,
            email: data.email,
            position: data.position
        }

        fetch('http://localhost:5000/players', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(player)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${data.name} is added successfully`);
                navigate('/dashboard/allplayer')
            })

    }

    return (
        <div className='w-96 p-7'>
            <h2 className='text-4xl'>Add A Player</h2>
            <form onSubmit={handleSubmit(handleAddPlayer)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type="text" {...register("name",
                        { required: "Name is required" }
                    )} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type="email" {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Position</span></label>
                    <input type="text" {...register("position", { required: true })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Player" type="submit" />
                {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
            </form>
        </div>
    );
};

export default AddPlayer;