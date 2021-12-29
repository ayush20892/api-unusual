const originlist = ["https://unusual-ecom.netlify.app", "http://localhost:8000", "http://localhost:3000/"];
const corsOptions = {
  origin: function (origin, callback) {
      if (originlist.indexOf(origin) !== -1 || !origin) {
          callback(null, true);
      } else {
          callback(new Error("Not allowed by CORS"));
      }
  },
  optionsSuccessStatus: 200,
};

module.exports = { corsOptions }