import React, { useState, useEffect} from 'react';
import uuid from 'uuid';
import config from './config';

const useStorage = value => {
 const randomId = `${config.key}-${uuid.v4()}`;
 const [store, setStore] = useState(
	localStorage.getItem(randomId) || ''
 );	

 useEffect(()=>{
	localStorage.setItem(randomId, value);
 }, [value]);

 return [store, setStore];
};

export default useStorage;
