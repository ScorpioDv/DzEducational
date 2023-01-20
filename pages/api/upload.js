/*
export const config = {
  api: {
    bodyParser: false,
  },
};

const CLIENT_ID = "994026496926-ai0rn620vbbdf1mrhljh7erhkbe1ld4c.apps.googleusercontent.com"
const CLIENT_SECRET = "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"
const REDIRECT_URI = "https://developers.google.com/oauthplayground"
const REFRESH_TOKEN = "1//04szPXarJi53hCgYIARAAGAQSNwF-L9IrL2rF_HvKZ90sUkkVSHMcF1IzDU8iaSjfP4hfVr2HBQtQ_DF3wEiaem5ThLT6QGv4un4"
let files = []

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})
const drive = google.drive({
  version: 'v3',
  auth: oauth2Client,
})

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public')
  },
  filename: (req, file, cb) => {

    cb(null, file.fieldname + "_" + Date.now() + ".jpg")
    files.push(file)
    console.log(file)
  },
})
const upload = multer({ storage }).single('file')


export default (req, res) => {

  upload(req, res, async (error) => {
    const filePath = path.join(__dirname, 'public', req.file.filename);

    try{
      const response = await drive.files.create({
        requestBody:{
          name:'shit.png',
          mimeType:'image/png'
  
        },
        media:{
          mimeType:'image/png',
          body: fs.createReadStream(filePath),
        }
      })
      console.log(response)
    }catch (err){
      console.log(err)
    }
    console.log(files)
    if (error) {
      return res.send({
        success: false,
        message: error,
      })
    }
    return res.send({
      success: true,
      url: `/${req.file}`,
    })
  })
}
*/
/*import { google } from 'googleapis';
import fs from 'fs';
import multer from 'multer';
import path from 'path';


export const config = {
  api: {
    bodyParser: false,
  },
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + ".jpg");
    console.log(file);
  },
});

const upload = multer({ storage }).single('file');

export default (req, res) => {
  const CLIENT_ID = "994026496926-ai0rn620vbbdf1mrhljh7erhkbe1ld4c.apps.googleusercontent.com";
  const CLIENT_SECRET = "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";
  const REDIRECT_URI = "https://developers.google.com/oauthplayground";
  const REFRESH_TOKEN = "1//04szPXarJi53hCgYIARAAGAQSNwF-L9IrL2rF_HvKZ90sUkkVSHMcF1IzDU8iaSjfP4hfVr2HBQtQ_DF3wEiaem5ThLT6QGv4un4";

  const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );

  oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN});
  const drive = google.drive({
    version: 'v3',
    auth: oauth2Client,
  });
  try {
    upload(req, res, async (error) => {
      if (error) {
        console.error(error);
        return res.status(400).send({
          success: false,
          message: error,
        });
      }
  
      const filePath = path.join(__dirname, 'public', req.file.filename);
      const media = {
        mimeType: 'image/png',
        body: fs.createReadStream(filePath),
      };
      const response = await drive.files.create({
        requestBody: {
          name: 'shit.png',
          mimeType: 'image/png',
        },
        media,
      });
      console.log(response);
      return res.send({
        success: true,
        url: `/${req.file}`,
        response,
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: error,
    });
  }
}*/

import { google } from "googleapis";
import fs from "fs";
import multer from "multer";
import express from "express";
import { type } from "os";

const CLIENT_ID = "994026496926-ai0rn620vbbdf1mrhljh7erhkbe1ld4c.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "1//04xiwZXq2gwmuCgYIARAAGAQSNwF-L9Irz02pnD0bEb-7ELb-X05IvyzjiCdWMRSooTamvC0SMdj6Ja3d6lJJqmr4XGcIbh_cFd0";
let urlVar = ""
let downloadUrlVar = ""
const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
const drive = google.drive({
  version: "v3",  
  auth: oauth2Client,
});

export const config = {
  api: {
    bodyParser: false,
  },
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + ".jpg")
  },
})
const upload = multer({ storage }).single('file')


