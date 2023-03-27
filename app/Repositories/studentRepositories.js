exports.getAll = async (req, res) => {
    try {
        await res.json({ name: 'phat' })
    } catch (error) {
        res.json({ message: 'have some err' })
    }
}
