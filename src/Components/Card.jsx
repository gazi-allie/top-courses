import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = ({ course, likedCourses, setLikedCourses }) => {



    function clickhandler() {
        if (likedCourses.includes(course.id)) {
            setLikedCourses(likedCourses.filter(id => id !== course.id));
            toast.warning("Removed from liked courses");
        } else {
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
            } else {
                setLikedCourses((prev) => [...prev, course.id]);

            }
            toast.success("You have liked this course");
        }
    }
    return (


        <div className=" w-[300px] bg-bgDark bg-opacity-75 rounded-md overflow-hidden">

            <div className="relative">
                <img src={course.image.url} alt="Course Image" className='' />
                <div className="rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center">
                    <button onClick={clickhandler}>
                        {
                            likedCourses.includes(course.id) ? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" />
                        }
                    </button>

                </div>
            </div>

            <div className='p-4'>

                <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
                <p className="mt-2 text-white">
                {
                    course.description.length > 100 ? (course.description.substr(0, 100)) + "..." :
                        (course.description)

                }</p>
            </div>
        </div>
    )
}

export default Card;