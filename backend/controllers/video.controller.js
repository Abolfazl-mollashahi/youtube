import videoModel from "../models/video.model.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

export const uploadVideo = async (req, res) => {
  upload.single("video")(req, res, function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Server error");
    }

    const { title, description, url } = req.body;
    const userId = req.user.id;

    try {
      const video = new videoModel({
        title,
        description,
        url,
        user: userId,
        videoFile: req.file.filename,
      });

      video
        .save()
        .then((savedVideo) => {
          res.status(201).json(savedVideo);
        })
        .catch((err) => {
          console.error(err.message);
          res.status(500).send("Server error");
        });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("server error");
    }
  });
};

export const getVideos = async (req, res) => {
  try {
    const videos = await videoModel.find().populate("user", req.user.id);
    res.status(200).json(videos);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
