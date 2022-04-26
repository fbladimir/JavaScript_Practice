//Data fetching 

//API = application programming interface - access the data from 

//callback - have js wait the 2 seconds that we put in setTimeout 

console.log('Fetching.....'); 


const fetchUser = (username, callback) => { 
    setTimeout(() => {
        console.log('Now we have the user'); 
        callback({ username}); 

    }, 2000); 
}

const fetchUserPhotos = (username, callback) => { 
    setTimeout(() => { 
        console.log(`Now we have the photos for ${username}`); 
        callback(['Photo1', 'PHoto2']); 
    }, 2000); 
}
// { username: 'Mikky' }

const fetchPhotoDetails = (photo, callback) => { 
    setTimeout(() => { 
        console.log(`Now we have the photo details for the ${photo}`); 
        callback('details...');         
    }, 2000); 
}

const user = fetchUser('Mikky', (user) => { 
    console.log(`Your name is: ${user.username}`); 

    fetchUserPhotos(user.username, (userPhotos) =>  {
        console.log(`your photos are: ${userPhotos}`); 
    }); 

    fetchPhotoDetails(userPhotos[0], (details) => { 
        console.log(`your photo details are: ${details}`); 
        
    })
}); 






