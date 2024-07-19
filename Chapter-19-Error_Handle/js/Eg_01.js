const ErrorHandle = () => {
    let i = 0
    while(i <= 5){
        try {
            if(i % 2 === 0) {
                throw new Error('This is Even Number')
            } 
            console.log('This is Odd Number');
        } catch(err) {      
            console.error(err.message);    
        } finally {
            console.log('..........finally block')
            i++
         }
    }
}

ErrorHandle() 