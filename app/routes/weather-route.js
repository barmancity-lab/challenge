const Router = require('express').Router;
const CheckWeatherController = require('../controllers/check-weather');
const CheckLocationController = require('../controllers/check-location');


const router = Router();
const checkWeatherController = new CheckWeatherController();
const checkLocationController = new CheckLocationController();


router.get(
  '/forecast', checkWeatherController.resolve
);
router.get(
  '/forecast/:city', checkWeatherController.resolve
);

router.get(
  '/current', checkWeatherController.resolve
);

router.get(
  '/current/:city', checkWeatherController.resolve
);

router.get(
  '/location', checkLocationController.get
);


module.exports = router;
