import React, { useEffect, useState } from 'react';
import useCourse from './useCourse';

const useLength = () => {
    const [loading, setLoading] = useState(true);
  const [course, , refetch] = useCourse();
  const [coursesToShow, setCoursesToShow] = useState([]);

  useEffect(() => {
    setLoading(true);
    refetch().then(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setCoursesToShow(course.slice(0, 6));
  }, [course]);
    return [coursesToShow,loading]
};

export default useLength;