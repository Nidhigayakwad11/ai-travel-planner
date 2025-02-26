import { db } from '@/service/firebaseConfig';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import UserTripCard from './components/UserTripCard';

function MyTrips() {
    const navigate = useNavigate();
    const [userTrips, setUserTrips] = useState([]);

    useEffect(() => {
        const fetchUserTrips = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (!user) {
                navigate('/');
                return;
            }
            
            try {
                const q = query(collection(db, 'AiTrips'), where('userEmail', '==', user.email));
                const querySnapshot = await getDocs(q);
                const trips = querySnapshot.docs.map(doc => doc.data()); 
                setUserTrips(trips);
            } catch (error) {
                console.error("Error fetching trips:", error);
            }
        };

        fetchUserTrips();
    }, [navigate]); // Adding `navigate` as a dependency to prevent stale closure issues

    return (
        <div className='px-5 mt-12 sm:px-10 md:px-32 lg:px-56 xl:px-72'>
            <h2 className='font-bold text-3xl mb-10'>My Trips</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-5 my-3'>
                {userTrips.length > 0 ? (
                    userTrips.map((trip, index) => (
                        <UserTripCard trip={trip} key={index} />
                    ))
                ) : (
                    Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className='h-[200px] w-full bg-slate-200 animate-pulse rounded-xl'></div>
                    ))
                )}
            </div>
        </div>
    );
}

export default MyTrips;

