import React , {useContext} from 'react';
import Image from '../components/Image';
import {Context} from '../Context';


const Home = () => {
    const {photos} = useContext(Context)
    const photoEl = photos.map((photo, index) =>{
        return(
            <Image 
            key = {photo.id}
            img = {photo}
            className = {getClass(index)}
        />
        )
    })

    function getClass(i){
        if (i % 5 === 0) {
            return 'big';
        }
        else if (i % 6 === 0) {
            return 'wide'
        }
    }

    return ( 
        <div className='photos'>
            {photoEl}
        </div>
     );
}
 
export default Home;