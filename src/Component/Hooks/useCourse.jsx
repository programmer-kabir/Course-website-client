import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useCourse = () => {
    const {refetch, data: course = [], isLoading:loading} = useQuery({
        queryKey: ["course"],
        queryFn:async()=>{
          const res = await fetch(`${import.meta.env.VITE_LOCALHOST_KEY}/course`);
          return res.json(
          );
        }
      })
      return [course,loading,refetch]
};

export default useCourse;