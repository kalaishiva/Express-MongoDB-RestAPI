//@description -  Get goals
//@routes - GET /api/goals
//@access - private
const getGoals = (req, res) => {
    res.status(200).json({ message: "Get Goals..." })
}

//@description -  Set goal
//@routes - POST /api/goal
//@access - private
const setGoal = (req, res) => {
    res.status(200).json({ message: "Create Goals..." })
}

//@description -  put goal
//@routes - UPDATE /api/goal/:id
//@access - private
const updateGoal = (req, res) => {
    res.status(200).json({ message: `Update Goals ${req.params.id} ...` })
}

//@description -  Delete goal
//@routes - DELETE /api/goal/:id
//@access - private
const deleteGoal = (req, res) => {
    res.status(200).json({ message: `delete Goals ${req.params.id} ..` })
}

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };