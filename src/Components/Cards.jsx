import React from "react";
import Card from "./Card";

const Cards = ({ courses, category }) => {
    console.log("courses", courses);
    console.log("courses", category);
    const [likedCourses, setLikedCourses] = React.useState([]);

    function getCourses() {
        if (category === "All") {
            let allCourse = [];
            Object.keys(courses).map((category) =>
                courses[category].map((course, index) => (
                    allCourse.push(course)
                ))
            )
            return allCourse;

        }
        else {

            return courses[category];
        }
    }
        return (

            <div className="flex flex-wrap justify-center gap-4 mb-4">
                {
                getCourses().map((course, index) => (
                            <Card key={course.id} course={course}
                                likedCourses={likedCourses}
                                setLikedCourses={setLikedCourses} />
                        ))
                    }
            </div>
        )
    }



    export default Cards