module.exports = (length,breadth,callback) => {
    if( length <=0 || breadth<=0){
        setTimeout(() =>
        callback(new Error('zero is film not rectangle'),
            null) ,
         2000
    )
    }
    else{
        setTimeout(() =>
        callback(null,{
            perimeter : () => (2*(leangth+breadth)),
            area : () => (length*breadth)
        }),
        2000)
    }

    console.log('after call back')
}

