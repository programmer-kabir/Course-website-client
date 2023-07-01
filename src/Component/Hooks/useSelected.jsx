import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useSelected = () => {
  // const token = localStorage.getItem('access-token')
  const [axiosSecure] = useAxiosSecure()
    const {user, loading} = useAuth()
    // console.log(user.email);
    const {refetch, data: bookData = []} = useQuery({
        queryKey: ["bookDatas", user?.email],
        enabled:!loading,
        // queryFn:async()=>{
        //   const res = await fetch(`${import.meta.env.VITE_LOCALHOST_KEY}/book?email=${user?.email}`,{
        //     headers:{
        //       authorization:`berar ${token}`
        //     }
        //   });
        //   return res.json();
        // }
        queryFn:async()=>{
          const res = await axiosSecure(`/book?email=${user?.email}`);
          // console.log('res from axios', res);
          return res.data;
        }
      })
      return [bookData,refetch]
};

export default useSelected;