var rect = require('./rectangle')
    
    
function solveRect(l,b) {

    rect(l,b,(err,rectangle) => {
        if(err){
            console.log("Error: ",err.message)
        }else {
            console.log("area of rectangle ",rectangle.area())
        }
    })
    console.log('after rect call')
}

solveRect(2,4);