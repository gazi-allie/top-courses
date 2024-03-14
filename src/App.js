import React from 'react';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import Spinner from './Components/Spinner';
import { apiUrl, filterData } from './data.js';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
 const [category, setCategory] = useState(filterData[0].title);

   

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        console.log(apiUrl);
        const res = await fetch(apiUrl);
        const outPut = await res.json();
        console.log('output', outPut.data);
        setCourses(outPut.data);
      } catch (error) {
        // const toeasty = error.message
        // toast.error(toeasty)
        toast.error('some thing went wrong');
        console.log('toeasty');
      }
      setLoading(false); 
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex-col flex bg-bgDark2">
      <div>
      <Navbar />
      </div>
      <div className="bg-bgDark2">
      <Filter filterData={filterData} 
      category={category} 
      setCategory={setCategory} />
      </div>
      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
      {
        loading? <Spinner /> :<Cards courses={courses} category={category} />
}
</div>
    </div>
  );
};
export default App;
