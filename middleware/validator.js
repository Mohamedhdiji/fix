
const { check ,validationResult} = require("express-validator");

exports.singUpRules = () => [
  check("fullName", "This field is require").notEmpty(),
  check("email", "This field is require").isEmail(),
  check("password", "password should be at least 6 digits and less than 7 digits").isLength({
    min: 6,
    max: 7,
  }),
];

exports.validator=(req,res,next)=>{
    const errors=validationResult(req)
    return errors.isEmpty()?next():res.status(401).json({errors:errors.array()})
}
