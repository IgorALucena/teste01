const controllerHelloWorld = (req,res) =>{
    res.status(200).json({
        status: "Hello World!"
    });
}

module.exports = {controllerHelloWorld};