export default (req, res) => {
  upload(req, res, async (error) => {
    if(req.file){
      const response = await drive.files.create({
        requestBody: {
          name: req.file.originalname,
          mimeType: req.file.mimetype,
        },
        media: {
          mimeType: req.file.mimetype,
          body: fs.createReadStream(req.file.path),
        },
      });
      console.log(response.data);
      const fileId = response.data.id;
      await drive.permissions.create({
        fileId,
        requestBody:{
          role: 'reader',
          type: 'anyone',
        }
      })
  
      const result =  await drive.files.get({
        fileId,
        fields: 'webViewLink, webContentLink',
      });
      console.log(result.data)
      urlVar = result.data.webViewLink
      downloadUrlVar = result.data.webContentLink
    }
   

  
    if (error) {
      return res.send({
        success: false,
        message: error,
      })
    }
    return res.send({
      success: true,
      url: urlVar,
      downloadUrl: downloadUrlVar
    })
    
  })
}
/*

import { google } from 'googleapis';
import path from 'path';
import fs from 'fs';
import multer from 'multer'
const CLIENT_ID = "994026496926-ai0rn620vbbdf1mrhljh7erhkbe1ld4c.apps.googleusercontent.com"
const CLIENT_SECRET = "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"
const REDIRECT_URI = "https://developers.google.com/oauthplayground"
const REFRESH_TOKEN = "1//04szPXarJi53hCgYIARAAGAQSNwF-L9IrL2rF_HvKZ90sUkkVSHMcF1IzDU8iaSjfP4hfVr2HBQtQ_DF3wEiaem5ThLT6QGv4un4"

export default async function uploadFile() {

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
)

oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})
const drive = google.drive({
  version: 'v3',
  auth: oauth2Client,
})
const filePath = path.join(__dirname, "../../public/images/download-xxl.png")

async function uploadFile(){
  try{
    const response = await drive.files.create({
      requestBody:{
        name:'shit.png',
        mimeType:'image/png'

      },
      media:{
        mimeType:'image/png',
        body: fs.createReadStream(filePath)
      }
    })
    console.log(response)
  }catch (err){
    console.log(err)
  }
} 
}

/*
const storage = multer.memoryStorage();
const upload = multer({ storage });

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});

export default async function fileUploadMiddleware(req, res, next) {
  try {
    // Get the file from the request body
    const file = req.body;
    // Convert the file to a buffer
    const buffer = Buffer.from(file.buffer);

    // Create a readable stream from the buffer
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null);

    // Upload the file to Google Drive
    const response = await drive.files.create({
      requestBody: {
        name: file.originalname,
        mimeType: file.mimetype,
      },
      media: {
        mimeType: file.mimetype,
        body: stream,
      },
    });
    res.send({
      message: "File uploaded successfully",
      fileId: response.data.id,
    });
  } catch (error) {
    // Send a response with the error message
    res.status(500).send({
      message: "Error uploading file",
      error: error.message,
    });
  }
};

/*import { google } from "googleapis";
import multer from "multer";
import path from "path";
import fs from "fs";

// Set up multer to handle file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Set up OAuth2 client
const CLIENT_ID = "994026496926-ai0rn620vbbdf1mrhljh7erhkbe1ld4c.apps.googleusercontent.com"
const CLIENT_SECRET = "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"
const REDIRECT_URI = "https://developers.google.com/oauthplayground"
const REFRESH_TOKEN = "1//04szPXarJi53hCgYIARAAGAQSNwF-L9IrL2rF_HvKZ90sUkkVSHMcF1IzDU8iaSjfP4hfVr2HBQtQ_DF3wEiaem5ThLT6QGv4un4"

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);


// Initialize Google Drive API client
const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});

export default async (req, res) => {
  try {
    // Get the file from the request body
    const file = req.file;
    const filename = req.file.originalname;

    // Convert the file to a buffer
    const buffer = file.buffer;

    // Create a readable stream from the buffer
    const stream = new fs.ReadStream(buffer);

    // Upload the file to Google Drive
    const response = await drive.files.create({
      requestBody: {
        name: filename,
        mimeType: file.mimetype,
      },
      media: {
        mimeType: file.mimetype,
        body: stream,
      },
    });

    // Send a response
    res.send({
      message: "File uploaded successfully",
      fileId: response.data.id,
    });
  } catch (error) {
    // Send a response with the error message
    res.status(500).send({
      message: "Error uploading file",
      error: error.message,
    });
  }
};*/