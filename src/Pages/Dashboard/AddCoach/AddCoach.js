import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddCoach = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();


    const handleAddCoach = data => {
        console.log(data);
        const coach = {
            name: data.name,
            email: data.email,
            specialist: data.specialist
        }

        fetch('http://localhost:5000/coaches', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coach)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${data.name} is added successfully`);
                navigate('/dashboard/allcoach')
            })


    }


    return (
        <div className='w-96 p-7'>
            <h2 className='text-4xl'>ADD A COACH</h2>
            <form onSubmit={handleSubmit(handleAddCoach)}>
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
                    <label className="label"><span className="label-text">Specialist</span></label>
                    <input type="text" {...register("specialist", { required: true })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Coach" type="submit" />
                {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
            </form>
        </div>
    );
};

export default AddCoach;