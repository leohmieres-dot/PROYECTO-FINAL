const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = (authHeader && authHeader.split(' ')[1]) || req.cookies.token;

    if (!token) {
        if (req.headers.accept && req.headers.accept.includes('text/html')) {
            return res.redirect('/login');
        }
        return res.status(401).json({ error: 'Acceso denegado. No hay token.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'JWT_SECRET');
        
        req.user = decoded; 
        
        next(); 
    } catch (error) {
        res.clearCookie('token');
        
        if (req.headers.accept && req.headers.accept.includes('text/html')) {
            return res.redirect('/login');
        }
        res.status(403).json({ error: 'Token inválido o expirado.' });
    }
};

module.exports = verificarToken;