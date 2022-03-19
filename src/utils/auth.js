import bcrypt from "bcrypt";

export default function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
}

export function checkAuthenticated(req, res, next) {
    if (!req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
}

//not sure m8
export function checkIsAdmin(req, res, next) {
    
}