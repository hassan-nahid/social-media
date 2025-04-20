import React from 'react'
import { useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.config';

const Home = () => {
    const [signOut] = useSignOut(auth);


    const handleLogout = async () => {
        await signOut();
    }

    return (
        <div>Home

            <button onClick={handleLogout} className="h-[55px] w-[100px] bg-black text-white mt-7 text-2xl font-light">logout</button>

        </div>
    )
}

export default Home