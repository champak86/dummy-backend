const handleErrors = (
    error,
    _req,
    res,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
) => {
    res.status(500).json(formatError("Server Error"));
};

const handleMissing = (_req, res) => {
    res.sendStatus(404);
};

module.exports = {
    handleErrors,
    handleMissing
}