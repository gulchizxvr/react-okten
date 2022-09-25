import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().regex(/^[A-Z][a-z]+(\s|,)[A-Z][a-z]{1,19}/).required().messages({'string.pattern.base':'Два слова з великої букви'})
})

export {userValidator}