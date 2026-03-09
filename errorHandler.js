const errorHandler = (err, req, res, next) => {
    console.log("Oru error vandhuruchu boss!");

    // 1. Error status code set panrom (Default 500 - Server Error)
    const statusCode = err.statusCode || 500;

    // 2. Error message ready panrom
    const message = err.message || "Something went wrong on the server!";

    // 3. JSON format-la response anupuroam
    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: message,
        // Development-la mattum full error stack trace-ah kaaturom
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    });
};

module.exports = errorHandler;
