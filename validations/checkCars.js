const checkMake = (req, res, next) => {
    if (req.body.make) {
        return next();
    } else {
        res.status(400).json({ error: "Make is required" });
    }
};

const checkModel = (req, res, next) => {
    if (req.body.model) {
        return next();
    } else {
        res.status(400).json({ error: "Model is required" });
    }
};

const checkYear = (req, res, next) => {
    if (req.body.year) {
        return next();
    } else {
        res.status(400).json({ error: "Year is required" });
    }
};

const checkPrice = (req, res, next) => {
    if (req.body.price) {
        return next();
    } else {
        res.status(400).json({ error: "Price is required" });
    }
};

const checkLocation = (req, res, next) => {
    if (req.body.location) {
        return next();
    } else {
        res.status(400).json({ error: "Location is required" });
    }
};

module.exports = { checkMake, checkModel, checkYear, checkPrice, checkLocation };
