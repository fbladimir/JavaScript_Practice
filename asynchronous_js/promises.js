//Promises 

// const fetchUser = new Promise((resolve, reject) => { 
//     setTimeout(() => { 
//         console.log('[Now we have the user]'); 

//         reject('user not found'); 

//         //resolve({ username: 'Michael' }); 
//     }, 2000); 
// }); 

const fetchUser = (username) => { 
    return new Promise((resolve, reject) => { 
        setTimeout(() => { 
            console.log('[Now we have the user]'); 

            resolve({ username }); 
        }, 2000); 

    }); 

} 

const fetchUserPhotos = (username) => { 
    return new Promise( (resolve, reject) => { 
        setTimeout(() => { 
        console.log(`Now we have the photos for ${username}`); 
        resolve(['Photo1', 'PHoto2']); 
        }, 2000); 
    }); 

} 

// { username: 'Mikky' }

const fetchPhotoDetails = (photo) => { 
    return new Promise( (resolve, reject) => {  
        setTimeout(() => { 
        console.log(`Now we have the photo details for the ${photo}`); 
        resolve('details...');         
        }, 2000); 
    });
}  

fetchUser('Michael').then( (user) => fetchUserPhotos(user.username))
    .then( (photos) => fetchPhotoDetails(photos[0]))
    .then( (details) => fetchPhotoDetails()); 


//NOT USING THIS ANYMORE WITH PROMISES THIS IS USING CALL BACKS 
// const user = fetchUser('Mikky', (user) => { 
//     console.log(`Your name is: ${user.username}`); 

//     fetchUserPhotos(user.username, (userPhotos) =>  {
//         console.log(`your photos are: ${userPhotos}`); 
//     }); 

//     fetchPhotoDetails(userPhotos[0], (details) => { 
//         console.log(`your photo details are: ${details}`); 
        
//     })
// }); 
//we have access to new methods: that, then, catch 
//fetchUser.then( (user) => { console.log(user.username)}); 
//fetchUser.catch((error) => console.log(error)); 
