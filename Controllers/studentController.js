const students = require('../Models/studentSchema')


exports.register = async (req, res) => {
    console.log("inside student register")
    res.status(200).json("student registered successfully")
    const { name, age, email, location } = req.body;
    // first check whether student is already registered
    const existingStudent = await students.findOne({ email: email })
    try {
        if (existingStudent) {
            res.status(406).json("Student already exists")
        }
        else {
            const newStudent = new students({
                name: name,
                age: age,
                email: email,
                location: location
            })
            await newStudent.save();
            res.status(200).json("Student registered successfully")
        }

    } catch (err) {
        res.status(401).json("Add student request failed due to ", err)
    }

}

exports.getallstudents = async (req, res) => {
    try {
        const allStudents = await students.find()
        res.status(200).json(allStudents)
    } catch (err) {
        res.status(401).json("Error is getting data", err)
    }
}

exports.getStudentWithName = async (req, res) => {
    const name = req.query.name;
    try {
        const getStudents = await students.find({ name: name })
        res.status(200).json(getStudents)
    } catch (err) {
        res.status(401).json("fetch error", err)
    }
}

// update
exports.updateStudent = async (req, res) => {
    const { id } = req.params;
    const { name, email, age, location } = req.body;
    try {
        const updateStudent = await students.findByIdAndUpdate({ _id: id },
            {
                name: name,
                email: email,
                age: age,
                location: location
            },{
                new:true
        })
        await updateStudent.save();
        res.status(200).json("Student updated successfully")
    } catch (err) {
        res.status(401).json("update failed", err)
    }

}
