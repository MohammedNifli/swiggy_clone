// MainBody.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';

const MainBody = () => {
  const [listofRestaurant, setListofrestaurant] = useState([]);
  const [filterData,setfilterData]=useState([])
  const [searchText,setSearchText]=useState('')

  const fetchData = async () => {
    try {
      const response = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING');
      const cards = response.data?.data?.cards || [];
      const restaurantCards = cards
        .filter(card => card.card?.card?.gridElements?.infoWithStyle?.restaurants)
        .flatMap(card => card.card.card.gridElements.infoWithStyle.restaurants);
      setListofrestaurant(restaurantCards);

      setfilterData(restaurantCards)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("Component mounted");
  }, []);

  const showTopRated = () => {
    console.log("hoo")
    const topRated = listofRestaurant.filter(restaurant => parseFloat(restaurant.info.avgRatingString) >= 4.5);
    setListofrestaurant(topRated);
  };
  const handleSearch=()=>{
    const filter=filterData.filter((res)=>{
        return res.info.name.includes(searchText)
    })
    setListofrestaurant(filter)


  }

  return (
    <div>
     <button onClick={showTopRated} className='bg-blue-400 w-1/4 h-10'>showTopRated</button>

     <input type="text" placeholder='search' className='bg-white border w-1/4 h-10 border-black font-black ml-11' 
     value={searchText}
     onChange={(e)=>{
      setSearchText(e.target.value )
      console.log("body")

     }}   
        />
        <button className='text-white bg-blue-600  h-10 w-24 ml-0'  onClick={handleSearch}>Search</button>

      <div className='flex flex-wrap'>
        {listofRestaurant.length > 0 ? (
          listofRestaurant.map((restaurant, index) => (
            <div key={index} className='bg-white w-56 mt-16 h-80 ml-9 border border-black rounded-2xl p-4 flex flex-col justify-between hover:shadow-2xl'>
              <img
                src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597'
                alt={restaurant.info.name}
                className='w-full h-40 object-cover rounded-lg hover:shadow-lg'
              />
              <div className='mt-2'>
                <h2 className='text-lg font-bold'>{restaurant.info.name}</h2>
                <h3>{restaurant.info.avgRatingString} stars</h3>
                <h3>{restaurant.info.sla.slaString}</h3>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default MainBody;
