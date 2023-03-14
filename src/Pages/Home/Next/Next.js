import React from 'react';
import img1 from "../../../assets/images/hanover.jpg";
import img2 from "../../../assets/images/Borcelie.png";
import img3 from "../../../assets/images/eagle.png";
import img4 from "../../../assets/images/Generic.png";
import img5 from "../../../assets/images/legend.png";
import img6 from "../../../assets/images/soccer.jpg";

const Next = () => {
    return (
        <div className='flex justify-center py-10' style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQTKRWxqskBXPKXvSsUV6gAaqk9sW6fyr2g&usqp=CAU")` }}>
            <div>
                <div className='text-center bg-blue-500 py-3 my-2 text-white'>
                    <h4 className='text-xl'>Next Match</h4>
                </div>
                <div className='flex justify-center'>
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 10 }}>10</span>
                            </span>
                            days
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 10 }}></span>
                            </span>
                            hours
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 12 }}></span>
                            </span>
                            min
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 24 }}></span>
                            </span>
                            sec
                        </div>
                    </div>
                </div>
                <div className='flex justify-center my-2 py-3 bg-slate-800'>
                    <img src={img1} className="w-20" alt="" />
                    <h2 className='text-3xl mx-4 mt-5  text-white'>VS</h2>
                    <img src={img2} className="w-20" alt="" />
                </div>
                <div className='text-center bg-slate-600 py-2'>
                    <p className='text-white'>March 29, 2021 | 10:50 am <br /> Green park</p>
                </div>
            </div>
            <div className='mx-6 w-96'>
                <div className='text-center bg-blue-500 py-3 my-2 text-white'>
                    <h4 className='text-xl'>UPCOMING FIXTURES</h4>
                </div>
                <div className='flex justify-center  py-2 bg-slate-800'>
                    <img src={img3} className="w-16" alt="" />
                    <h2 className='text-3xl mx-4 mt-5  text-white'>VS</h2>
                    <img src={img4} className="w-16" alt="" />
                </div>
                <div className='text-center bg-slate-600 py-'>
                    <p className='text-white'>March 29, 2021 | 10:50 am <br /> Green park</p>
                </div>
                <div className='flex justify-center mt-2 py-2 bg-slate-800'>
                    <img src={img5} className="w-16" alt="" />
                    <h2 className='text-3xl mx-4 mt-5  text-white'>VS</h2>
                    <img src={img6} className="w-16" alt="" />
                </div>
                <div className='text-center bg-slate-600 py-'>
                    <p className='text-white'>March 29, 2021 | 10:50 am <br /> Green park</p>
                </div>

            </div>
            <div>
                <div className='text-center bg-blue-500 py-3 my-2 text-white'>
                    <h4 className='text-xl'>Primary</h4>
                </div>
                <div className="overflow-x-auto opacity-60">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>pos</th>
                                <th>Team</th>
                                <th>P</th>
                                <th>W</th>
                                <th>PTS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Titan FC</td>
                                <td>4</td>
                                <td>3</td>
                                <td>9</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hanover FC</td>
                                <td>2</td>
                                <td>1</td>
                                <td>3</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Borcelle</td>
                                <td>4</td>
                                <td>0</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>Legend</td>
                                <td>4</td>
                                <td>0</td>
                                <td>3</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Next;