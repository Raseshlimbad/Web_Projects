import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Course() {
    const [book,setBook] = useState([])
    useEffect(() =>{
        const getBook = async() => {
            try {
                const res = await axios.get("http://localhost:8001/book");
                console.log(res.data);
                setBook(res.data); 
            } catch (error) {
                console.log(error);
            }
        }
        getBook();
    },[]);

  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
            <div className='mt-28 items-center justify-center text-center '>
                <h1 className='text-2xl md:text-4xl'>
                    We are deligted to have you {" "}
                    <span className='text-pink-500'>Here! :)</span>
                </h1>
                <p className='mt-12'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quidem atque reiciendis id magni consectetur dolorem, a quibusdam tenetur  dolore accusamus blanditiis molestiae dicta suscipit! Nostrum, consectetur facilis, explicabo fugit obcaecati reprehenderit animi distinctio, nam magni unde placeat voluptatibus vero delectus itaque quasi aut minima eius blanditiis. Minus a iure quod illo, corporis quae praesentium qui unde. Voluptatum, enim blanditiis?
                </p>

                <Link to="/">
                    <button className="btn btn-secondary mt-6">Back</button>
                </Link>
            </div>

            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                {
                    book.map((item) =>(
                        <Cards key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Course