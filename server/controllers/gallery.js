const path = require('path');

exports.createGallery = (req,res,next) => {
   
    if(req.files.length == 0){
        return res.status(422).json({
            message : req.fileValidationError ? req.fileValidationError : 'Nessun immagine allegata...'
        });
    }

    res.status(201).json({ 
        messages : 'Success Operation'
    });
};
