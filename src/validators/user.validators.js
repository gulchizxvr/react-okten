import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().regex(/^[A-ZА-яЇЄІ]\s[A-ZА-яЇЄІ]$/).required().messages({'string.pattern.base':'Два слова з великої букви'})
})

export {userValidator}