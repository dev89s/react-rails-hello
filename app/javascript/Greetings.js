import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from './redux/greetings/greetingsSlice';
import style from './style.css'

export default function Greetings() {
  const dispatch = useDispatch();
  const greeting = useSelector((store) => store.greeting)

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [])

  if(greeting.isLoading == true) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h2>A Special Greeting message for you my dear friend:</h2>
      <p className='message'>{greeting.greeting.message}</p>
    </div>
  );
}
